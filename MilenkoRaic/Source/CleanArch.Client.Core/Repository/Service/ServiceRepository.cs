
using Dapper;
using EnsureThat;
using CleanArch.Client.Core.DataModel.Service;
using Npgsql;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using CleanArch.Client.Infrastructure.DataAccess;

namespace CleanArch.Client.Core.Repository.Service
{

    public class ServiceRepository : IServiceRepository
    {
        private readonly IConnectionBuilder connectionBuilder;

        public ServiceRepository(IConnectionBuilder _connectionBuilder)
        {
            connectionBuilder = _connectionBuilder;
        }

        public async Task<IEnumerable<ServiceModel>> GetServicesAsync()
        {
            DefaultTypeMap.MatchNamesWithUnderscores = true;
            using var connection = await connectionBuilder.CreateOpenAsync();
            if (connection.State == ConnectionState.Closed)
                connection.Open();
            var services = await connection.QueryAsync<ServiceModel>(
                "select " +
                "service_id, " +
                "service_name, " +
                "is_active, " +
                "date_created, " +
                "date_updated " +
                "from " +
                "service; ",
                commandType: CommandType.Text);
            return services;
        }

        public async Task<ServiceModel> GetServiceById(int service_id)
        {
            DefaultTypeMap.MatchNamesWithUnderscores = true;
            using var connection = new NpgsqlConnection("Host=localhost; Port=5433; Database=MilenkoRaic; Username=postgres; Password=mraic0910;");
            if (connection.State == ConnectionState.Closed)
                connection.Open();

            var service = await connection.QuerySingleOrDefaultAsync<ServiceModel>("select * from service WHERE service_id = @service_id;", new { service_id });
            return service;
        }

        public async Task<int> AddNewService(ServiceModel service)
        {
            DefaultTypeMap.MatchNamesWithUnderscores = true;
            using var connection = new NpgsqlConnection("Host=localhost; Port=5433; Database=MilenkoRaic; Username=postgres; Password=mraic0910;");
            if (connection.State == ConnectionState.Closed)
                connection.Open();

            var affectedRows = await connection.ExecuteAsync("insert into service (" +
                "service_id," +
                "service_name," +
                "is_active," +
                "date_created," +
                "date_updated) " +
                "values (" +
                "@service_id, " +
                "@service_name, " +
                "@is_active, " +
                "@date_created, " +
                "@date_updated);"
                , service);
            return affectedRows;
        }

        public async Task<int> ModifyServiceById(ServiceModel service, int service_id)
        {
            DefaultTypeMap.MatchNamesWithUnderscores = true;
            using var connection = new NpgsqlConnection("Host=localhost; Port=5433; Database=MilenkoRaic; Username=postgres; Password=mraic0910;");
            if (connection.State == ConnectionState.Closed)
                connection.Open();
            var affectedRows = await connection.ExecuteAsync("update service set " +
                "service_id=@service_id, " +
                "service_name=@service_name, " +
                "is_active=@is_active, " +
                "date_created=@date_created, " +
                "date_updated=@date_updated " +
                "where " +
                "service_id=@service_id;"
                , new { service, service_id });
            return affectedRows;
        }
    }
}
