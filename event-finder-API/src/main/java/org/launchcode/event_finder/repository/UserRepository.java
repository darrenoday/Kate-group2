package org.launchcode.event_finder.repository;


import org.launchcode.event_finder.model.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Chris Bay
 */
public interface UserRepository extends CrudRepository<User, Integer> {

    User findByUsername(String username);

}
