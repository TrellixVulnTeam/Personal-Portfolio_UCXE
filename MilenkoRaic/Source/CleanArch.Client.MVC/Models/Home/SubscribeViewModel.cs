using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CleanArch.Client.MVC.Models.Home
{
    public class SubscribeViewModel
    {
        [Required]
        [EmailAddress]
        [RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$", ErrorMessage = "Email is not valid.")]
        [Display(Name = "E-mail")]
        public string Email { get; set; }

    }
}
