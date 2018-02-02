using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CRUDEmployee.Models;

namespace EmployeeCRUD.Controllers
{
    public class LoginController : Controller
    {
        private EmployeeDBEntities db = new EmployeeDBEntities();
        // GET: Login
        public ActionResult VerifyUser(tbl_Employee obj)
        {
            var user = db.tbl_Employee.Where(x => x.Username.Equals(obj.Username) && x.Password.Equals(obj.Password)).SingleOrDefault();
            return new JsonResult { Data = user, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
    }
}