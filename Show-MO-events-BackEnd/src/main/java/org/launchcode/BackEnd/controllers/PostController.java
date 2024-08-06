package org.launchcode.BackEnd.controllers;

import org.launchcode.BackEnd.models.Post;
import org.launchcode.BackEnd.models.data.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/posts")
public class PostController
{
    @Autowired
    private PostRepository postRepository;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Post>> getAllPosts()
    {
        return ResponseEntity.ok((List<Post>) postRepository.findAll());
    }

    @PostMapping("/create")
    public ResponseEntity<Post> createPost(@RequestBody Post post)
    {
        Post savedPost = postRepository.save(post);
        return new ResponseEntity<>(savedPost, HttpStatus.CREATED);
    }

    //Read a single post...
    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Integer id)
    {
        Optional<Post> post = postRepository.findById(id);

        if(post.isPresent())
        {
            return new ResponseEntity<>(post.get(), HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //Update a post...
    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable Integer id, @RequestBody Post postDetails)
    {
        Optional<Post> postOpt = postRepository.findById(id);

        if(postOpt.isPresent())
        {
            Post post = postOpt.get();
            post.setTitle(postDetails.getTitle());
            post.setContent(postDetails.getContent());
            Post updatedPost = postRepository.save(post);
            return new ResponseEntity<>(updatedPost, HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //Delete a post...
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Integer id)
    {
        if(postRepository.existsById(id))
        {
            postRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/hello")
    public String testEndpoint()
    {
        return "Hello, from the test endpoint!";
    }
}
