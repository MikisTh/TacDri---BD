.import aminoacidos.csv aminoacidos
.import acidos-graxos.csv acidos-graxos
.import alimentos.csv alimentos
.import dri.csv DRI
  
CREATE DATABASE tacDri_project;

USE tacDri_project;

create table Paciente(
	  id_paciente int(11) auto_increment primary key,
    nome_paciente varchar(125) not null,
    dt_nasc_paciente date,
    cpf_paciente int(15) unique not null,
    rg_paciente varchar(11) not null,
    email_paciente varchar(100),
    convenio_id int(11) default null,
    foreign key(convenio_id) references convenio (id_convenio) 
);

create table Endereco(
	  id_endereco int(11) auto_increment primary key,
    logradouro varchar(100) not null,
    cep int(8)not null,
    bairro varchar(100) not null,
    cidade varchar(100)not null,
    estado varchar(100)not null,
    medico_id int(11) default null,
    paciente_id int(11) default null,
    foreign key(paciente_id) references paciente (id_paciente),
    foreign key(nutricionista_id) references nutricionista (id_nutricionista) 
);

create table Telefone(
	  id_telefone int(11) auto_increment primary key,
    ddd int(3) not null,
    numero int(9) not null,
    medico_id int(11) default null,
    paciente_id int(11) default null,
    foreign key(paciente_id) references paciente (id_paciente),
    foreign key(nutricionista_id) references nutricionista (id_nutricionista) 
);

CREATE TABL Nutricionista(
	  id_nutricionista int(11) auto_increment primary key,
    nome_nutricionista varchar(125) not null,
    cpf_nutricionista int(15) unique not null,
    crn varchar(13)unique not null,
    email_nutricionista varchar(100),
    cargo varchar(100) NOT NULL,
    id_especialidade INT NOT NULL,
    foreign key(id_especialidade) references especialidade (id_especialidade)
);

create table Especialidade(
	  id_especialidade int(11) auto_increment primary key,
    nome_especialidade varchar(100)
);

CREATE TABLE Exames (
    'IdExame' int PRIMARY KEY AUTOINCREMENT,    
    'Hemograma' varchar (200), 
    'Colesterol' varchar (200),
    'Urina' varchar (200),
    'Glicemia' varchar (200), 
    'Fezes' varchar (200),
    'Data' date NOT NULL,
    'Hora' time NOT NULL,
    

CREATE TABLE RegistroAlimentar (
    'IdRegistro' int PRIMARY KEY AUTOINCREMENT,    
    'CategoriaAlimento' varchar (20), 
    'DescricaoAlimento' varchar (200),
    'Data' date NOT NULL,
    'Hora' time NOT NULL,
    'Quantidadeg/kg' int NOT NULL, 

CREATE TABLE TACO ( 


  -- Inserindo dados na tabela Especialidade
--
insert into especialidade(id_especialidade, nome_especialidade) values(1, 'Pediatria');
insert into especialidade(id_especialidade, nome_especialidade) values(2, 'Clínica');
insert into especialidade(id_especialidade, nome_especialidade) values(3, 'Gastroenterologia');
insert into especialidade(id_especialidade, nome_especialidade) values(4, 'Dermatologia');
insert into especialidade(id_especialidade, nome_especialidade) values(5, 'Cardiologia');
insert into especialidade(id_especialidade, nome_especialidade) values(6, 'Neurologia');
insert into especialidade(id_especialidade, nome_especialidade) values(7, 'Ortopedia');

-- Inserindo dados na tabela Nutricionista
--
insert into nutricionista(id_nutricionista, nome_nutricionista, cpf_nutricionista, crn, email_nutricionista, cargo, especialidade_id) values(1, 'Miguel Borges', 1472581234, 745896, 'miguelborges@gmail.com', 'Residente', 6); 

-- Inserindo dados na tabela Paciente
--
insert into paciente(id_paciente, nome_paciente, dt_nasc_paciente, cpf_paciente, rg_paciente, email_paciente, convenio_id) values(1, 'Aline Dias de Sousa', '1994-08-21', '74951847', '1462085-x', 'aline.dias02@gmail.com', null);

-- Inserindo dados na tabela Telefone
--
insert into telefone(id_telefone, ddd, numero, medico_id, paciente_id) values(1, 11, 40028922, 1, null);

-- Inserindo dados na tabela Endereco
--
insert into endereco(id_endereco, logradouro, cep, bairro, cidade, estado, medico_id, paciente_id) values(1, 'Rua Cardeal Arcoverde', 05407-003, 'Pinheiros', 'São Paulo', 'São Paulo', null, 1);

alter table medico add em_atividade varchar(100);

update medico set em_atividade = 'Ativo' where id_medico = 1;
update medico set em_atividade = 'Inativo' where id_medico = 2;
