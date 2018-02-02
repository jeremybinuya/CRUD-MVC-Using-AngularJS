using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CRUDEmployee.Models;

namespace EmployeeCRUD.Controllers
{
    public class EventsController : Controller
    {
        private EmployeeDBEntities db = new EmployeeDBEntities();
        // GET: Events
        public ActionResult Index()
        {
            return Json(db.tbl_Events.ToList(), JsonRequestBehavior.AllowGet);
        }

        //GET: Events/Details/id
        public ActionResult Details(int id)
        {
            tbl_Events events = db.tbl_Events.Find(id);
            return Json(events, JsonRequestBehavior.AllowGet);
        }

        //POST: Events/Delete/id
        [HttpPost]
        public ActionResult Delete(int id)
        {
            tbl_Events events = db.tbl_Events.Find(id);
            db.tbl_Events.Remove(events);
            db.SaveChanges();
            return Json(events, JsonRequestBehavior.AllowGet);
        }

        //POST: Events/Create
        [HttpPost]
        public ActionResult Create(tbl_Events events)
        {
            db.tbl_Events.Add(events);
            db.SaveChanges();
            return Json(events, JsonRequestBehavior.AllowGet);
        }
    }
}