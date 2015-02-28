using EditableGridWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EditableGridWebAPI.Controllers
{
    public class StudentAPIController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public string SaveStudents(List<Student> students)
        {
            using (DataContext oDataContext = new DataContext())
            {

                try
                {
                    foreach (Student oStudent in students)
                    {
                        oDataContext.Students.Add(oStudent);

                    }
                    oDataContext.SaveChanges();
                }

                catch (Exception ex)
                {
                    throw ex;
                }

            }


            return "Saved !!";
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}