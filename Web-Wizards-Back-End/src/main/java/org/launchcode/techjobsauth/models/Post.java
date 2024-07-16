package org.launchcode.techjobsauth.models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;

@Entity
public class Post extends AbstractEntity
{

    @NotNull
    @Size(min=3, max=50)
    private String title;

    //private String employer;
    //private String skill;

    @NotBlank
    private String content;

    //private LocalDateTime createdAt;

    //private User user;

    //private List<Comment> comments;

    //Constructors...
    public Post()
    {
    }

//    public Post(String message, LocalDateTime created, User user, List<Comment> list)
    public Post(String title, String content)
    {
        super();
        this.title = title;
        this.content = content;
        //this.createdAt = created;
        //this.user = user;
        //this.comments = list;
    }

//    public Job() {
//    }
//
//    // Initialize the id and value fields.
//    public Job(String aName, String anEmployer, String someSkill) {
//        super();
//        this.name = aName;
//        this.employer = anEmployer;
//        this.skill = someSkill;
//    }

    // Getters and setters...

    public @NotNull @Size(min = 3, max = 50) String getTitle() {
        return title;
    }

    public void setTitle(@NotNull @Size(min = 3, max = 50) String title) {
        this.title = title;
    }

    public @NotBlank String getContent() {
        return content;
    }

    public void setContent(@NotBlank String content) {
        this.content = content;
    }

//    public LocalDateTime getCreatedAt() {
//        return createdAt;
//    }
//
//    public void setCreatedAt(LocalDateTime createdAt) {
//        this.createdAt = createdAt;
//    }

//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }


//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getEmployer() {
//        return employer;
//    }
//
//    public void setEmployer(String employer) {
//        this.employer = employer;
//    }
//
//    public String getSkill() {
//        return skill;
//    }
//
//    public void setSkill(String skill) {
//        this.skill = skill;
//    }

    @Override
    public String toString() {
        return "Hello, World!";
    }
}