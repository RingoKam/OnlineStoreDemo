using Microsoft.AspNet.Identity;
using online_web_store_demo_model;
using online_web_store_demo_repos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace online_web_store_demo.Controllers
{
    public class ShoppingCartController : Controller
    {
        private ShoppingCartRepo _shoppingCartRepo;

        public ShoppingCartController()
        {
            _shoppingCartRepo = new ShoppingCartRepo();
        }

        // GET: ShoppingCart
        [Authorize]
        public ActionResult Index()
        {
            string userhash = User.Identity.GetUserId();
            ShoppingCartModel vm;

            if (Session[userhash] == null)
            {
                Session[userhash] = _shoppingCartRepo.GetActiveShoppingCartId(userhash);
            }

            var cartId = Convert.ToInt32(Session[userhash]);
            vm = _shoppingCartRepo.GetShoppingCartByCartid(cartId);

            return View(vm);
        }

        [HttpPost]
        [Authorize]
        public ActionResult CheckOut(ShoppingCartModel vm)
        {
            _shoppingCartRepo.CheckOut(vm.Id);
            return RedirectToAction("Success");
        }

        public ActionResult Success()
        {
            return View();
        }
    }
}