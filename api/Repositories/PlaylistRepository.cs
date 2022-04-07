using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicsApi.Interfaces;
using Microsoft.EntityFrameworkCore;
using MusicsApi.ViewModels;

namespace MusicsApi.Repositories
{
    public class PlaylistRepository : IPlaylistRepository
    {
        public void Create(Playlist playlist)
        {
            using(MusicsContext context = new MusicsContext()) {

                playlist.CreateDt = DateTime.Now;

                context.Playlists.Add(playlist);
                context.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            using (MusicsContext context = new MusicsContext()) {
                Playlist searchPlaylist = context.Playlists.Find(id);
                if (searchPlaylist != null)
                {
                    context.Playlists.Remove(searchPlaylist);
                    context.SaveChanges();
                }
                else
                {
                    return;
                }
            }
        }

        public List<PlaylistsViewModel> List()
        {
            using (MusicsContext context = new MusicsContext()) {

                List<PlaylistsViewModel> playlistsListVM = new List<PlaylistsViewModel>();

                List<Playlist> playlists = context.Playlists.Include(x => x.User).ToList();

                playlists.ForEach(item =>
                {
                    PlaylistsViewModel playlistsVM = new PlaylistsViewModel();

                    playlistsVM.id = item.Id;
                    playlistsVM.title = item.Title;
                    playlistsVM.createDt = item.CreateDt;
                    playlistsVM.cover = item.Cover;
                    playlistsVM.userId = item.User.Id;
                    playlistsVM.username = item.User.Username;

                    playlistsListVM.Add(playlistsVM);

                });

                return playlistsListVM;
            }
        }

        public UniquePlaylistViewModel ListById(int id)
        {
            using (MusicsContext context = new MusicsContext()) {


                Playlist playlist =  context.Playlists.
                    Where(x => x.Id == id).
                    Include(x=>x.User).
                    Include(x => x.PlaylistMusics).
                    ThenInclude(x => x.Music).
                    FirstOrDefault();

                UniquePlaylistViewModel playlistVM = new UniquePlaylistViewModel();

                playlistVM.id = playlist.Id;
                playlistVM.title = playlist.Title;
                playlistVM.cover = playlist.Cover;
                playlistVM.createDt = playlist.CreateDt;
                playlistVM.userId = playlist.User.Id;
                playlistVM.username = playlist.User.Username;



                 List<PlaylistMusics> ListplaylistMusic = new List<PlaylistMusics>();
                playlist.PlaylistMusics.ToList().ForEach(item =>
                {
                    
                    PlaylistMusics playlistMusic = new PlaylistMusics();
                    playlistMusic.id = item.Id;
                    playlistMusic.position = item.Position;
                    playlistMusic.musicId = item.Music.Id;
                    playlistMusic.title = item.Music.Title;
                    playlistMusic.author = item.Music.Author;
                    playlistMusic.musicCover = item.Music.Cover;


                    ListplaylistMusic.Add(playlistMusic);
                   
                });

                playlistVM.playlistMusics = ListplaylistMusic;

                return playlistVM;
            }
        }

        public void Update(Playlist playlist)
        {
            using (MusicsContext context = new MusicsContext()) {

                context.Playlists.Update(playlist);
                context.SaveChanges();
            }
        }
    }
}
