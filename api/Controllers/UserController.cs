using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicsApi.Interfaces;
using MusicsApi.Repositories;

namespace MusicsApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository UserRepository;
       
        public UserController()
        {
            UserRepository = new UserRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(UserRepository.List());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                User user = UserRepository.ListById(id);

                if (user == null)
                {
                    return NotFound();
                }

                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost]

        public IActionResult Post(User user)
        {
            try
            { 
                    Object userCreated = UserRepository.Create(user);
                    return Ok(userCreated);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut]

        public IActionResult Put(User user)
        {
            try
            {
                UserRepository.Update(user);
                return Ok(user);
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                UserRepository.Delete(id);
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
