using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicsApi.Interfaces;

namespace MusicsApi.Repositories
{
    public class MusicRepository : IMusicRepository
    {
        public void Create(Music music)
        {
           using (MusicsContext context = new MusicsContext())
            {
                context.Musics.Add(music);
                context.SaveChanges();
            }
        }

        public void Delete(int id)
        {
           using (MusicsContext context = new MusicsContext())
            {
                Music searchMusic = context.Musics.Find(id);

                if (searchMusic != null)
                {
                    context.Musics.Remove(searchMusic);
                    context.SaveChanges();
                }
                else
                {
                    return;
                }
            }
        }

        public List<Music> List()
        {
            using (MusicsContext context = new MusicsContext()) 
            {
                return context.Musics.ToList();
            }
        }
    }
}
