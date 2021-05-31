package com.camilo.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.camilo.api.entity.Evento;
import com.camilo.api.entity.Participante;
import com.camilo.api.repository.EventoRepository;

@RestController
@RequestMapping(path = "/eventos")
@CrossOrigin(origins = "http://localhost")
public class EventoController {
	@Autowired
	private EventoRepository eventoRepository;
	
	@RequestMapping(value = "/obtener", method = RequestMethod.GET)
    public Iterable<Evento> obtenerTodos() {
        return eventoRepository.findAll();
    }
	@RequestMapping(value = "/actualizar", method = RequestMethod.PUT)
    public Evento editar(@RequestBody Evento evento) {
        return eventoRepository.save(evento);
    }
}
