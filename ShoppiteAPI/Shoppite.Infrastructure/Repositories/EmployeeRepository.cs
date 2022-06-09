using Shoppite.Core.Repositories;
using Shoppite.Infrastructure.Data;
using Shoppite.Infrastructure.Repositories.Base;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shoppite.Infrastructure.Repositories
{
    public class CategoryRepository : Repository<Shoppite.Core.Entities.Category>, ICategoryRepository
    {
        public CategoryRepository(ShoppiteContext shoppiteContext) : base(shoppiteContext)
        {

        }
        public async Task<IEnumerable<Core.Entities.Category>> GetEmployeeByLastName(string lastname)
        {
            return await _shoppiteContext.Categories
                .Where(m => m.LastName == lastname)
                .ToListAsync();
        }
    }
}
