using System.Configuration;

namespace online_web_store_demo_model
{
    public class Setting
    {
        private static string _connectionString;

        public static string ConnectionString
        {
            get
            {
                if (string.IsNullOrEmpty(_connectionString))
                {
                    _connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
                }
                return _connectionString;
            }
        }
    }
}
