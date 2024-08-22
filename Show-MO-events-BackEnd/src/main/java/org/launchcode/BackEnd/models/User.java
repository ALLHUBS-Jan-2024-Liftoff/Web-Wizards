package org.launchcode.BackEnd.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
public class User extends AbstractEntity {

    @Column(name = "username", nullable = false, unique = true)
    @NotNull
    private String username;

    @NotNull
    private String pwHash;

//    private String name;
//    private String biography;
//    private String avatarUrl;

    public User() {}

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User(String username, String password) {
        this.username = username;
        this.pwHash = encoder.encode(password);
    }

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPwHash() {
        return pwHash;
    }

    public void setPwHash(String pwHash) {
        this.pwHash = pwHash;
    }

    // New setPassword method to update the password
    public void setPassword(String password) {
        this.pwHash = encoder.encode(password);
    }

//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getBiography() {
//        return biography;
//    }
//
//    public void setBiography(String biography) {
//        this.biography = biography;
//    }
//
//    public String getAvatarUrl() {
//        return avatarUrl;
//    }
//
//    public void setAvatarUrl(String avatarUrl) {
//        this.avatarUrl = avatarUrl;
//    }
}
