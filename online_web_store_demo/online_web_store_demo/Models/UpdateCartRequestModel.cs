using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace online_web_store_demo.Models
{
    public class UpdateCartRequestModel
    {
        public int ProductId { get; set; }
        public int Qty { get; set; }
    }
}