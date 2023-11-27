
create database inmobiliaria;

-- creacion de tabla principal--
create table proyecto(
	id_proyecto int not null,
    nombre_proyecto varchar(50),
	numero_estructura int,
    tipo_de_construccion varchar(50),
    ocupacion varchar(50),
    comuna varchar(50),
    posibilidad_de_subsidiar varchar(2),
    numero_pisos int,
    numero_de_habitaciones int,
    numero_baños int,
    estacionamiento varchar(2),
    preciototal int,
    rut_empresa varchar(10),
    nombre_de_empresa varchar(50),
    email_de_empresa varchar(50),
	telefono_contacto int,

	rut_cliente varchar(10),
    nombre_cliente varchar(50),
    apellido_cliente varchar(50),
    sexo varchar(1),
    telefono_cliente int,
    email_cliente varchar(50),
    fecha_de_pago_estructura date,
    monto_pagado int,
    comprobante varchar(4),
	credito_hipotecario varchar(4),
    fecha_solicitado_credito_hipotecario date,
    monto_solicitado_credito_hipotecario int,
    años_a_pagar int,
    dividendo_mensual int,
    interes_credito_hipotecario float,
    entidad_bancaria varchar(50),
    
	nombre_notaria varchar(50),
    nombre_del_notario varchar(50),
    apellido_del_notario varchar(50),
    rut_del_notario varchar(10),
	gastos_operacionales int,
    firma_del_cliente varchar(50),
	firma_inmobiliaria varchar(50),
    firma_notario varchar(50)
);
-- Definición de PK -- 
 alter table proyecto
 add constraint proyecto_pk primary key (id_proyecto);
 set sql_safe_updates = 1;
 delete from proyecto;
-- insert --
 insert into proyecto values(1,'Ciudad del Sol',2098,'Condominio','Casa','Puente Alto','Si',6,2,5,'Si',1400000,'216230-0','Pedrociones S.A','pedrocionessa@gmail.com',12345,'17853294-k','Pedro','Álvarez','H',931533246,'pedro.alvarez@gmail.com',str_to_date('18-06-2022','%d-%m-%Y'),540000,'Si','Si',str_to_date('16-06-2022','%d-%m-%Y'),850000,30,35000,0.05,'BancoEstado','Los Cipreses','Andrea','Silva','15678342-k',12000,'FirmadoPorPedroAlvarez','FirmadoPorPedrocionesSA','FirmadoPorNotarioAndreaSilva');
 insert into proyecto values(2,'Ciudad del Sol',2098,'Condominio','Casa','Puente Alto','Si',6,2,5,'Si',1400000,'216230-0','Pedrociones S.A','pedrocionessa@gmail.com',12345,'17853294-k','Pedro','Álvarez','H',931533246,'pedro.alvarez@gmail.com',str_to_date('18-06-2022','%d-%m-%Y'),540000,'Si','Si',str_to_date('16-06-2022','%d-%m-%Y'),850000,30,35000,0.05,'BancoEstado','Los Cipreses','Andrea','Silva','15678342-k',12000,'FirmadoPorPedroAlvarez','FirmadoPorPedrocionesSA','FirmadoPorNotarioAndreaSilva');
 select * from proyecto;