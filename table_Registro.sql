.import aminoacidos.csv aminoacidos
.import acidosgraxos.csv acidos-graxos
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
    id_nutricionista int(11) default null,
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

create table Nutricionista(
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
insert into especialidade(id_especialidade, nome_especialidade) values(1, 'Nutrição Esportiva');
insert into especialidade(id_especialidade, nome_especialidade) values(2, 'Nutrição Clínica');
insert into especialidade(id_especialidade, nome_especialidade) values(3, 'Saúde Pública/Coletiva');
insert into especialidade(id_especialidade, nome_especialidade) values(4, 'Nutrição Escolar');
insert into especialidade(id_especialidade, nome_especialidade) values(5, 'Nutrição em Unidades de Alimentação (UAN)');
insert into especialidade(id_especialidade, nome_especialidade) values(6, 'Nutrição Funcional');
insert into especialidade(id_especialidade, nome_especialidade) values(7, 'Nutrição Materno-Infantil');
insert into especialidade(id_especialidade, nome_especialidade) values(8, 'Nutrição Geriátrica');
insert into especialidade(id_especialidade, nome_especialidade) values(9, 'Nutrição Em Marketing e Comunicação');
insert into especialidade(id_especialidade, nome_especialidade) values(7, 'Nutrição Pesquisa e Docência');
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
insert into endereco (id_endereco, logradouro, cep, bairro, cidade, estado, id_nutricionista, paciente_id) values(1, 'Rua Cardeal Arcoverde', 05407-003, 'Pinheiros', 'São Paulo', 'São Paulo', null, 1);

alter table nutricionista add em_atividade varchar(100);

update nutricionista set em_atividade = 'Ativo' where id_nutricionista = 1;
update nutricionista set em_atividade = 'Inativo' where id_nutricionista = 2;
