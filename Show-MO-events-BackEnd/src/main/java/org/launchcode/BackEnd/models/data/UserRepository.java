package org.launchcode.BackEnd.models.data;



import org.launchcode.BackEnd.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/*
* Class allows application to function using the ID primary key for CRUD functions as needed.
* custom query function, to allow jpa to create the appropriate query to the database.
*/


public interface UserRepository extends CrudRepository<User, Integer> {

    User findByUsername(String username);
}