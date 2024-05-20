package org.example.webapplication.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "answer")
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "answerId")
    private Long id;

    @NotNull(message = "The text of the answer should not be null!")
    @NotBlank(message = "The text of the answer should not be blank!")
    private String text;

    @ManyToOne
    @JoinColumn(name = "questionId")
    @NotNull(message = "The question not be null!")
    private Question questionId;

    @NotNull(message = "The isCorrect field of the answer should not be null!")
    private boolean isCorrect;

    @Column(name = "is_deleted", nullable = false)
    private boolean deleted;
}
