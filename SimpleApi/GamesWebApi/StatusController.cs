using System.Web.Http;

namespace GamesWebApi
{
    public class StatusController : ApiController
    {
        [ActionName("ping")]
        [HttpGet()]
        public string Ping()
        {
            return "OK";
        }
    }
}