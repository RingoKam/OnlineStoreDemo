using online_web_store_demo_model;
using System.Data.SqlClient;
using Dapper;
using System.Linq;
using System.Data;
using System.Collections.Generic;

namespace online_web_store_demo_repos
{
    public class ShoppingCartRepo
    {
        public int CreateShoppingCart(string userid)
        {
            using (SqlConnection cn = new SqlConnection(Setting.ConnectionString))
            {
                var p = new DynamicParameters();
                p.Add("@userid", userid, direction: ParameterDirection.Input);
                p.Add("@shoppingCartId", dbType: DbType.Int32, direction: ParameterDirection.Output);
                cn.Execute("CreateShoppingCart", p, commandType: CommandType.StoredProcedure);
                return p.Get<int>("@shoppingCartId");
            }
        }

        public ShoppingCartModel GetShoppingCartByCartid(int cartid)
        {
            using (SqlConnection cn = new SqlConnection(Setting.ConnectionString))
            {
                var p = new DynamicParameters();
                p.Add("@cartid", cartid);
                var ShoppingCart = cn.Query<ShoppingCartModel>("SELECT TOP(1) * FROM ShoppingCart WHERE ShoppingCart.Id = @Id", new { Id = cartid }).Single();
                var Contents = cn.Query<CartContentModel>("GetShoppingCartContent", p, commandType: CommandType.StoredProcedure).ToList();
                ShoppingCart.CartContent = Contents;
                return ShoppingCart;
            }
        }

        public List<CartContentModel> CartContentModel(int cartid)
        {
            using (SqlConnection cn = new SqlConnection(Setting.ConnectionString))
            {
                var p = new DynamicParameters();
                p.Add("@cartid", cartid);
                return cn.Query<CartContentModel>("GetShoppingCartContent", p, commandType: CommandType.StoredProcedure).ToList();
            }
        }

        public int GetActiveShoppingCartId(string userid)
        {
            using (SqlConnection cn = new SqlConnection(Setting.ConnectionString))
            {
                var p = new DynamicParameters();
                var ShoppingCart = cn.Query<ShoppingCartModel>("SELECT TOP(1) * FROM ShoppingCart WHERE ShoppingCart.Active = 1 AND shoppingCart.User_Id = @Id", new { Id = userid }).SingleOrDefault();
                if (ShoppingCart == null)
                {
                    var shoppingCartId = CreateShoppingCart(userid);
                    return shoppingCartId;
                }
                else
                {
                    return ShoppingCart.Id;
                }
            }
        }

        public int UpdateShoppingCartModel(int cartid, int productid, int qty)
        {
            using (SqlConnection cn = new SqlConnection(Setting.ConnectionString))
            {
                var cart = GetShoppingCartByCartid(cartid);
                var p = new DynamicParameters();

                if (cart?.CartContent.Any(content => content.Id == productid) == true)
                {
                    var updateCart = cart.CartContent.Where(content => content.Id == productid).SingleOrDefault();
                    p.Add("@productid", productid);
                    p.Add("@cartid", cartid);
                    p.Add("@qty", qty);
                    cn.Execute("UpdateCart", p, commandType: CommandType.StoredProcedure);
                }
                else
                {
                    p.Add("@productid", productid);
                    p.Add("@qty", qty);
                    p.Add("@cartid", cartid);
                    cn.Execute("InsertIntoCart", p, commandType: CommandType.StoredProcedure);
                }
                return cart.CartContent.Sum(o => o.Qty) + qty;
            }
        }

        public bool CheckOut(int cartid)
        {
            using (SqlConnection cn = new SqlConnection(Setting.ConnectionString))
            {
                var p = new DynamicParameters();
                p.Add("@CartId", cartid);
                cn.Execute("CheckOut", p, commandType: CommandType.StoredProcedure);
                return true;
            }
        }
    }
}