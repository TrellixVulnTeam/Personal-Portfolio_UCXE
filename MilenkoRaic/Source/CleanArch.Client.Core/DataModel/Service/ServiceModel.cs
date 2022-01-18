using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CleanArch.Client.Core.DataModel.Service
{
    public class ServiceModel
    {
        public static int ServiceId { get; set; }
        public static string ServiceName { get; set; }
        public static bool IsActive { get; set; }
        public static DateTime DateCreated { get; set; }
        public static DateTime DateUpdated { get; set; }
    }
}
