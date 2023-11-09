package com.cjw_productadmin.backend.domain;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@SequenceGenerator(
        name = "ADMIN_GENERATOR"
        , sequenceName = "ID"
        , initialValue = 1
        , allocationSize = 1
)
@Table(name = "admin", schema = "public")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ADMIN_GENERATOR")
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
