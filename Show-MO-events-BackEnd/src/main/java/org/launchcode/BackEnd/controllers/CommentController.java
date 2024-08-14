package org.launchcode.BackEnd.controllers;


import org.launchcode.BackEnd.models.Comment;
import org.launchcode.BackEnd.models.data.CommentRepository;
import org.launchcode.BackEnd.models.data.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/comments")
public class CommentController
{
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    @GetMapping("/{postID}")
    public ResponseEntity<List<Comment>> getAllCommentsByPostID(@PathVariable Integer postId)
    {
        return ResponseEntity.ok(commentRepository.findByPostId(postId));
    }

    @PostMapping("/{postID}")
    public ResponseEntity<Comment> createComment(@PathVariable Integer postID, @RequestBody Comment commentRequest)
    {
        return postRepository.findById(postID).map(post -> {
            commentRequest.setPost(post);
            return ResponseEntity.ok(commentRepository.save(commentRequest));
        }).orElseThrow(() -> new NoSuchElementException("Post not found with id: " + postID));
    }

    @PutMapping("/{postID}/")
    public Comment updateComment(@PathVariable Integer postID, @PathVariable Integer commentID, @RequestBody Comment commentRequest)
    {
        if(!postRepository.existsById(postID))
        {
            throw new NoSuchElementException("Post not found with ID: " + postID);
        }

        return commentRepository.findById(commentID).map(comment -> {
            comment.setText(commentRequest.getText());
            return commentRepository.save(comment);
        }).orElseThrow(() -> new NoSuchElementException("Comment not found with ID" + commentID));
    }

    @DeleteMapping("/{postID}")
    public ResponseEntity<?> deleteComment(@PathVariable Integer postID, @PathVariable Integer commentID)
    {
        if(!postRepository.existsById(postID))
        {
            throw new NoSuchElementException("Post not found with ID: " + postID);
        }

        return commentRepository.findById(commentID).map(comment -> {
            commentRepository.delete(comment);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new NoSuchElementException("Comment not found with ID" + commentID));
    }
}
