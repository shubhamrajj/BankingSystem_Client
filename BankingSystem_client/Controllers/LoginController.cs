using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BankingSystem_client.Models;

namespace BankingSystem_client.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }

        //[HttpPost]
        //public ActionResult Authorize(BankingSystem_client.Models.Admin admin)
        //{
        //    using (BankDBOEntities db = new BankDBOEntities())
        //    {
        //        var userDetails = db.Admins.Where(x => x.Name == admin.Name && x.Psswrd == admin.Psswrd).FirstOrDefault();
        //        if(userDetails == null)
        //        {
        //            admin.LoginErrorMessage = "Wrong Name or Password.";
        //            return View("Index", admin);
        //        }
        //        else{
        //            Session["ID"] = userDetails.ID;
        //            Session["Name"] = userDetails.Name;
        //            return RedirectToAction("Index", "Customer");
        //        }
        //    }    
        //}
        //public ActionResult LogOut()
        //{
        //    //int ID = (int)Session["ID"];
        //    Session.Abandon();
        //    return RedirectToAction("Index","Login");
        //}
    }
}