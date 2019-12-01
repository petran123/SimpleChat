using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleChat.Models
{
    public class User
    {
        public int Id { get; set; }

        [Index(IsUnique = true)]
        public string UserName { get; set; }
        
        // This would be used to check if the user is online or not
        public bool IsActive { get; set; }

    }
}
