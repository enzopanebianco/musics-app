using System;
using System.Collections.Generic;

#nullable disable

namespace MusicsApi
{
    public partial class Music
    {
        public Music()
        {
            PlaylistMusics = new HashSet<PlaylistMusic>();
        }

        public int Id { get; set; }
        public string Cover { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }

        public virtual ICollection<PlaylistMusic> PlaylistMusics { get; set; }
    }
}
