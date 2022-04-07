using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicsApi.Interfaces;
using MusicsApi.Repositories;

namespace MusicsApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class MusicController : ControllerBase
    {
        private readonly IMusicRepository MusicRepository;

        public MusicController()
        {
            MusicRepository = new MusicRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(MusicRepository.List());
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpPost]
        public IActionResult Post(Music music)
        {
            try
            {
                MusicRepository.Create(music);
                return Ok(music);
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
                MusicRepository.Delete(id);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
