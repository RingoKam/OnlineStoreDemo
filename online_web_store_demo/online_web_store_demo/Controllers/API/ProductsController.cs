using online_web_store_demo_model;
using online_web_store_demo_repos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace online_web_store_demo.Controllers.API
{
    public class ProductsController : ApiController
    {
        private ProductsRepo ProductsRepo;

        public ProductsController()
        {
            ProductsRepo = new ProductsRepo();
        }

        public IHttpActionResult GetAllProducts()
        {
            var products = ProductsRepo.GetAllProducts();
            return Json(products, ViewHelpers.CamelCase);
        }
    }
}
