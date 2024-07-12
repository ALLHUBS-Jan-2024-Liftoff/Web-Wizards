package org.launchcode.Web_Wizards.Back.End.Controllers;

import org.launchcode.Web_Wizards.Back.End.Models.Comment;
import org.launchcode.Web_Wizards.Back.End.Models.Post;
import org.launchcode.Web_Wizards.Back.End.Models.data.CommentRepository;
import org.launchcode.Web_Wizards.Back.End.Models.data.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/comments")
public class CommentController
{
    @Autowired
    private CommentRepository commentRepository;

    @GetMapping
    public Iterable<Comment> getAllComments()
    {
        return commentRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Comment> getCommentById(@PathVariable Integer id)
    {
        Optional<Comment> comment = commentRepository.findById(id);
        return comment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Comment createComment(@RequestBody Comment comment)
    {
        return commentRepository.save(comment);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable Integer id, @RequestBody Comment details, @RequestBody String content)
    {
        Optional<Comment> comment = commentRepository.findById(id);

        if(comment.isPresent())
        {
            details.setContent(content);
            return ResponseEntity.ok(commentRepository.save(details));
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComment(@PathVariable Integer id)
    {
        if(commentRepository.findById(id).isPresent())
        {
            commentRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }
}

