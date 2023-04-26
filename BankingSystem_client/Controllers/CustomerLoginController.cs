using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BankingSystem_client.Models;

namespace BankingSystem_client.Controllers
{
    public class CustomerLoginController : Controller
    {
        // GET: CustomerLogin
        public ActionResult Index()
        {
            return View();
        }

        //[HttpPost]
        //public ActionResult Authorize(BankingSystem_client.Models.Customer customer)
        //{
        //    using (BankDBOEntities db = new BankDBOEntities())
        //    {
        //        var userDetails = db.Customers.Where(x => x.CustomerName == customer.CustomerName && x.Psswrd == customer.Psswrd).FirstOrDefault();
        //        if (userDetails == null)
        //        {
        //            customer.LoginErrorMessage = "Wrong Name or Password.";
        //            return View("Index", customer);
        //        }
        //        else
        //        {
        //            Session["AccountNo"] = userDetails.AccountNo;
        //            Session["CustomerName"] = userDetails.CustomerName;
        //            return RedirectToAction("Index", "CustomerHome");
        //        }
        //    }
        //}
        //public ActionResult LogOut()
        //{
        //    //int ID = (int)Session["ID"];
        //    Session.Abandon();
        //    return RedirectToAction("Index", "CustomerLogin");
        //}
    }
}