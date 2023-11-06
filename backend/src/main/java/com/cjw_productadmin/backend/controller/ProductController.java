package com.cjw_productadmin.backend.controller;

import com.cjw_productadmin.backend.domain.Product;
import com.cjw_productadmin.backend.service.AdminService;
import com.cjw_productadmin.backend.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class ProductController {

    private ProductService productService;

    //전체조회
    @GetMapping("/product")
    //@CrossOrigin(origins = "http://localhost:3000")
    public List<Product> getProductList() {
        return productService.findAll();
    }

    //단일조회
    @GetMapping("/productdetail/{id}")
    //@CrossOrigin(origins = "http://localhost:3000")
    public Product getProduct(@PathVariable("id") Long id) {
        System.out.println(id);
        return productService.findOne(id);
    }

    // 저장
    @PostMapping("/product/{id}")
    //@CrossOrigin(origins = "http://localhost:3000")
    public Product saveProduct(@RequestBody Product product) {
        return productService.save(product);
    }

    // 수정
    @PutMapping("/product/{id}")
    //@CrossOrigin(origins = "http://localhost:3000")
    public Product updateProduct(@RequestBody Product product, @PathVariable("id") Long id) {
        return productService.update(id, product);
    }

    // 삭제
    @DeleteMapping("/product/{id}")
    //@CrossOrigin(origins = "http://localhost:3000")
    public void deleteProduct(@PathVariable("id") Long id) {
        productService.delete(id);
    }
}
