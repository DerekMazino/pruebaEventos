package com.camilo.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.camilo.api.entity.Participante;
import com.camilo.api.repository.ParticipanteRepository;

@RestController
@RequestMapping(path = "/participante")
@CrossOrigin(origins = "http://localhost")
public class ParticipanteController {
	@Autowired
	private ParticipanteRepository participanteRepository;
	
	
	@RequestMapping(value = "/crear", method = RequestMethod.POST)
    public Participante crearParticipante(@RequestBody Participante participante) {
        return participanteRepository.save(participante);
    }
	
	@RequestMapping(value = "/obtener", method = RequestMethod.GET)
    public Iterable<Participante> obtenerTodos() {
        return participanteRepository.findAll();
    }
	
	@RequestMapping(value = "/eliminar/{id}", method = RequestMethod.DELETE)
    public boolean eliminar(@PathVariable() Long id) {
		participanteRepository.deleteById(id);
        return true;
    }
	
	@RequestMapping(value = "/actualizar", method = RequestMethod.PUT)
    public Participante editar(@RequestBody Participante participante) {
        return participanteRepository.save(participante);
    }
}
