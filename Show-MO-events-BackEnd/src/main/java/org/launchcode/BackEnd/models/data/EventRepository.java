package org.launchcode.BackEnd.models.data;

import org.launchcode.BackEnd.models.Event;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends CrudRepository<Event, Integer> {
}
