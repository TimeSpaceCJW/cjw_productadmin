package com.cjw_productadmin.backend.service;

import com.cjw_productadmin.backend.domain.Product;
import com.cjw_productadmin.backend.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@AllArgsConstructor
@Service
public class ProductService {

    private ProductRepository productRepository;

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Product findOne(Long id) {
        return productRepository.findById(id).orElseThrow();
    }

    @Transactional
    public Product save(Product product) {
        return productRepository.save(product);
    }

    @Transactional
    public Product update(Long id, Product newProduct) {
        Product product = productRepository.findById(id).orElseThrow();
        product.setName(newProduct.getName());
        product.setDetail(newProduct.getDetail());
        product.setPrice(newProduct.getPrice());

        return productRepository.save(product);
    }

    @Transactional
    public void delete(Long id) {
        Product product = productRepository.findById(id).orElseThrow();
        productRepository.delete(product);
    }
}
