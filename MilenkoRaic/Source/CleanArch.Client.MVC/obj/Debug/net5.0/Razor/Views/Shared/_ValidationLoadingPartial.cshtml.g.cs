#pragma checksum "C:\Users\Administrator\Desktop\Projects\MilenkoRaic\Source\CleanArch.Client.MVC\Views\Shared\_ValidationLoadingPartial.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "c655c6cc947b4812b0feac5386a65fc173880835"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(CleanArch.Client.MVC.Views.Shared.Views_Shared__ValidationLoadingPartial), @"mvc.1.0.view", @"/Views/Shared/_ValidationLoadingPartial.cshtml")]
namespace CleanArch.Client.MVC.Views.Shared
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\Administrator\Desktop\Projects\MilenkoRaic\Source\CleanArch.Client.MVC\Views\_ViewImports.cshtml"
using CleanArch.Client.MVC;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c655c6cc947b4812b0feac5386a65fc173880835", @"/Views/Shared/_ValidationLoadingPartial.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0d2b223c3a68f0f67c8b1d4218a107e70beb9ecf", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared__ValidationLoadingPartial : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("error-message"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.ValidationSummaryTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_ValidationSummaryTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@"<div class=""loading-mask"">
    <content class=""loading text-center justify-content-center"">
        <ul class=""hexagon-container"">
            <li class=""hexagon hex_1""></li>
            <li class=""hexagon hex_2""></li>
            <li class=""hexagon hex_3""></li>
            <li class=""hexagon hex_4""></li>
            <li class=""hexagon hex_5""></li>
            <li class=""hexagon hex_6""></li>
            <li class=""hexagon hex_7""></li>
        </ul>
    </content>
    <footer class=""loading-footer container-fluid text-center"">
        <h4>{ Wait, where is the honey? }</h4>
        <p>You upset the guard. We are preparing a safe entrance to the hive for you! </p>
    </footer>
</div>
<div class=""loading-mask"">
    <div class=""loading"">
        <ul class=""hexagon-container"">
            <li class=""hexagon hex_1""></li>
            <li class=""hexagon hex_2""></li>
            <li class=""hexagon hex_3""></li>
            <li class=""hexagon hex_4""></li>
            <li class=""hexagon hex_5""></l");
            WriteLiteral(@"i>
            <li class=""hexagon hex_6""></li>
            <li class=""hexagon hex_7""></li>
        </ul>
        <div class=""loading-footer"">
            <p>We ared processing your request! <br /> Please wait...</p>
        </div>
    </div>
    <div class=""sent-message"">
        <i class=""bx bx-check-circle"" data-toggle=""tooltip"" title=""Success""></i>
        <div class=""sent-message-footer"">
            <p>Congratulations! Your message has been successfully sent. I will contact you very soon!</p>
        </div>
    </div>
    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("div", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "c655c6cc947b4812b0feac5386a65fc1738808355122", async() => {
                WriteLiteral("\r\n        <i class=\"bx bi-clipboard-x\" data-toggle=\"tooltip\" title=\"Error\"></i>\r\n        <div class=\"error-message-footer\">\r\n            <p>We are sorry. Currently unavailable. This feature is under development!</p>\r\n");
                WriteLiteral("        </div>\r\n    ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_ValidationSummaryTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.ValidationSummaryTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_ValidationSummaryTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
#nullable restore
#line 39 "C:\Users\Administrator\Desktop\Projects\MilenkoRaic\Source\CleanArch.Client.MVC\Views\Shared\_ValidationLoadingPartial.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_ValidationSummaryTagHelper.ValidationSummary = global::Microsoft.AspNetCore.Mvc.Rendering.ValidationSummary.All;

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-validation-summary", __Microsoft_AspNetCore_Mvc_TagHelpers_ValidationSummaryTagHelper.ValidationSummary, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n</div>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
