package org.launchcode.BackEnd.models.data;



import org.launchcode.BackEnd.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



public interface UserRepository extends CrudRepository<User, Integer> {

    User findByUsername(String username);
}
// Repository interface, user and ID are manged //
// Custom method to gather user name that can be used throughout the code//