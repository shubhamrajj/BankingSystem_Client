//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BankingSystem_client.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Transaction_Bank
    {
        public int TransactionId { get; set; }
        public Nullable<System.DateTime> DateOfTransaction { get; set; }
        public string TypeOfTransaction { get; set; }
        public Nullable<double> Amount_transacted { get; set; }
        public Nullable<int> AccountNo { get; set; }
    
        public virtual Customer Customer { get; set; }
    }
}
