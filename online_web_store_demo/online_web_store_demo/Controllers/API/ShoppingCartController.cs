using Microsoft.AspNet.Identity;
using online_web_store_demo.Models;
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
        public int UpdateCart(UpdateCartRequestModel model)
        {
            string userhash = User.Identity.GetUserId();
            var cartId = _shoppingCartRepo.GetActiveShoppingCartId(userhash);
            var cartSize = _shoppingCartRepo.UpdateShoppingCartModel(cartId, model.ProductId, model.Qty);

            return cartSize;
        }

        [HttpPost]
        [Authorize]
        public bool CheckOut()
        {
            string userhash = User.Identity.GetUserId();
            var cartId = _shoppingCartRepo.GetActiveShoppingCartId(userhash);
            _shoppingCartRepo.CheckOut(cartId);
            return true;
        }
    }
}
