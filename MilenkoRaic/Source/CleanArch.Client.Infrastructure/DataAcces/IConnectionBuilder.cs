using System.Data.Common;
using System.Threading.Tasks;

namespace CleanArch.Client.Infrastructure.DataAccess
{
    public interface IConnectionBuilder
    {
        DbConnection Create();
        DbConnection CreateOpen();
        Task<DbConnection> CreateOpenAsync();
    }
}