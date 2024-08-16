package org.launchcode.BackEnd.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CommentDTO
{
    private String text;
    private Integer postId;
    private Integer userId;

    @JsonProperty("created_at")
    private String createdAt;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Integer getPostId() {
        return postId;
    }

    public void setPostId(Integer postId) {
        this.postId = postId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }
}
