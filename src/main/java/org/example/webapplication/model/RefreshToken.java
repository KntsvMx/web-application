package org.example.webapplication.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

import java.sql.Timestamp;

@Entity
@Table(
        name = "refresh_token",
        indexes = @Index(name = "refresh_token_expiration_at_idx", columnList = "expiration_at"))
@Builder(builderMethodName = "with")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class RefreshToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    private String value;

    @NotNull
    @Column(name = "issued_at", nullable = false)
    private Timestamp issuedAt;

    @NotNull
    @Column(name = "expiration_at", nullable = false)
    private Timestamp expirationAt;

    @NotNull
    @ToString.Exclude
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId", foreignKey = @ForeignKey(name = "refresh_token_user_fk"), nullable = false)
    private User user;

}