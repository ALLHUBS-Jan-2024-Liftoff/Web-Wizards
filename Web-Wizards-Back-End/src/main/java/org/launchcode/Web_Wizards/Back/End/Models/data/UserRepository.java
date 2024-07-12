package org.launchcode.Web_Wizards.Back.End.Models.data;

import org.launchcode.Web_Wizards.Back.End.Models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer>
{
    User findByUsername(String username);
}
