﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CleanArch.Client.MVC.Controllers
{
    public class DownloadsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
