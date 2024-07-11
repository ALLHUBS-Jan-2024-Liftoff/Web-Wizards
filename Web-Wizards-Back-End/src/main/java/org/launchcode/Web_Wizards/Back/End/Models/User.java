package org.launchcode.Web_Wizards.Back.End.Models;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class User
{
    private Long uid;

    @NotBlank
    @Size(min = 2, max = 50)
    private String username;

    @NotBlank
    @Size
    private String email;

    @NotBlank
    @Size(min = 8)
    private String password;

    //Getters and setters...
    public Long getUid()
    {
        return uid;
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
