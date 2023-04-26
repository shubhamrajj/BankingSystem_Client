using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BankingSystem_client.Models
{
    public class CustomerProfileModel
    {
        public int AccountNo { get; set; }
        [Required]
        [Display(Name = "Customer Name")]
        public string CustomerName { get; set; }
        [Required]
        public long PhoneNo { get; set; }
        [Required]
        public string Addrss { get; set; }
        [Required]
        [RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$", ErrorMessage = "Please enter a valid e-mail adress")]
        public string MailId { get; set; }
        [Required]
        public DateTime DtOfOpeningAccnt { get; set; }
        [Required]
        public string AccountType { get; set; }
        [Required]
        public string Psswrd { get; set; }
        [Required]
        public long Balance { get; set; }
    }
}