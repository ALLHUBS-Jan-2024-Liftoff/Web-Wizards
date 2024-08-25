package org.launchcode.BackEnd.models;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;

import java.util.Objects;
/*
* Mapped... to the database for the class that extends this one
* Abstraction of repetitive code, can't be instantiated directly.
* Auto Generate ID with the @GeneratedValue
* ID is encapsulated
*/
@MappedSuperclass
public abstract class AbstractEntity {

    @Id
    @GeneratedValue()
    private Integer id;

    public Integer getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AbstractEntity that = (AbstractEntity) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}