using Microsoft.AspNetCore.Mvc;

namespace CleanArch.Client.MVC.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
