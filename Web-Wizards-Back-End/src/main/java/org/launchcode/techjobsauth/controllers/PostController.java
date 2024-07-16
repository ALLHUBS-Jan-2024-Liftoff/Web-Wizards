package org.launchcode.techjobsauth.controllers;


import org.launchcode.techjobsauth.models.Post;
import org.launchcode.techjobsauth.models.data.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/posts")
public class PostController
{
    @Autowired
    private PostRepository postRepository;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Post>> getAllPosts()
    {
        //model.addAttribute("posts", postRepository.findAll());
        //return "list";
        return ResponseEntity.ok((List<Post>) postRepository.findAll());
    }

    @PostMapping("/create")
    public ResponseEntity<Post> createPost(@RequestBody Post post)
    {
        Post savedPost = postRepository.save(post);
        return new ResponseEntity<>(savedPost, HttpStatus.CREATED);
    }

    @GetMapping("/test")
    public String testEndpoint()
    {
        return "Controller is working!";
    }

//    @GetMapping("/{id}")
//    public String getPost(@PathVariable Integer id, Model model)
//    {
//        Optional<Post> post = postRepository.findById(id);
//        if(post.isPresent())
//        {
//            model.addAttribute("post",post.get());
//            return "view";
//        }
//        else
//        {
//            return "redirect:/posts";
//        }
//    }
//
//    @GetMapping("/new")
//    public String createPostForm(Model model)
//    {
//        model.addAttribute("post", new Post());
//        return "form";
//    }
//
//    @PostMapping("/submit")
//    public String createOrUpdatePost(@ModelAttribute Post post)
//    {
//        post.setCreatedAt(LocalDateTime.now());
//        postRepository.save(post);
//        return "redirect:/";
//    }
//
//    @GetMapping("/edit/{id}")
//    public String editPostForm(@PathVariable Integer id, Model model)
//    {
//        Optional<Post> post = postRepository.findById(id);
//        if(post.isPresent())
//        {
//            model.addAttribute("post",post.get());
//            return "form";
//        }
//        else
//        {
//            return "redirect:/posts";
//        }
//    }

//    @PostMapping
//    public ResponseEntity<Post> createPost(@RequestBody Post post)
//    {
//        post.setCreatedAt(LocalDateTime.now());
//        Post createdPost = postRepository.save(post);
//        return ResponseEntity.status(HttpStatus.CREATED).body(createdPost);
//    }
//
//    @GetMapping
//    public Iterable<Post> getAllPosts()
//    {
//        return postRepository.findAll();
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Post> getPostById(@PathVariable Integer id)
//    {
//        Optional<Post> post = postRepository.findById(id);
//        return post.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//    }
//
////    @PostMapping
////    public Post createPost(@RequestBody Post post)
////    {
////        return postRepository.save(post);
////    }
//
//
//
//    @PutMapping("/{id}")
//    public ResponseEntity<Post> updatePost(@PathVariable Integer id, @RequestBody Post details, @RequestBody String content)
//    {
//        Optional<Post> post = postRepository.findById(id);
//
//        if(post.isPresent())
//        {
//            Post currPost = post.get();
//            details.setContent(content);
//            currPost.setTitle(details.getTitle());
//            return ResponseEntity.ok(postRepository.save(details));
//        }
//        else
//        {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        }
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deletePost(@PathVariable Integer id)
//    {
//        if(postRepository.findById(id).isPresent())
//        {
//            postRepository.deleteById(id);
//            return ResponseEntity.ok().build();
//        }
//        else
//        {
//            //return ResponseEntity.notFound().build();
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        }
//    }
}
