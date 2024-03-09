package com.questionaire.app.Repository;

import com.questionaire.app.Entity.Topic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/*
 * This INTERFACE is Topics Class Repository
 * Commented Functions already exists
 * No need to redeclare
 */

@Repository
public interface TopicRepo extends MongoRepository<Topic, String> {
    // List<Topic> findAll(); // Get all topics

    // Optional<Topic> findById(String id); // Retrieve a topic by its ID

    // Topic save(Topic t); // Used to Save or Update the Topic data

    // void deleteById(String id); // Deletes the Topic by its ID
}