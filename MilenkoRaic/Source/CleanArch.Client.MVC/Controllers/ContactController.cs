using CleanArch.Client.Infrastructure.Communication.Email;
using CleanArch.Client.Infrastructure.Communication.Email.Options;
using CleanArch.Client.MVC.App.Feature.EmailTemplate;
using CleanArch.Client.MVC.App.Feature.EmailTemplate.Model.Contact;
using CleanArch.Client.MVC.App.Feature.EmailTemplate.Registration;
using CleanArch.Client.MVC.Models.Contact;
using EnsureThat;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Threading.Tasks;

namespace CleanArch.Client.MVC.Controllers
{
    public class ContactController : Controller
    {
        private readonly EmailSender emailSender;
        private readonly ILogger<HomeController> logger;
        private readonly EmailAddress emailAddress;
        private readonly TemplateEngine templateEngine;

        public ContactController(EmailSender emailSender,
            IOptions<EmailAddress> emailAddressAccessor,
            ILogger<HomeController> logger,
            TemplateEngine templateEngine)
        {
            if (emailAddressAccessor == null)
            {
                throw new ArgumentNullException(nameof(emailAddressAccessor));
            }

            this.emailSender = emailSender ?? throw new ArgumentNullException(nameof(emailSender));
            this.logger = logger ?? throw new ArgumentNullException(nameof(logger));
            emailAddress = emailAddressAccessor.Value;
            this.templateEngine = EnsureArg.IsNotNull(templateEngine, nameof(templateEngine));
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Submit([FromBody] ContactViewModel model)
        {
            try
            {
                string subject = "NEW CONTACT EMAIL RECIEVED FROM " + model.Name;

                var contactModel = new ContactModel
                {
                    Email = "EMAIL: " + model.Email,
                    Name = "NAME: " + model.Name,
                    Phone = "PHONE: " + model.Phone,
                    Company = "COMPANY:" + model.Company,
                    Manager = "MANAGER:" + model.Manager,
                    Subject = "SUBJECT: " + model.Subject,
                    Message = "MESAGGE: " + model.Message
                };

                var body = templateEngine.Render(Register.EmailTemplate.Contact.TemplateName,
                    ("contactModel", contactModel));

                await emailSender.SendEmailAsync(emailAddress.DomainAddress, emailAddress.RecipientAddress, subject, body);
                return Ok();
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "An exception occurred while sending the email.");
                return StatusCode(500);
            }
        }
    }
}
