using System;
using System.Collections.Generic;

#nullable disable

namespace MusicsApi
{
    public partial class PlaylistMusic
    {
        public int Id { get; set; }
        public int? MusicId { get; set; }
        public int PlaylistId { get; set; }
        public int Position { get; set; }

        public virtual Music Music { get; set; }
        public virtual Playlist Playlist { get; set; }
    }
}
