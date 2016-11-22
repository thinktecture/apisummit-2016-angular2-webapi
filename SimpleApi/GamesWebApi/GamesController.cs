using System;
using System.Collections.Concurrent;
using System.Web.Http;

namespace GamesWebApi
{
    public class GamesController : ApiController
    {
        private static ConcurrentDictionary<Guid, Game> _database = 
            new ConcurrentDictionary<Guid, Game>();

        static GamesController()
        {
            var id = Guid.NewGuid();
            _database.TryAdd(id, new Game {Id = id, Name = "Monopoly", Description = "Yeah!!!"});
            id = Guid.NewGuid();
            _database.TryAdd(id, new Game { Id = id, Name = "Jumanji", Description = "Roaarrr!" });
            id = Guid.NewGuid();
            _database.TryAdd(id, new Game { Id = id, Name = "Wizard", Description = "Magic ;-)" });
        }
    }
}