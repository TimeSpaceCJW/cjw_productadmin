package com.cjw_productadmin.backend.repository;

import com.cjw_productadmin.backend.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
