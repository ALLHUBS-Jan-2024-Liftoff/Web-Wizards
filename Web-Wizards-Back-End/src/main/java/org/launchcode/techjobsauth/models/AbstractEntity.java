package org.launchcode.techjobsauth.models;

import jakarta.persistence.*;

import java.util.Objects;

@MappedSuperclass
public abstract class AbstractEntity {

    @Id
    @SequenceGenerator(name="abstractentity_seq", sequenceName = "abstractentity_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "abstractentity_seq")
    private Integer id;

    public int getId() {
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