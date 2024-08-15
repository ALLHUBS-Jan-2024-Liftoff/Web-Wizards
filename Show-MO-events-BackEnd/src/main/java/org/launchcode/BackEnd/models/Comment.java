package org.launchcode.BackEnd.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Comment extends AbstractEntity
{
    @Column(name = "text", nullable = false)
    private String text;

    @ManyToOne
    @JoinColumn(name="post_id", nullable = false)
    private Post post;

    @Column(name = "userID", nullable = false)
    private Integer userID;

    @Column(name = "created_at", nullable = false)
    private LocalDate createdAt;

    public Comment()
    {

    }

    public Comment(String text, Post post, Integer userID) {
        this.text = text;
        this.post = post;
        this.userID = userID;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Post getPost() {
        return this.post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }
}
