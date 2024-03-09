package com.questionaire.app.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.questionaire.app.Entity.Question;

@Repository
public interface QuestionRepo extends MongoRepository<Question, String> {
    // List<Question> findAll(); // Get all Questions

    // Optional<Question> findById(String id); // Retrieve a Question by its ID

    // Question save(Question t); // Used to Save or Update the Question data

    // void deleteById(String id); // Deletes the Question by its ID
}
