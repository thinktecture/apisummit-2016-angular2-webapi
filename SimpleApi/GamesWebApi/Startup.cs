using Owin;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.Cors;
using Newtonsoft.Json.Serialization;

namespace GamesWebApi
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var httpConfig = new HttpConfiguration();

            httpConfig.Routes.MapHttpRoute("DefaultApi", "api/{controller}/{action}");

            httpConfig.Formatters.Clear();
            var jsonFormatter = new JsonMediaTypeFormatter
            {
                SerializerSettings = {ContractResolver = new CamelCasePropertyNamesContractResolver()}
            };
            httpConfig.Formatters.Add(jsonFormatter);

            httpConfig.EnableCors(new EnableCorsAttribute("*", "*", "*"));

            app.UseWebApi(httpConfig);
        }
    }
}