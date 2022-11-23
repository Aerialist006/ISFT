DROP DATABASE IF EXISTS ISFT;

/*
	SELECT * FROM Estudiantes
    SELECT * FROM Maestros
    SELECT * FROM Materias
    SELECT * FROM Requisitos
    SELECT * FROM Calificaciones
    SELECT * FROM Periodos
*/

CREATE DATABASE IF NOT EXISTS ISFT;
USE ISFT;

CREATE TABLE Estudiantes(
	ID INT PRIMARY KEY auto_increment, ---
    Cod_Estudiante CHAR(9), ---
    Nombres CHAR(60),
    Apellidos CHAR(60),
    Cedula CHAR(13),
    F_Nacimiento DATE,
    Lugar_Nacimiento CHAR(60),
    Nacionalidad CHAR(20),
    Tel CHAR(12),
    Correo CHAR(255),
    Direccion CHAR(70),
    Sector CHAR(20),
    Provincia CHAR(20),
    E_Civil CHAR(15),
    C_Hijos INT,
    Enfermedad TEXT(512),
    Alergias TEXT(512),
    Ocupacion CHAR(60),
    G_Academico CHAR(20),
    Estado_Trabajo BOOL,
    Lugar_Trabajo CHAR(60),
    Dir_Trabajo CHAR(90),
    Tel_Trabajo CHAR(12),
    Cargo CHAR(60),
    H_Laboral CHAR(30),
    Estado_Estudios BOOL,
    Lugar_Estudio CHAR(60),
    Estudios CHAR(30),
    Iglesia CHAR(60),
    Pastor CHAR(60), /*Un solo*/
    Tiempo_Iglesia CHAR(30),
    Cargos CHAR(60),
    Periodo CHAR(30), /*Se llena solo?*/
    Motivacion TEXT(1024),
    Expectativas TEXT(512),
    Testimonio TEXT(2048),
    Tipo INT, /*0, estudiante, 1 maestro*/
    
    E_Aceptado BOOL,
    Clave CHAR(32)
);

CREATE TABLE Maestros(
	ID INT PRIMARY KEY auto_increment,
    Cod_Maestro CHAR(9),
    Nombres CHAR(60),
    Apellidos CHAR(60),
    Cedula CHAR(13),
    F_Nacimiento DATE,
    Lugar_Nacimiento CHAR(60),
    Nacionalidad CHAR(20),
    Tel CHAR(12),
    Correo CHAR(255),
    Direccion CHAR(70),
    Sector CHAR(20),
    Provincia CHAR(20),
    E_Civil CHAR(15),
    C_Hijos INT,
    Enfermedad TEXT(512),
    Alergias TEXT(512),
	Ocupacion CHAR(60),
    G_Academico CHAR(20),
    Estado_Trabajo BOOL,
    Lugar_Trabajo CHAR(60),
    Dir_Trabajo CHAR(90),
    Tel_Trabajo CHAR(12),
    Cargo CHAR(60),
    H_Laboral CHAR(30),
    Estado_Estudios BOOL,
    Lugar_Estudio CHAR(60),
    Estudios CHAR(30),
    Iglesia CHAR(60),
    Pastor CHAR(60), /*Un solo*/
    Tiempo_Iglesia CHAR(30),
    Cargos CHAR(60),
    Periodo CHAR(30), /*Se llena solo?*/
    Motivacion TEXT(1024),
    Expectativas TEXT(512),
    Testimonio TEXT(2048),
    Tipo INT, /*0, estudiante, 1 maestro*/
    
    E_Aceptado BOOL, /*???*/
    Clave CHAR(32)
);

CREATE TABLE Materias(
	ID INT PRIMARY KEY auto_increment,
    Cod_Materia CHAR(9),
    Nombre CHAR(60),
    Nivel INT,
    Creditos INT
);

CREATE TABLE Requisitos(
	ID INT PRIMARY KEY auto_increment,
    Materia INT,
    Requisitos INT,
    CONSTRAINT FK_Materia FOREIGN KEY (Materia) REFERENCES Materias(ID),
    CONSTRAINT FK_Requisitos FOREIGN KEY (Requisitos) REFERENCES Materias(ID)
);

CREATE TABLE Calificaciones(
	ID INT PRIMARY KEY auto_increment,
    ID_Estudiante INT,
    ID_Maestro INT,
    Materia INT,
    Nota FLOAT,
    Periodo CHAR(20),
    
    CONSTRAINT FK_Estudiante_Cal foreign key (ID_Estudiante) REFERENCES Estudiantes(ID),
    CONSTRAINT FK_Maestro_Cal foreign key (ID_Maestro) REFERENCES Maestros(ID),
    CONSTRAINT FK_Materia_Cal FOREIGN KEY (Materia) REFERENCES Materias(ID)
);

CREATE TABLE Periodos(
	ID INT PRIMARY KEY auto_increment,
    Nombre CHAR(12) /*Sep-Dic 2022 || Es un combobox seleccionando el mes*/
)
