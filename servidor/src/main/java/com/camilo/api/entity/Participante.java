package com.camilo.api.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Entity;

@Entity
public class Participante {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    public Long idP;

    public String pNombre;
    public String sNombre;
    public String pApellido;
    public String sApellido;
    public int celular;
    public int eveId;
}
