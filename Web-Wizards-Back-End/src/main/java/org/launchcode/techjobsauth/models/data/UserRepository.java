package org.launchcode.techjobsauth.models.data;


import org.launchcode.techjobsauth.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
//@Transactional
public interface UserRepository extends CrudRepository<User, Integer>
{
    User findByUsername(String username);
}
