using System;
using System.Collections.Generic;

#nullable disable

namespace MusicsApi
{
    public partial class Playlist
    {
        public Playlist()
        {
            PlaylistMusics = new HashSet<PlaylistMusic>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime? CreateDt { get; set; }
        public string Cover { get; set; }
        public int? UserId { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<PlaylistMusic> PlaylistMusics { get; set; }
    }
}
