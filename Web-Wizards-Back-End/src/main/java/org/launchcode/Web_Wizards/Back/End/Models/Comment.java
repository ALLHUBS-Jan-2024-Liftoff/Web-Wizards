package org.launchcode.Web_Wizards.Back.End.Models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
public class Comment
{
    @Id
    @SequenceGenerator(name="comment_seq", sequenceName = "comment_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "comment_seq")
    private Integer id;

    @NotBlank
    private String content;

    private LocalDateTime createdAt;

    private User user;

    private Post post;

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

    public Post getPost()
    {
        return post;
    }

    public void setPost(Post post)
    {
        this.post = post;
    }
}
