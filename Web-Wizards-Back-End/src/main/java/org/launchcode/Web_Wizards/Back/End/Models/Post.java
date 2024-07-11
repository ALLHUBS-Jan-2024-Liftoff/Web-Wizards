package org.launchcode.Web_Wizards.Back.End.Models;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
public class Post
{
    private Long id;

    @NotBlank
    private String content;

    private LocalDateTime createdAt;

    private User user;

    //Getters and setters...
    public Long getId()
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
}
