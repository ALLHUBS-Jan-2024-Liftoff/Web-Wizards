package org.launchcode.techjobsauth.models.data;

import jakarta.transaction.Transactional;
import org.launchcode.techjobsauth.models.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface PostRepository extends CrudRepository<Post, Integer> {
}
