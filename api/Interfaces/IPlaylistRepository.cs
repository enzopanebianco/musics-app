using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicsApi.ViewModels;

namespace MusicsApi.Interfaces
{
    public interface IPlaylistRepository
    {
        List<PlaylistsViewModel> List();
        UniquePlaylistViewModel ListById(int id);
        void Create(Playlist playlist);
        void Update(Playlist playlist);
        void Delete(int id);

    }
}
