using CleanArch.Client.Core.DataModel.Service;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CleanArch.Client.Core.Repository.Service
{
    public interface IServiceRepository
    {
        Task<int> AddNewService(ServiceModel service);
        Task<ServiceModel> GetServiceById(int service_id);
        Task<IEnumerable<ServiceModel>> GetServicesAsync();
        Task<int> ModifyServiceById(ServiceModel service, int service_id);
    }
}