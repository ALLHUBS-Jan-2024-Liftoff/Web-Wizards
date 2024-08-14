package org.launchcode.BackEnd.controllers;


import org.launchcode.BackEnd.models.Comment;
import org.launchcode.BackEnd.models.Post;
import org.launchcode.BackEnd.models.data.CommentRepository;
import org.launchcode.BackEnd.models.data.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
@RequestMapping("/comments")
public class CommentController
{
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    @CrossOrigin
    @GetMapping("/{postId}")
    public ResponseEntity<List<Comment>> getAllCommentsByPostID(@PathVariable Integer postId)
    {
        Optional<Post> post = postRepository.findById(postId);

        if(post.isPresent())
        {
            List<Comment> comments = commentRepository.findByPostId(postId);
            return new ResponseEntity<>(comments, HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @PostMapping("/{postId}")
    public ResponseEntity<Comment> createComment(@PathVariable Integer postId, @RequestBody Comment commentRequest)
    {
        Optional<Post> post = postRepository.findById(postId);

        if(post.isPresent())
        {
            commentRequest.setPost(post.get());
            Comment savedComment = commentRepository.save(commentRequest);

            return new ResponseEntity<>(savedComment, HttpStatus.CREATED);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{postId}")
    public Comment updateComment(@PathVariable Integer postId, @PathVariable Integer commentID, @RequestBody Comment commentRequest)
    {
        if(!postRepository.existsById(postId))
        {
            throw new NoSuchElementException("Post not found with ID: " + postId);
        }

        return commentRepository.findById(commentID).map(comment -> {
            comment.setText(commentRequest.getText());
            return commentRepository.save(comment);
        }).orElseThrow(() -> new NoSuchElementException("Comment not found with ID" + commentID));
    }

    @DeleteMapping("/{postId}")
    public ResponseEntity<?> deleteComment(@PathVariable Integer postId, @PathVariable Integer commentID)
    {
        if(!postRepository.existsById(postId))
        {
            throw new NoSuchElementException("Post not found with ID: " + postIdorg);
        }

        return commentRepository.findById(commentID).map(comment -> {
            commentRepository.delete(comment);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new NoSuchElementException("Comment not found with ID" + commentID));
    }
}
