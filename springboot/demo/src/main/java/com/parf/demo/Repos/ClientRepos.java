package com.parf.demo.Repos;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.parf.demo.Entities.Client;


@RepositoryRestResource
public interface ClientRepos extends JpaRepository<Client, Long> {
    public List<Client> findAll();
    
    public static Client saveCategory(Client client) {
        return null;
    }
}
