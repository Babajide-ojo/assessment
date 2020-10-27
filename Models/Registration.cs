using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Registration
    {
        public int Id { get; set; }

        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public DateTime Date { get; set; }
        public string EmailAddress { get; set; }
        public string  City { get; set; }
        public string State { get; set; }
        public string Address  { get; set; }
        public string Gender { get; set; }
        public long PhoneNumber { get; set; }

    }
}
