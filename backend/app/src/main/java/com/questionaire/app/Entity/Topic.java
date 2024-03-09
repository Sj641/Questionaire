package com.questionaire.app.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;
import lombok.Data;

/**
 * This is the base Entity
 * From here the Hierarchy Starts
 * Has a status variable to indicate completion
 * of the topic (Means all questions are answered under it)
 */

@Data
@Document(collection = "topics")
public class Topic {
    @Id
    private String id;
    private String name;
    private Boolean status; // Indicates completion of questions under this topic
    private Integer subtopicsSize; // Size of Subtopics for efficiency
    private List<Topic> subtopics; // Subtopics are nested within topics
    private Integer questionSize; // Total number of questions under this topic
    private List<Question> questions;
}