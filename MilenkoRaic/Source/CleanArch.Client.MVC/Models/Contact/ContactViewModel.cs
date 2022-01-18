using System.ComponentModel.DataAnnotations;

namespace CleanArch.Client.MVC.Models.Contact
{
    public class ContactViewModel
    {

        [Required]
        [EmailAddress]
        [RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$", ErrorMessage = "Email is not valid.")]
        [Display(Name = "E-mail")]
        public string Email { get; set; }

        [StringLength(255)]
        public string Name { get; set; }

        [Phone]
        public string Phone { get; set; }

        [StringLength(255)]
        public string Company { get; set; }

        [StringLength(255)]
        public string Manager { get; set; }

        [StringLength(255)]
        public string Subject { get; set; }

        [StringLength(10000)]
        public string Message { get; set; }
    }
}
