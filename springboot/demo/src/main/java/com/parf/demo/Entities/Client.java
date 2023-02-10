package com.parf.demo.Entities;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Date;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "produits")
public class Client implements Serializable {

@Id
@GeneratedValue 
private Integer idClient;
private String emailClient;
private String passClient;
private String nomClient;
private String prenomClient;
private String countryClient;
private String adresseClient;
private String gouvClient;
private String villeClient;
private Integer zipClient;
private Integer telClient;
private String emailCClient;
private String noteClient;
private String coupponClient;
private Integer etatClient;
private Date dateClient;







}