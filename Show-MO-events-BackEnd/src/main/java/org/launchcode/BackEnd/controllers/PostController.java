package org.launchcode.BackEnd.controllers;

import org.launchcode.BackEnd.models.Post;
import org.launchcode.BackEnd.models.data.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
}
