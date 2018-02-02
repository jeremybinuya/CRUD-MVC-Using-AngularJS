using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CRUDEmployee.Models;
using System.Data.Entity;

namespace EmployeeCRUD.Controllers
{
    public class EmployeesController : Controller
    {
        private EmployeeDBEntities db = new EmployeeDBEntities();
        // GET: Employees
        public ActionResult Index()
        {
            return Json(db.tbl_Employee.ToList(), JsonRequestBehavior.AllowGet);
        }

        //GET: Employees/Deatails/:id
        public ActionResult Details (int id)
        {
            tbl_Employee employee = db.tbl_Employee.Find(id);
            return Json(employee, JsonRequestBehavior.AllowGet);
        }

        //POST: Employees/Delete/id
        [HttpPost]
        public ActionResult Delete (int id)
        {
            tbl_Employee employee = db.tbl_Employee.Find(id);
            db.tbl_Employee.Remove(employee);
            db.SaveChanges();
            return Json(employee, JsonRequestBehavior.AllowGet);
        }

        //POST: Employees/Create
        [HttpPost]
        public ActionResult Create(tbl_Employee employee)
        {
            db.tbl_Employee.Add(employee);
            db.SaveChanges();
            return Json(employee, JsonRequestBehavior.AllowGet);
        }

        //POST: Employees/Edit/id
        [HttpPost]
        public ActionResult Edit(tbl_Employee employee)
        {
            db.Entry(employee).State = EntityState.Modified;
            db.SaveChanges();
            return Json(employee, JsonRequestBehavior.AllowGet);
        }
    }
}