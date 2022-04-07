using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicsApi.Interfaces;
using Microsoft.EntityFrameworkCore;
namespace MusicsApi.Repositories
{
    public class PlaylistMusicRepository : IPlaylistMusicRepository
    {
        public void AddMusic(PlaylistMusic music)
        {
            using (MusicsContext context = new MusicsContext())
            {
                Playlist playlist = context.Playlists.Where(x => x.Id == music.PlaylistId).Include(x=>x.PlaylistMusics).FirstOrDefault();

                music.Position = playlist.PlaylistMusics.ToArray().Length + 1;
              
                context.PlaylistMusics.Add(music);
                context.SaveChanges();

            }
        }

        public void EditPlaylist(List<PlaylistMusic> playlistMusic)
        {
            using (MusicsContext context = new MusicsContext())
            {

                playlistMusic.ForEach(value =>
                {
                    context.PlaylistMusics.Update(value);
                });

                context.SaveChanges();
            }
        }

        public void RemoveMusic(int id)
        {
            using (MusicsContext context = new MusicsContext())
            {
                PlaylistMusic music = context.PlaylistMusics.Find(id);

                context.PlaylistMusics.Remove(music);
                context.SaveChanges();
            }
        }
    }
}
