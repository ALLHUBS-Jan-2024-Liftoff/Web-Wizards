package org.launchcode.BackEnd.models.data;

import jakarta.transaction.Transactional;
import org.launchcode.BackEnd.models.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public interface CommentRepository extends CrudRepository<Comment, Integer>
{
    List<Comment> findByPostId(Integer postId);
}
