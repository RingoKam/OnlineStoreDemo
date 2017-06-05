using online_web_store_demo_model;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;

namespace online_web_store_demo_repos
{
    public class ProductsRepo
    {
        public IEnumerable<ProductModel> GetAllProducts()
        {
            using (SqlConnection cn = new SqlConnection(Setting.ConnectionString))
            {
                var result = cn.Query<ProductModel>("SELECT * FROM Products").AsList();
                return result;
            }
        }
    }
}
