package org.launchcode.Web_Wizards.Back.End.Models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
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
    @Size(min = 8)
    private String password;

    private List<Post> posts;

    private List<Comment> comments;

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

    public @NotBlank @Size(min = 8) String getPassword()
    {
        return password;
    }

    public void setPassword(@NotBlank @Size(min = 8) String password)
    {
        this.password = password;
    }
}
