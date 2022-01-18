using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace CleanArch.Client.MVC.App.Feature.TagHelper.ScriptInjection
{
    public class ServiceWorkerTagHelper : TagHelperComponent
    {
        private HttpContext HttpContext => ViewContext.HttpContext;

        [ViewContext]
        public ViewContext ViewContext { get; set; }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            var consentFeature = HttpContext.Features.Get<ITrackingConsentFeature>();
            var cookieCanTrack = (HttpContext.Request.Cookies[".CanTrack"]);

            // Inject the code only in the head element
            if (string.Equals(output.TagName, "head", StringComparison.OrdinalIgnoreCase))
            {

                if (cookieCanTrack != null && consentFeature.CanTrack)
                {
                    string serviceWorkerRegistrationScript = "if ('serviceWorker' in navigator) {navigator.serviceWorker.register('/sw.js').then(function(registration) {console.log('Service worker registration succeeded:', registration);},  function(error) {console.log('Service worker registration failed:', error);});} else {console.log('Service workers are not supported.');}";

                // PostContent correspond to the text just before closing tag
                output.PostContent.AppendHtml(
                    "<script defer type='text/javascript'>" + serviceWorkerRegistrationScript + "</script>" 
                    );
                }
            }
        }
    }
}
