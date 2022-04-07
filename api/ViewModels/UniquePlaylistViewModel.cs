using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicsApi.ViewModels
{
    public interface music
    {
        public int id { get; set; }
        public string cover { get; set; }
        public string title { get; set; }
        public string author { get; set; }
    }

    public class PlaylistMusics
    {
        public int id { get; set; }
        public int position { get; set; }
        public int musicId { get; set; }
        public string musicCover { get; set; }
        public string title { get; set; }
        public string author { get; set; }

    }
    public class UniquePlaylistViewModel:PlaylistsViewModel
    {
        
        public List<PlaylistMusics> playlistMusics { get; set; }
    }
}
