using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SimpleChat.Models;

namespace SimpleChat.Data
{
    public class BoardContext : DbContext
    {
        public BoardContext(DbContextOptions<BoardContext> options) : base(options)
        {
        }

        //board would be used if we had multiple channels
        //public DbSet<Board> Boards { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Message> Messages { get; set; }

    }
}
