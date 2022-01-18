namespace CleanArch.Client.MVC.App.Feature.EmailTemplate.Model.Contact
{
    public class ContactModel: ITemplateModel
    {
        public string Email { get; set; }

        public string Name { get; set; }

        public string Phone { get; set; }

        public string Company { get; set; }

        public string Manager { get; set; }

        public string Subject { get; set; }

        public string Message { get; set; }
    }
}
