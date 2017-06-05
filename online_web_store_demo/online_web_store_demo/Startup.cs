using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(online_web_store_demo.Startup))]
namespace online_web_store_demo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
