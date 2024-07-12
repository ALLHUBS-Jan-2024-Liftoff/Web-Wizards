package org.launchcode.Web_Wizards.Back.End.Controllers;

import org.launchcode.Web_Wizards.Back.End.Models.Post;
import org.launchcode.Web_Wizards.Back.End.Models.User;
import org.launchcode.Web_Wizards.Back.End.Models.data.PostRepository;
import org.launchcode.Web_Wizards.Back.End.Models.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/posts")
public class PostController
{
    @Autowired
    private PostRepository postRepository;

    @GetMapping
    public Iterable<Post> getAllPosts()
    {
        return postRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Integer id)
    {
        Optional<Post> post = postRepository.findById(id);
        return post.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Post createPost(@RequestBody Post post)
    {
        return postRepository.save(post);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable Integer id, @RequestBody Post details, @RequestBody String content)
    {
        Optional<Post> post = postRepository.findById(id);

        if(post.isPresent())
        {
            details.setContent(content);
            return ResponseEntity.ok(postRepository.save(details));
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Integer id)
    {
        if(postRepository.findById(id).isPresent())
        {
            postRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }
}
