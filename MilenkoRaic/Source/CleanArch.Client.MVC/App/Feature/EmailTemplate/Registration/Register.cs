using IOPath = System.IO.Path;

namespace CleanArch.Client.MVC.App.Feature.EmailTemplate.Registration
{
    public static class Register
    {
        private const string designPath = "~/App/Feature/EmailTemplate/Design/";

        public static class EmailTemplate
        {
            private const string templatePath = "Contact/";

            public static class Contact
            {
                public static readonly string TemplateName = nameof(Contact);

                public static readonly string Path = IOPath.Combine(designPath, templatePath,
                    "Contact.template");
            }     
        }
    }
}