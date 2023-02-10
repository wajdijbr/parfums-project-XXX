package com.parf.demo.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import com.parf.demo.Entities.Client;
import com.parf.demo.Services.ClientServices;

import java.util.List;
@RestController

@RequestMapping("/clients")
@CrossOrigin("*")
public class ClientController {
    @Autowired
    private ClientServices services;

    @RequestMapping(method = RequestMethod.GET)
    public List<Client> getAllClients() {
        return services.getAllClients();
    }

    // @RequestMapping(value="/{id}",method = RequestMethod.GET)
    // public Client getClientById(@PathVariable("id") Long id) throws NotFoundException
    // {
    //     return services.getClient(id);
    // }
    


    @RequestMapping(method = RequestMethod.POST)
    public Client createClient(@RequestBody Client Client) {
        return services.saveClient(Client) ;
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Client updateClient(@RequestBody Client Client) {
        return services.updateClient(Client);

    }

    @RequestMapping(value="/{id}",method = RequestMethod.DELETE)
    public void deleteClient(@PathVariable("id") Long id)
    {
        Client c = null;
        try {
            c = services.getClient(id);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Get Client");
        }
        services.deleteClient(c);
    }



}