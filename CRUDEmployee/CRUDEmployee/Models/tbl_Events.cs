//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CRUDEmployee.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tbl_Events
    {
        public int EvtId { get; set; }
        public string EvtName { get; set; }
        public System.DateTime EvtDate { get; set; }
        public Nullable<int> EmpId { get; set; }
    
        public virtual tbl_Employee tbl_Employee { get; set; }
    }
}
