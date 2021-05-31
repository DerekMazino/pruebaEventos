drop database if exists pruebaEventos;
create database pruebaEventos;
use pruebaEventos;

create table evento(
	idE int NOT NULL AUTO_INCREMENT,
    nombreE varchar(20),
    descripcionE varchar(200),
    nParcticipantes int,
    primary key(idE)
);

create table participante(
	idP int NOT NULL AUTO_INCREMENT,
    pNombre varchar(10),
    sNombre varchar(10),
    pApellido varchar(10),
    sApellido varchar(10),
	celular varchar(12),
    eve_id int(11),
    PRIMARY KEY (idP),
    constraint fk_evento foreign key(eve_id) references evento(idE)
);

insert into evento values(0,'Rock al parque', "Festival de verano 2021 - Agosto", 0);
insert into evento values(0,'Estereo Picnic', "Festival Estereo Picnic 2021 - Abril", 0);
select * from evento;