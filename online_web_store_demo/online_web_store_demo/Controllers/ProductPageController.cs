using online_web_store_demo_repos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace online_web_store_demo.Controllers
{
    public class ProductPageController : Controller
    {
        private ProductsRepo ProductsRepo;

        public ProductPageController()
        {
            ProductsRepo = new ProductsRepo();
        }

        // GET: ProductPage
        public ActionResult Index()
        {
            var products = ProductsRepo.GetAllProducts();
            return View(products);
        }
    }
}