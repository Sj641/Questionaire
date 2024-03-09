package com.questionaire.app.Entity;

import java.util.List;

import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Retry.Topic;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
/*
 * This is the Last or leaf Entity
 * The options and correctOption variable are optional
 * It will contain the Question Text
 * It will have the Status of the Question as below
 * Active, Inactive, Answered, Incorrect
 */

@Data
@Document(collection = "question")
public class Question {
    @Id
    private String id;
    private String text;
    private String answer;
    private Integer status;
    private List<String> options;
    private String correctOption;
    @DBRef
    private Topic topic; // Reference to parent topic
}
