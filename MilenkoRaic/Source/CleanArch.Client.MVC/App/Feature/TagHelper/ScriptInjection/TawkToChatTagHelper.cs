using System;
using CleanArch.Client.Infrastructure.Communication.Chat.TawkTo;
using CleanArch.Client.Infrastructure.DataHosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.Extensions.Options;

namespace CleanArch.Client.MVC.App.Feature.TagHelper.ScriptInjection
{
    public class TawkToChatTagHelper : TagHelperComponent
    {
        private readonly ApplicationHost applicationHost;
        private readonly TawkToChat tawkToChat;

        private HttpContext HttpContext => ViewContext.HttpContext;

        [ViewContext]
        public ViewContext ViewContext { get; set; }

        public TawkToChatTagHelper(IOptions<ApplicationHost> applicationHost, IOptions<TawkToChat> tawkToChat)
        {
            this.applicationHost = applicationHost.Value;
            this.tawkToChat = tawkToChat.Value;
        }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            var consentFeature = HttpContext.Features.Get<ITrackingConsentFeature>();
            var cookieCanTrack = (HttpContext.Request.Cookies[".CanTrack"]);

            // Inject the code only in the head element
            if (string.Equals(output.TagName, "head", StringComparison.OrdinalIgnoreCase))
            {
                var basePublicUrl = applicationHost.BasePublicUrl;
                var propertyId = tawkToChat.PropertyId;
                var chatWindowId = tawkToChat.ChatWindowId;

                if (!string.IsNullOrEmpty(basePublicUrl) && !string.IsNullOrEmpty(propertyId) && !string.IsNullOrEmpty(chatWindowId) && cookieCanTrack != null && consentFeature.CanTrack)
                {
                    string chatInitializationScript = 
                        "var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();" +
                        "(function () {" +
                            "var s1 = document.createElement(\"script\"), " +
                            "s0 = document.getElementsByTagName(\"script\")[0];" +
                            "s1.async = true;" +
                            "s1.src = '/chat/twkChatInit.min.js';" +
                            "s1.charset = 'UTF-8';" +
                            "s1.setAttribute('crossorigin', '*');" +
                            "s0.parentNode.insertBefore(s1, s0);" +
                        "})();";

                    string customChatStyleScript =
                        "var def_tawk_bottom = \"20px\"; /*This is their default style that I want to change*/" +
                        "var def_tawk_right = \"16px\"; /*This is their default style that I want to change*/" +
                        "var customize_tawk = \"\"; /*Interval object*/" +
                        "function customize_tawk_widget(){" +
                        "    var cur_bottom = jQuery(\"iframe[title='chat widget']\").eq(0).css('bottom'); /*Get the default style*/" +
                        "    var cur_right = jQuery(\"iframe[title='chat widget']\").eq(0).css('right'); /*Get the default style*/" +
                        "    if(cur_bottom == def_tawk_bottom && cur_right == def_tawk_right){" +
                        "        /*Check if the default style exists then remove it and add my custom style*/" +
                        "        jQuery(\"iframe[title='chat widget']\").eq(0).css({ 'right': '', 'bottom': '' });" +
                        "        jQuery(\"iframe[title='chat widget']\").eq(0).addClass(\"custom-chat-widget\");" +
                        "        clearInterval(customize_tawk);" +
                        "    }" +
                        "}" +
                        "/*Customize the widget as soon as the widget is loaded*/" +
                        "Tawk_API = Tawk_API || {};" +
                        "Tawk_API.onLoad = function(){" +
                        "    /*Only for mobile version*/" +
                        "    if(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent) ) {" +
                        "        var customize_tawk = setInterval(customize_tawk_widget, 100);" +
                        "    }" +
                        "};" +
                        "/*Customize the widget as soon as the widget is minimized*/" +
                        "Tawk_API = Tawk_API || {};" +
                        "Tawk_API.onChatMinimized = function(){" +
                        "    /*Only for mobile version*/" +
                        "    if(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent) ) {" +
                        "        var customize_tawk = setInterval(customize_tawk_widget, 100);" +
                        "    }" +
                        "};";

                // PostContent correspond to the text just before closing tag
                output.PostContent.AppendHtml(
                    "<script type='text/javascript'>" + chatInitializationScript + "</script>" +
                    "<script type='text/javascript'>" + customChatStyleScript + "</script>"
                    );
                }
            }
        }
    }
}
