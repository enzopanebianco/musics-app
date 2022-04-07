using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicsApi.Interfaces;
using MusicsApi.Repositories;
using MusicsApi.ViewModels;

namespace MusicsApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class PlaylistController : ControllerBase
    {
        private readonly IPlaylistRepository PlaylistRepository;

        public PlaylistController()
        {
            PlaylistRepository = new PlaylistRepository();
        }

        [HttpGet]

        public IActionResult Get()
        {
            try
            {
                return Ok(PlaylistRepository.List());
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                UniquePlaylistViewModel playlist = PlaylistRepository.ListById(id);

                if (playlist == null)
                {
                    return NotFound();
                }
                return Ok(playlist);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public IActionResult Post(Playlist playlist)
        {
            try
            {
                PlaylistRepository.Create(playlist);

                return Ok(playlist);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut]
        public IActionResult Put(Playlist playlist)
        {
            try
            {
                PlaylistRepository.Update(playlist);

                return Ok(playlist);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]

        public IActionResult Delete(int id)
        {
            try
            {
                PlaylistRepository.Delete(id);
                return Ok();
            }
            catch{
                return BadRequest();
            }
        }
    }
}
