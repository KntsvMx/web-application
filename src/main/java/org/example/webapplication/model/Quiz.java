package org.example.webapplication.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.webapplication.model.Enum.DifficultyLevel;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
@Table(name = "quiz")
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quiz_id")
    private Long quizId;

    @NotBlank(message = "The title of the quiz should not be blank!")
    @NotNull(message = "The title of the quiz should not be null!")
    private String title;

    @NotNull(message = "The description of the quiz should not be null!")
    private String description;

    private LocalDateTime startTime;

    private LocalDateTime endTime;

    @NotBlank(message = "The topic of the quiz should not be blank!")
    @NotNull(message = "The topic of the quiz should not be null!")
    private String topic;

    private DifficultyLevel difficulty;

    @Column(name = "quiz_duration_minutes")
    @Min(value = 5, message = "Quiz duration must be at least 5 minutes")
    @Max(value = 300, message = "Quiz duration cannot exceed 300 minutes")
    private Integer quizDurationMinutes;

    @ManyToOne
    @JoinColumn(name = "categoryId")
    private Category category;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "userResultId", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserQuizResult> results = new ArrayList<>();
}
