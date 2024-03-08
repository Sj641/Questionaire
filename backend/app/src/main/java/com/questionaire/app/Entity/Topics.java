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
public class Topics {
    @Id
    private String id;
    private String name;
    private Boolean status;
    private Integer subtopicSize;
    private List<Subtopic> subtopics;
}