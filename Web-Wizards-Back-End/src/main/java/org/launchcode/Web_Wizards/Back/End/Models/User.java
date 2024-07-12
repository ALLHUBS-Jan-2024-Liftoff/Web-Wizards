package org.launchcode.Web_Wizards.Back.End.Models;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
public class User
{
    @Id
    @SequenceGenerator(name="user_seq", sequenceName = "user_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
    private Integer id;

    @NotBlank
    @Size(min = 2, max = 50)
    private String username;

    @NotBlank
    @Size
    private String email;

    @NotBlank
    @NotNull
    @Size(min = 8)
    private String pwHash;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    private List<Post> posts;

    private List<Comment> comments;

    //Constructors...
    public User()
    {
    }

    public User(String username, String email, String password, List<Post> posts, List<Comment> comments)
    {
        this.username = username;
        this.email = email;
        this.pwHash = encoder.encode(password);
        this.posts = posts;
        this.comments = comments;
    }

    //Getters and setters...
    public int getId()
    {
        return id;
    }

    public @NotBlank @Size(min = 2, max = 50) String getUsername()
    {
        return username;
    }

    public void setUsername(@NotBlank @Size(min = 2, max = 50) String username)
    {
        this.username = username;
    }

    public @NotBlank @Size String getEmail()
    {
        return email;
    }

    public void setEmail(@NotBlank @Size String email)
    {
        this.email = email;
    }

    public List<Post> getPosts()
    {
        return posts;
    }

    public void setPosts(List<Post> posts)
    {
        this.posts = posts;
    }

    public List<Comment> getComments()
    {
        return comments;
    }

    public void setComments(List<Comment> comments)
    {
        this.comments = comments;
    }

    public boolean isMatchingPassword(String pw)
    {
        return encoder.matches(pw, pwHash);
    }
}
