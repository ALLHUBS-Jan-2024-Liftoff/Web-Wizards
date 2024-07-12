package org.launchcode.Web_Wizards.Back.End.Models.data;

import org.launchcode.Web_Wizards.Back.End.Models.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends CrudRepository<Post, Integer>
{
    //Custom query methods can be defined here...
}