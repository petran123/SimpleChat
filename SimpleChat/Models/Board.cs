using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleChat.Models
{
    public class Board
    {
        // This file does nothing for now. It would be used to keep track of which board contains what

        public int Id { get; set; }
        public string Name { get; set; }
        public List<User> Users { get; set; }
        public List<Message> Messages { get; set; }
    }
}
