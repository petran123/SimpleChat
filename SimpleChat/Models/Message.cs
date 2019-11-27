using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleChat.Models
{
    public class Message
    {
        public int Id { get; set; }
        public String UserName { get; set; }

        // this would be used if we had multiple boards
        //public Board Board { get; set; }

        public string MessageBody { get; set; }
    }
}
