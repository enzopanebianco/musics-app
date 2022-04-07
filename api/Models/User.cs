using System;
using System.Collections.Generic;

#nullable disable

namespace MusicsApi
{
    public partial class User
    {
        public User()
        {
            Playlists = new HashSet<Playlist>();
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Photo { get; set; }

        public virtual ICollection<Playlist> Playlists { get; set; }
    }
}
