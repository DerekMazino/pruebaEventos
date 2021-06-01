drop database if exists pruebaEventos;
create database pruebaEventos;
use pruebaEventos;

insert into evento values(1, "Festival de verano 2021 - Agosto", 0,'Rock al parque');
insert into evento values(2, "Festival Estereo Picnic 2021 - Abril", 0, 'Estereo Picnic');
insert into evento values(3, "KISS – END OF THE ROAD", 0, 'Concierto');
select * from evento;

delimiter //
 create trigger after_participante_insert
   after insert
   on participante
   for each row
 begin
   update evento set n_Participantes=evento.n_Participantes + 1 
     where new.eve_id=evento.ide; 
 end //
 delimiter ;
