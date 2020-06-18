package com.yravi.fsonlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yravi.fsonlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
