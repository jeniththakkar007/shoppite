using Shoppite.Application.Queries;
using Shoppite.Core.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Shoppite.Application.Handlers.QueryHandlers
{
    public class GetAllCategoryHandler : IRequestHandler<GetAllCategoryQuery, List<Shoppite.Core.Entities.Category>>
    {
        private readonly ICategoryRepository _categoryRepo;

        public GetAllCategoryHandler(ICategoryRepository categoryRepository)
        {
            _categoryRepo = categoryRepository;
        }
        public async Task<List<Core.Entities.Category>> Handle(GetAllCategoryQuery request, CancellationToken cancellationToken)
        {
            return (List<Core.Entities.Category>)await _categoryRepo.GetAllAsync();
        }
    }
}
