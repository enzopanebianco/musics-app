using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicsApi.Interfaces
{
    public interface IUserRepository
    {
        List<User> List();

        User ListById(int id);

        Object Create(User user);

        void Update(User user);

        void Delete(int id);
    }
}
