package com.cjw_productadmin.backend.controller;

import com.cjw_productadmin.backend.domain.Admin;
import com.cjw_productadmin.backend.service.AdminService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/", method = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
public class AdminController {

    private AdminService adminService;

    @GetMapping("/admin")
    public List<Admin> getAdminList() {
        return adminService.findAll();
    }

    @GetMapping("/admindetail/{id}")
    public Admin getAdmin(@PathVariable("id") Long id) {
        return adminService.findOne(id);
    }

    @PostMapping("/adminsave")
    public Admin saveAdmin(@RequestBody Admin admin) {
        return adminService.save(admin);
    }

    @PutMapping("/adminedit/{id}")
    public Admin updateAdmin(@RequestBody Admin admin, @PathVariable("id") Long id) {
        return adminService.update(id, admin);
    }

    @DeleteMapping("/admindelete/{id}")
    public void deleteAdmin(@PathVariable("id") Long id) {
        adminService.delete(id);
    }
}
