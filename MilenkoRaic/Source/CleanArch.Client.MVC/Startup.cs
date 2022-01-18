using CleanArch.Client.Infrastructure.Analytics.Google;
using CleanArch.Client.Infrastructure.Communication.Chat.TawkTo;
using CleanArch.Client.Infrastructure.Communication.Email;
using CleanArch.Client.Infrastructure.Communication.Email.Options;
using CleanArch.Client.Infrastructure.DataAccess;
using CleanArch.Client.Infrastructure.DataHosting;
using CleanArch.Client.Infrastructure.GeoData;
using CleanArch.Client.Infrastructure.SEO;
using CleanArch.Client.MVC.App.Feature.EmailTemplate;
using CleanArch.Client.MVC.App.Feature.EmailTemplate.Registration;
using CleanArch.Client.MVC.App.Feature.TagHelper.ScriptInjection;
using CleanArch.Client.MVC.App.Localization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.Net.Http.Headers;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Reflection;

namespace CleanArch.Client.MVC
{
    public class Startup
    {
        private IConfiguration Configuration { get; }
        private IWebHostEnvironment HostingEnvironment { get; }

        public Startup(IConfiguration _configuration, IWebHostEnvironment _hostingEnvironment)
        {
            Configuration = _configuration;
            HostingEnvironment = _hostingEnvironment;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            RegisterDomainServices(services);
            RegisterTagHelpers(services);
            RegisterTemplates(services);
            ConfigureLocalization(services);

            services.AddMvc(option => option.EnableEndpointRouting = false).AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix)
               .AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix)
               .AddRazorRuntimeCompilation()
               .AddDataAnnotationsLocalization();

            services.AddDataProtection();

            services.Configure<RequestLocalizationOptions>(options =>
            {
                var supportedCultures = new[]
                {
                    new CultureInfo("en-US"),
                    new CultureInfo("sv-SE"),
                };

                options.DefaultRequestCulture = new RequestCulture(culture: "en-US", uiCulture: "en-US");
                options.SupportedCultures = supportedCultures;
                options.SupportedUICultures = supportedCultures;
                options.RequestCultureProviders = new[]{ new RouteDataRequestCultureProvider{
                    IndexOfCulture=1,
                    IndexofUICulture=1
                }};
            });

            services.Configure<RouteOptions>(options =>
            {
                options.ConstraintMap.Add("culture", typeof(LanguageRouteConstraint));
            });

            services.Configure<CookiePolicyOptions>(options =>
            {
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = Microsoft.AspNetCore.Http.SameSiteMode.Strict;
            });

            services.Configure<ApplicationHost>(Configuration.GetSection("ApplicationHost"));
            services.Configure<DatabaseConnection>(Configuration.GetSection("DatabaseConnection"));
            services.Configure<EmailAccess>(Configuration.GetSection("EmailAccess"));
            services.Configure<EmailAddress>(Configuration.GetSection("EmailAddress"));
            services.Configure<GoogleAnalytics>(Configuration.GetSection("GoogleAnalytics"));
            services.Configure<TawkToChat>(Configuration.GetSection("TawkToChat"));
            services.Configure<GoogleMaps>(Configuration.GetSection("GoogleMaps"));
        }

        private static void RegisterDomainServices(IServiceCollection services)
        {
            services.AddSingleton<ConnectionBuilder>();
            services.AddSingleton<EmailSender>();
        }

        private static void RegisterTagHelpers(IServiceCollection services)
        {
            services.AddSingleton<ITagHelperComponent, MetadataInjector>();
            services.AddSingleton<ITagHelperComponent, GoogleAnalyticsTagHelper>();
            services.AddSingleton<ITagHelperComponent, TawkToChatTagHelper>();
            services.AddSingleton<ITagHelperComponent, ServiceWorkerTagHelper>();
        }

        private void RegisterTemplates(IServiceCollection services)
        {
            var templateEngine = new TemplateEngine();
            templateEngine.RegisterTemplate(Register.EmailTemplate.Contact.TemplateName, Register.EmailTemplate.Contact.Path.Replace("~", HostingEnvironment.ContentRootPath));
            services.AddSingleton(templateEngine);
        }

        private static void ConfigureLocalization(IServiceCollection services)
        {
            services.AddLocalization(o => o.ResourcesPath = "App.Localization");
            var supportedUiCultures = new[]
            {
                new CultureInfo("en-US"),
                new CultureInfo("sv")
            };

            var requestCultureProviders = new List<IRequestCultureProvider>
            {
                new CookieRequestCultureProvider()
            };

            services.Configure<RequestLocalizationOptions>(o =>
            {
                o.DefaultRequestCulture = new RequestCulture("en-US");
                o.SupportedUICultures = supportedUiCultures;
                o.SupportedCultures = supportedUiCultures;
                o.RequestCultureProviders = requestCultureProviders;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseCookiePolicy();

            var locOptions = app.ApplicationServices.GetService<IOptions<RequestLocalizationOptions>>();

            app.UseRequestLocalization(locOptions.Value);

            app.UseStaticFiles(new StaticFileOptions()
            {
                OnPrepareResponse = (context) => {
                    var headers = context.Context.Response.GetTypedHeaders();
                    headers.CacheControl = new CacheControlHeaderValue()
                    {
                        MaxAge = TimeSpan.FromDays(1)
                    };
                }
            });

            Directory.SetCurrentDirectory(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location));
            loggerFactory.AddFile("Logs/milenkoraic-{Date}.txt");

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "set_language",
                    template: "lang",
                    defaults: new { controller = "Home", action = "SetLanguage" }
                );

                routes.MapRoute(
                    name: "about",
                    template: "{culture}/about",
                    defaults: new { controller = "About", action = "Index" }
                );
                routes.MapRoute(
                    name: "about_work",
                    template: "{culture}/about-work",
                    defaults: new { controller = "AboutWork", action = "Index" }
                );
                routes.MapRoute(
                    name: "blogg",
                    template: "{culture}/blogg",
                    defaults: new { controller = "Blogg", action = "Index" }
                );
                routes.MapRoute(
                    name: "certificates",
                    template: "{culture}/certificates",
                    defaults: new { controller = "Certificates", action = "Index" }
                );
                routes.MapRoute(
                    name: "contact",
                    template: "{culture}/contact",
                    defaults: new { controller = "Contact", action = "Index" }
                );
                routes.MapRoute(
                    name: "contact_submit",
                    template: "{culture}/contact/submit",
                    defaults: new { controller = "Contact", action = "Submit" }
                );
                routes.MapRoute(
                    name: "downloads",
                    template: "{culture}/downloads",
                    defaults: new { controller = "Downloads", action = "Index" }
                );
                routes.MapRoute(
                    name: "portfolio",
                    template: "{culture}/portfolio",
                    defaults: new { controller = "Portfolio", action = "Index" }
                );
                routes.MapRoute(
                    name: "privacy",
                    template: "{culture}/privacy",
                    defaults: new { controller = "Privacy", action = "Index" }
                );
                routes.MapRoute(
                    name: "skills",
                    template: "{culture}/skills",
                    defaults: new { controller = "Skills", action = "Index" }
                );
                routes.MapRoute(
                    name: "services",
                    template: "{culture}/services",
                    defaults: new { controller = "Services", action = "Index" }
                );
                routes.MapRoute(
                    name: "testimonials",
                    template: "{culture}/testimonials",
                    defaults: new { controller = "Testimonials", action = "Index" }
                );
                routes.MapRoute(
                    name: "subscribe",
                    template: "{culture}/subscribe",
                    defaults: new { controller = "Home", action = "Subscribe" }
                );
                routes.MapRoute(
                    name: "home",
                    template: "",
                    defaults: new { controller = "Home", action = "RedirectToDefaultCulture" }
                );
                routes.MapRoute(
                    name: "LocalizedDefault",
                    template: "{culture}/{controller=Home}/{action=Index}"
                );
            });
        }
    }
}
