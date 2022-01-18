using EnsureThat;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Linq;

namespace CleanArch.Client.MVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly RequestLocalizationOptions localizationOptions;

        public HomeController(IOptions<RequestLocalizationOptions> localizationOptionsAccessor)
        {
            localizationOptions = EnsureArg.IsNotNull(localizationOptionsAccessor.Value, nameof(localizationOptionsAccessor.Value));
        }

        public ActionResult Index()
        {
            return View();
        }

        private string _currentLanguage;

        private string CurrentLanguage
        {
            get
            {
                if (!string.IsNullOrEmpty(_currentLanguage))
                    return _currentLanguage;

                if (string.IsNullOrEmpty(_currentLanguage))
                {
                    var feature = HttpContext.Features.Get<IRequestCultureFeature>();
                    _currentLanguage = feature.RequestCulture.Culture.TwoLetterISOLanguageName.ToLower();
                }

                return _currentLanguage;
            }
        }

        public ActionResult RedirectToDefaultCulture()
        {
            var culture = CurrentLanguage;
            if (culture != "en")
                culture = "en";
            return RedirectToAction("Index", new { culture });
        }

        public IActionResult Error()
        {
            return View();
        }

        [HttpPost]
        public IActionResult SetLanguage(string language)
        {
            var uiCulture = "en-US";

            if (localizationOptions.SupportedUICultures.Any(c => c.Name == language))
            {
                uiCulture = language;
            }

            Response.Cookies.Append(
                CookieRequestCultureProvider.DefaultCookieName,
                CookieRequestCultureProvider.MakeCookieValue(new RequestCulture("en-US", uiCulture)),
                new CookieOptions
                {
                    Expires = DateTimeOffset.UtcNow.AddYears(1)
                });
            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Subscribe()
        {
            return StatusCode(500);
        }
    }
}  