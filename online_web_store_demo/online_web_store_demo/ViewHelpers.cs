using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace online_web_store_demo
{
    internal static class ViewHelpers
    {
        public static JsonSerializerSettings CamelCase
        {
            get
            {
                return new JsonSerializerSettings
                {
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                };
            }
        }
    }
}