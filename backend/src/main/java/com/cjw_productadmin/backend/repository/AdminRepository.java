package com.cjw_productadmin.backend.repository;

import com.cjw_productadmin.backend.domain.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Long> {
}
