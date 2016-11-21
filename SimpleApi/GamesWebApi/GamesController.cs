using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Web.Http;
using Microsoft.AspNet.SignalR;

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

        [ActionName("list")]
        [HttpGet]
        public ICollection<Game> GetGames()
        {
            return _database.Values;
        }

        [ActionName("count")]
        [HttpGet]
        public int GetGamesCount()
        {
            return _database.Values.Count;
        }

        [ActionName("item")]
        [HttpPost]
        public Game AddGame(Game newGame)
        {
            var gamesHub = GlobalHost.ConnectionManager.GetHubContext<GamesHub>();

            var id = Guid.NewGuid();
            newGame.Id = id;

            _database.TryAdd(id, newGame);

            gamesHub.Clients.All.newGameAvailable(newGame);

            return newGame;
        }
    }
}