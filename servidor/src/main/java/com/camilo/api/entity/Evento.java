package com.camilo.api.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Entity;

@Entity
public class Evento {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    public Long idE;

    public String nombreE;
    public String descripcionE;
    public int nParcticipantes;
}
