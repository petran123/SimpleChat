using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleChat.Models
{
    public class Message
    {
        public int Id { get; set; }
        public User User { get; set; }
        public Board Board { get; set; }
        public string MessageBody { get; set; }
    }
}
