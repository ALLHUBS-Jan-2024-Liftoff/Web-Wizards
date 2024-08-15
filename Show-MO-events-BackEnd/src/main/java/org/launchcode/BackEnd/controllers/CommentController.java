package org.launchcode.BackEnd.controllers;

import org.launchcode.BackEnd.models.Comment;
import org.launchcode.BackEnd.models.Post;
import org.launchcode.BackEnd.models.User;
import org.launchcode.BackEnd.models.data.CommentRepository;
import org.launchcode.BackEnd.models.data.PostRepository;
import org.launchcode.BackEnd.models.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
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

    @Autowired
    private UserRepository userRepository;

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
    public ResponseEntity<Comment> createComment(@PathVariable Integer postId, @RequestBody Comment commentRequest, Principal principal)
    {
        try
        {
            Optional<Post> postOptional = postRepository.findById(postId);

            if(!postOptional.isPresent())
            {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }

            //Find the user by username...
            String username = principal.getName();

            Optional<User> userOptional = Optional.ofNullable(userRepository.findByUsername(username));

            if(!userOptional.isPresent())
            {
                return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
            }

            //Set the post and user to the comment...
            commentRequest.setPost(postOptional.get());
            commentRequest.setUserID(userOptional.get().getId());

            //Save the comment...
            Comment savedComment = commentRepository.save(commentRequest);

            //Return the saved comment with a 201 status code...
            return new ResponseEntity<>(savedComment, HttpStatus.CREATED);
        }
        catch(Exception e)
        {
            //Return a 500 status code with an error message...
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
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
            throw new NoSuchElementException("Post not found with ID: " + postId);
        }

        return commentRepository.findById(commentID).map(comment -> {
            commentRepository.delete(comment);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new NoSuchElementException("Comment not found with ID" + commentID));
    }
}
