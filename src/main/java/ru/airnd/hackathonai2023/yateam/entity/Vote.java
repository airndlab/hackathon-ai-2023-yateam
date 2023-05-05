package ru.airnd.hackathonai2023.yateam.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "vote")
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "vote_id_seq")
    @SequenceGenerator(name = "vote_id_seq", sequenceName = "vote_id_seq", allocationSize = 1)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "practice_id", nullable = false)
    private Practice practice;

    @NotBlank
    private Integer rating;
}
