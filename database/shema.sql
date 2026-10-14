create table productos (
	producto_id serial primary key,
	codigo varchar(20) not null unique,
	nombre varchar(100) not null,
	description text,
	categoria varchar(50) not null,
	marca varchar(50) not null,
	precio numeric(10,2) not null check (precio > 0),
	stock integer not null check (stock >= 0),
	estado boolean not null default true,
	create_at timestamp not null default current_timestamp
);

insert into productos (codigo, nombre, description, categoria, marca, precio, stock) values 
	('001','Computadoras', 'Computadoras portátiles y de escritorio','Dispositivo', 'DELL', 100.00, 4),
	('002','Periféricos', 'Mouse, teclados y otros accesorios', 'Dispositivo', 'PH', 404.00, 3),
	('003','Monitores', 'Monitores para computadora', 'Dispositivo', 'PH', 234.00, 5),
	('004','Audio', 'Audífonos, bocinas y micrófonos', 'Dispositivo','Kingston', 23.00,1 ),
	('006','Almacenamiento', 'Discos duros, SSD y memorias', 'Dispositivo', 'PH', 50.00, 6),
	('005','Redes', 'Routers, switches y dispositivos de red', 'Dispositivo', 'PH', 70.22, 1),
	('0011','Computadoras', 'Computadoras portátiles y de escritorio','Dispositivo', 'DELL', 100.00, 4),
	('007','Computadoras Laptop', 'Computadoras portátiles','Dispositivo', 'DELL', 100.00, 8),
	('008','Computadoras', 'Computadoras portátiles y de escritorio','Dispositivo', 'DELL', 100.00, 2),
	('009','Computadoras', 'Computadoras portátiles','Dispositivo', 'DELL', 100.00, 1),
	('0010','Computadoras', 'Computadoras de escritorio','Dispositivo', 'DELL', 100.00, 9);

    select * from productos;
