package org.launchcode.BackEnd.models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class Event extends AbstractEntity {

    @NotNull
    @Size(min = 5, max = 100)
    private String title;

    @NotNull
    private LocalDate date;

    @NotNull
    private LocalTime time;

    @NotBlank
    @Size(min = 5, max = 100)
    private String details;

    public Event() {
    }

    public Event(String title, LocalDate date, LocalTime time, String details) {
        this.title = title;
        this.date = date;
        this.time = time;
        this.details = details;
    }

    public @NotNull String getTitle() {
        return title;
    }

    public void setTitle(@NotNull String title) {
        this.title = title;
    }

    public @NotNull LocalDate getDate() {
        return date;
    }

    public void setDate(@NotNull LocalDate date) {
        this.date = date;
    }

    public @NotNull LocalTime getTime() {
        return time;
    }

    public void setTime(@NotNull LocalTime time) {
        this.time = time;
    }

    public @NotBlank String getDetails() {
        return details;
    }

    public void setDetails(@NotBlank String details) {
        this.details = details;
    }

    @Override
    public String toString() {
        return "Event - Title: " + this.getTitle() + "\nDate: " + this.getDate() + "\nTime: " + this.getTime() + "\nDetails: " + this.getDetails();
    }
}
