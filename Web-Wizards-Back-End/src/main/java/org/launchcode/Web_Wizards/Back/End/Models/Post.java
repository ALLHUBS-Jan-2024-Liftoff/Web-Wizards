package org.launchcode.Web_Wizards.Back.End.Models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Post
{
    @Id
    @SequenceGenerator(name="post_seq", sequenceName = "post_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "post_seq")
    private Integer id;

    @NotBlank
    private String content;

    private LocalDateTime createdAt;

    private User user;

    private List<Comment> comments;

    //Constructors...
    public Post()
    {
    }

    public Post(String message, LocalDateTime created, User user, List<Comment> list)
    {
        this.content = message;
        this.createdAt = created;
        this.user = user;
        this.comments = list;
    }

    //Getters and setters...
    public int getId()
    {
        return id;
    }

    public @NotBlank String getContent()
    {
        return content;
    }

    public void setContent(@NotBlank String content)
    {
        this.content = content;
    }

    public LocalDateTime getCreatedAt()
    {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt)
    {
        this.createdAt = createdAt;
    }

    public User getUser()
    {
        return user;
    }

    public void setUser(User user)
    {
        this.user = user;
    }

    public List<Comment> getComments()
    {
        return comments;
    }

    public void setComments(List<Comment> comments)
    {
        this.comments = comments;
    }
}
