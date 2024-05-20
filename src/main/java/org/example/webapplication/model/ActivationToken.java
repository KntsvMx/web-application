package org.example.webapplication.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "activation_token",
        schema = "public",
        indexes = @Index(name = "idx_activation_token_token", columnList = "token", unique = true))
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(builderMethodName = "with", toBuilder = true)
public class ActivationToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Builder.Default
    @Column(name = "activated", nullable = false)
    private Boolean activated = false;

    @Column(name = "expiry_date", nullable = false, updatable = false)
    private LocalDateTime expiryDate;

    @Column(name = "token", length = 36, unique = true, updatable = false, nullable = false)
    private String token;

    @ManyToOne(fetch = FetchType.EAGER, optional = false, cascade = CascadeType.MERGE)
    @JoinColumn(name = "userId",
            nullable = false,
            updatable = false,
            referencedColumnName = "user_id",
            foreignKey = @ForeignKey(name = "fk_activation_token_user_id", value = ConstraintMode.CONSTRAINT,
                    foreignKeyDefinition = "FOREIGN KEY (user_id) REFERENCES \"user\"(user_id) ON DELETE CASCADE"))
    private User user;
}
