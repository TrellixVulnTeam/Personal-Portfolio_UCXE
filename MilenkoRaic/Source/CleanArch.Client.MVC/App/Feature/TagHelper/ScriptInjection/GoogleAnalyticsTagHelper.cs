using CleanArch.Client.Infrastructure.Analytics.Google;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.Extensions.Options;
using System;

namespace CleanArch.Client.MVC.App.Feature.TagHelper.ScriptInjection
{
    public class GoogleAnalyticsTagHelper : TagHelperComponent
    {
        private readonly GoogleAnalytics googleAnalytics;

        private HttpContext HttpContext => ViewContext.HttpContext;

        [ViewContext]
        public ViewContext ViewContext { get; set; }

        public GoogleAnalyticsTagHelper(IOptions<GoogleAnalytics> googleAnalytics)
        {
            this.googleAnalytics = googleAnalytics.Value;
        }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            var consentFeature = HttpContext.Features.Get<ITrackingConsentFeature>();
            var cookieCanTrack = (HttpContext.Request.Cookies[".CanTrack"]);

            // Inject the code only in the head element
            if (string.Equals(output.TagName, "head", StringComparison.OrdinalIgnoreCase) && cookieCanTrack != null)
            {
                // Get the api key from the configuration
                var apiKey = googleAnalytics.ApiKey;

                if (!string.IsNullOrEmpty(apiKey) && consentFeature.CanTrack)
                {
                    // Post script correspond to the text just before closing tag
                    output.PostContent

                        // Inject Google Analytics script
                        .AppendHtml("<script async src='https://www.googletagmanager.com/gtag/js?id=" + apiKey + "'></script><script>window.dataLayer = window.dataLayer || [];function gtag(){ dataLayer.push(arguments); }gtag('js', new Date());gtag('config'," + "'" + apiKey + "');</script>");
                }
            }
        }
    }
}