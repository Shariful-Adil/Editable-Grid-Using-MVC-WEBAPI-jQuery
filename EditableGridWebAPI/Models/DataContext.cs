using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EditableGridWebAPI.Models
{
    public class DataContext : DbContext
    {
        public DataContext()
            : base("name=DbConnection") { }

        public DbSet<Student> Students { get; set; }


    }
}