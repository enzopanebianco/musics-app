using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicsApi.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace MusicsApi.Repositories
{
    public class LoginRepository : ILoginRepository
    {
        public Object Login(User user)
        {
            using (MusicsContext context = new MusicsContext()) {
                User userSearched = context.Users.Where(x => x.Email == user.Email).FirstOrDefault();
                var claims = new[]
                    {
                    new Claim(JwtRegisteredClaimNames.Jti, userSearched.Id.ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, userSearched.Email),
                    new Claim("nome",userSearched.Username),
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
                    userSearched
                };
            }

        }
    }
}
       
   



