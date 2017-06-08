using Microsoft.AspNet.Identity;
using online_web_store_demo_repos;
using System.Web.Http;

namespace online_web_store_demo.Controllers.API
{
    public class ShoppingCartController : ApiController
    {
        private ShoppingCartRepo _shoppingCartRepo;

        public ShoppingCartController()
        {
            _shoppingCartRepo = new ShoppingCartRepo();
        }

        [HttpGet]
        [Authorize]
        public IHttpActionResult GetCart()
        {
            string userhash = User.Identity.GetUserId();
            var cartId = _shoppingCartRepo.GetActiveShoppingCartId(userhash);
            var shoppingCart = _shoppingCartRepo.GetShoppingCartByCartid(cartId);

            return Json(shoppingCart, ViewHelpers.CamelCase);
        }

        [HttpPost]
        [Authorize]
        public int UpdateCart(int productId, int qty)
        {
            string userhash = User.Identity.GetUserId();
            var cartId = _shoppingCartRepo.GetActiveShoppingCartId(userhash);
            var cartSize = _shoppingCartRepo.UpdateShoppingCartModel(cartId, productId, qty);

            return cartSize;
        }
    }
}
