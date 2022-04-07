using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicsApi.Interfaces
{
    public interface IMusicRepository
    {
        List<Music> List();
        void Create(Music music);
        void Delete(int id);
    }
}
