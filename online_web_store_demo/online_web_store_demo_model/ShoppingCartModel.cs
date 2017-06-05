using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace online_web_store_demo_model
{
    public class ShoppingCartModel
    {
        public int Id { get; set; }
        public DateTime Created { get; set; }
        public List<CartContentModel> CartContent { get; set; }
    }
}
