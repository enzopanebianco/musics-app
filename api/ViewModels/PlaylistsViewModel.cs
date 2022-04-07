using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicsApi.ViewModels
{
 
    public class PlaylistsViewModel
    {
        public int id { get; set; }
        public string title { get; set; }
        public DateTime? createDt { get; set; }
        public string cover { get; set; }
        public int userId { get; set; }
        public string username { get; set; }
        
    }
}
