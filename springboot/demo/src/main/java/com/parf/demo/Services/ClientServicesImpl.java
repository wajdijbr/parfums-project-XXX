package com.parf.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.parf.demo.Entities.Client;
import com.parf.demo.Repos.ClientRepos;

import java.util.List;
@Service
public class ClientServicesImpl implements ClientServices{
    @Autowired
    private ClientRepos clientRepository;
    @Override
    public Client saveClient(Client p) {
        return clientRepository.save(p);
    }

    @Override
    public Client updateClient(Client p) {
        return clientRepository.save(p);
    }
    @Override
    public void deleteClient(Client p) {
        clientRepository.delete(p);
    }
    @Override
    public void deleteClientById(Long id) {
        clientRepository.deleteById(id);
    }
    @Override
    public Client getClient(Long id) throws NotFoundException {
        Client c = clientRepository.findById(id).get();
        if(c  ==  null) throw new NotFoundException();
        return c;
    }

    @Override
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }



}
