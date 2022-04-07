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
    public class PlaylistMusicController : ControllerBase
    {
        private readonly IPlaylistMusicRepository PlaylistMusicRepository;
        private readonly IPlaylistRepository PlaylistRepository;

        public PlaylistMusicController()
        {
            PlaylistMusicRepository = new PlaylistMusicRepository();
            PlaylistRepository = new PlaylistRepository();
        }

        [HttpPost]
        public IActionResult Post(PlaylistMusic music)
        {
            try
            {
                PlaylistMusicRepository.AddMusic(music);

                return Ok(music.Id);
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]

        public IActionResult Delete(int id)
        {
            try
            {
                PlaylistMusicRepository.RemoveMusic(id);

                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }
        [HttpPut]
        public IActionResult Put(List<PlaylistMusic> playlistMusics)
        {
            try
            {
                PlaylistMusicRepository.EditPlaylist(playlistMusics);

                PlaylistMusic musicInPlaylist = playlistMusics[0];

                UniquePlaylistViewModel playlist = PlaylistRepository.ListById(musicInPlaylist.PlaylistId);
                return Ok(playlist);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
