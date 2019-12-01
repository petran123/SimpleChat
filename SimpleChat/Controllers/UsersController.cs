using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SimpleChat.Data;
using SimpleChat.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleChat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly BoardContext _context;

        public UsersController(BoardContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutUser(int id, User user)
        //{
        //    if (id != user.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(user).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!UserExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/Users
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {

            var takenName = await _context.Users.Where(u => u.UserName == user.UserName).FirstOrDefaultAsync();
            // if the name already exists and is unused, use it
            if (!(takenName is null))
            {
                if (!takenName.IsActive)
                {
                    // Currently the users are stuck as active until the server restarts.
                    // TODO implement logout and timeout system
                    takenName.IsActive = true;
                    await _context.SaveChangesAsync();

                    return takenName;
                }
                // this attaches a number to the user's name to avoid duplicates
                int i = 1;
                while (await _context.Users.Where(u => u.UserName == user.UserName + $" ({i})").AnyAsync())
                {
                    i++;
                }

                user.UserName += $" ({i})";

            }

            _context.Users.Add(user);
            await _context.SaveChangesAsync();


            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }
    }
}
