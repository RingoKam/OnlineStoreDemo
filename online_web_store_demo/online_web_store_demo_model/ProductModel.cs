using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace online_web_store_demo_model
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ThumbNail { get; set; }
        public string FullImage { get; set; }
        public decimal Price { get; set; }
        public DateTime ProductCreated { get; set; }
    }
}
