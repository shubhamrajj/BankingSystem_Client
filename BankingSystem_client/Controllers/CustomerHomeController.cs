﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BankingSystem_client.Controllers
{
    public class CustomerHomeController : Controller
    {
        // GET: CustomerHome
        public ActionResult Index()
        {
            return View();
        }
    }
}