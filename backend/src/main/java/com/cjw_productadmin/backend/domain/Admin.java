package com.cjw_productadmin.backend.domain;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "admin")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Admin {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name", length = 40, nullable = false)
    private String name;

    @Column(name= "deptname", length = 40, nullable = false)
    private String deptname;

    @Builder
    public Admin(String name, String deptname) {
        this.name = name;
        this.deptname = deptname;
    }
}
