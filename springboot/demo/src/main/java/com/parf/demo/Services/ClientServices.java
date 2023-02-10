package com.parf.demo.Services;


import java.util.List;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;

import com.parf.demo.Entities.Client;


public interface ClientServices {

    Client saveClient(Client c);

    Client updateClient(Client c);
    void deleteClient(Client c);
    void deleteClientById(Long id);
    Client getClient(Long id) throws NotFoundException;
    List<Client> getAllClients();
}
