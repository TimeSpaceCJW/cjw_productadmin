package com.cjw_productadmin.backend.domain;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@SequenceGenerator(
        name = "PRODUCT_GENERATOR"
        , sequenceName = "ID"
        , initialValue = 1
        , allocationSize = 1
)
@Table(name = "product", schema = "public")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PRODUCT_GENERATOR")
    @Column(name = "id")
    private Long id;

    @Column(name = "name", length = 40, nullable = false)
    private String name;

    @Column(name = "detail", length = 500, nullable = false)
    private String detail;

    @Column(name = "price")
    private Long price;

    @Builder
    public Product(String name, String detail, Long price) {
        this.name = name;
        this.detail = detail;
        this.price = price;
    }
}
