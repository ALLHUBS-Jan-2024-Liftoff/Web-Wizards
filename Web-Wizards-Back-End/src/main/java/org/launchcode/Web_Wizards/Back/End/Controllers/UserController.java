package org.launchcode.Web_Wizards.Back.End.Controllers;

import org.launchcode.Web_Wizards.Back.End.Models.User;
import org.launchcode.Web_Wizards.Back.End.Models.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController
{
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public Iterable<User> getAllUsers()
    {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Integer id)
    {
        Optional<User> user = userRepository.findById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public User createUser(@RequestBody User user)
    {
        return userRepository.save(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User details, String username)
    {
        Optional<User> currUser = userRepository.findById(id);

        if(currUser.isPresent())
        {
            details.setUsername(username);
            return ResponseEntity.ok(userRepository.save(details));
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id)
    {
        if(userRepository.findById(id).isPresent())
        {
            userRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }
}
