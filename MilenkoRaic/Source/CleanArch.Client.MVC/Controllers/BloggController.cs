using Microsoft.AspNetCore.Mvc;

namespace CleanArch.Client.MVC.Controllers
{
    public class BloggController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
