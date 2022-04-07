using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicsApi.Interfaces
{
    public interface IPlaylistMusicRepository
    {
        void AddMusic(PlaylistMusic playlistMusic);
        void RemoveMusic(int id);
        void EditPlaylist(List<PlaylistMusic> playlistMusic);
    }
}
