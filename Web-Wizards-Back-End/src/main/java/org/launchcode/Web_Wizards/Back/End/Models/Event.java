package org.launchcode.Web_Wizards.Back.End.Models;

import javax.persistence.Column;
import javax.validation.constraints.*;
import javax.persistence.Entity;

@Entity
public class Event
{
    @NotBlank(message = "Name is required.")
    @Size(min = 3, max = 50, message = "Name field must be between 3 and 50 characters in length. Please try again.")
    private String name;
    @Column(name="Description")
    @Size(max = 500, message = "Description must not exceed 500 characters. Please try again.")
    private String description;
    @NotBlank(message = "Email is required.")
    @Email(message = "Invalid email. Please try again.")
    private String contactEmail;
    @NotBlank(message="Location cannot be left blank.")
    private String location;

    public Event(String name, String aDesc, String email, String location)
    {
        this.name = name;
        this.description = aDesc;
        this.contactEmail = email;
        this.location = location;
    }

    public Event()
    {
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getDescription()
    {
        return this.description;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }

    public String getContactEmail()
    {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail)
    {
        this.contactEmail = contactEmail;
    }

    public String getLocation()
    {
        return location;
    }

    public void setLocation(String location)
    {
        this.location = location;
    }

}
