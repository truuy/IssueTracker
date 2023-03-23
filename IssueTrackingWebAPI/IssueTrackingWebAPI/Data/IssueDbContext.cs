using Microsoft.EntityFrameworkCore;
using IssueTrackingWebAPI.Models;

namespace IssueTrackingWebAPI.Data
{
    public class IssueDbContext : DbContext
    {
        //constructor
        public IssueDbContext(DbContextOptions<IssueDbContext> options)
            :base(options)
        {

        }

        // used to manipulate table in the database
        public DbSet<Issue> Issues { get; set; }
    }
}
