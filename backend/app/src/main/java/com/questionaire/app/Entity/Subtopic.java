package com.questionaire.app.Entity;

import java.util.List;
import org.springframework.data.annotation.Id;
import lombok.Data;
/*
 * This is the Intermediate Entity
 * It can have its own questions
 * And it can have its Subtopics
 * Has a status variable to indicate completion
 * of the topic (Means all questions are answered under it)
 */

@Data
public class Subtopic {
    @Id
    private String id;
    private String name;
    private Integer status;
    private int subtopicSize;
    private List<Subtopic> subtopics;
    private Integer questionSize;
    private List<Question> questions;
}
