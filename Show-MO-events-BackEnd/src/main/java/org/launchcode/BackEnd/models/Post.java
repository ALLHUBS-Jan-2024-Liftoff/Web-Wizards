package org.launchcode.BackEnd.models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class Post extends AbstractEntity
{
    @NotNull
    @Size(min=5, max = 50)
    private String title;

    @NotBlank
    @Size(min=5, max=100)
    private String content;

    public Post ()
    {

    }

    public Post(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public @NotNull String getTitle() {
        return title;
    }

    public void setTitle(@NotNull String title) {
        this.title = title;
    }

    public @NotBlank String getContent() {
        return content;
    }

    public void setContent(@NotBlank String content) {
        this.content = content;
    }

    @Override
    public String toString()
    {
        return "Post - Title: " + this.getTitle() + "\nContent: " + this.getContent();
    }
}
