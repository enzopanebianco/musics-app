using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicsApi.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
namespace MusicsApi.Repositories
{
    public class UserRepository:IUserRepository 
    {

      
        public List<User> List()
        {
            using (MusicsContext context = new MusicsContext())
            {
                return context.Users.ToList();
            }
        }
        public User ListById(int id)
        {
            using (MusicsContext context = new MusicsContext())
            {
                return context.Users
                    .Where(x => x.Id == id)
                    .Include(x => x.Playlists)
                    .FirstOrDefault();
            }
        }
        public Object Create(User user)
        {
            using (MusicsContext context = new MusicsContext())
            {
                User userCreated = context.Users.Where(x=>x.Email==user.Email).FirstOrDefault();
                if (userCreated == null)
                {
                    context.Users.Add(user);
                    context.SaveChanges();
                }
                User userSearched = context.Users.Where(x => x.Email == user.Email).FirstOrDefault();

                var claims = new[]
                        {
                    new Claim("id", userSearched.Id.ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, userSearched.Email),
                    new Claim("username",userSearched.Username),
                    new Claim("photo",userSearched.Photo),

                };

                    var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("musicsapi-key-authentication"));

                    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                    var token = new JwtSecurityToken(
                        issuer: "Musics.WebApi",
                        audience: "Musics.WebApi",
                        claims: claims,
                        expires: DateTime.Now.AddMinutes(60),
                        signingCredentials: creds
                       );
                    return new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(token),
                        user=userSearched
                    };
                
            }
        }
        

        public void Update(User user)
        {
            using (MusicsContext context = new MusicsContext())
            {
                context.Users.Update(user);
                context.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            using (MusicsContext context = new MusicsContext())
            {
                User user = context.Users.Find(id);

                if (user != null)
                {
                    context.Users.Remove(user);
                    context.SaveChanges();
                }
                else
                {
                    return;
                }
            }
        }

    }
}
