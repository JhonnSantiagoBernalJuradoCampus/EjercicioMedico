# Diagrama MER




# Consultas SQL



1. Obtener todos los pacientes alfabéticamente|
2. Obtener todas las citas alfabéticamente
3. Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**):
4. Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**):
5. Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)
6. Obtener las consultorías para un paciente específico (por ejemplo, paciente **con usu_id 1**)
7. Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)
8. Obtener los médicos y sus consultorios
9. Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)
10. Obtener los consultorio donde se aplicó las citas de un paciente
11. Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad
12. Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente.
13. Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.

# DB

Primeramente se crea la base de datos: en el archivo db_farmacia.sql, despues inserto los datos atra ves de el archivo datos.sql

CONFIG

para la configuracion basica de el proyecto inicio con el comando:

- npm init -y
- npm i -E -D express
- npm i -E -D mysql2
- npm i -E -D dotenv
- npm i -E -D class-transformer
- npm i -E -D reflect-metadata
- npm i -E -D typescript
- npm i -E -D nodemon
- npm i -E -D class-validator

creo el archivo .env con su config:

y creo el .env.example,

creo el archivo .gitignore e ignoro el /node_modules, package-lock,json, .env

## Servidor

Cree el servidor en el archivo app.js donde hago el listen donde por consola muestro el servidor:
http://127.23.12.50:5010

# 1 Obtener todos los pacientes alfabeticamente

Se crea la ruta de pacientes y se crea el get con su query
http://127.23.12.50:5010/pacientes

# 2 Obtener todos las citas por la fecha

Se crea la ruta citas en el router y se crea el get con su query
http://127.23.12.50:5010/citas

## 3 Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**)

Se crea la ruta medicos en el router y se reciben los parametros, recibe el nombre de la especialidad y retorna los medicos de esa especialidad en
http://127.23.12.50:5010/medicos/:especialidad
# 4. Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**):
ids disponibles: 
- 74
- 123
- 321
Se crea otro get en el cual se recibe el parametro id_proxima con el cual se realiza la query para obtener la proxima cita
http://127.23.12.50:5010/citas/proxima/:id_proxima

## 5. Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)
ids disponibles:
- 100
- 200
- 300
- 400
- 500
Se crea otro get en el cual se recibe el parametro id_medico con el cual se realiza la query para obtener los usuarios con una cita de un medico en especifico
http://127.23.12.50:5010/pacientes/grupo/:id_medico

# 6. Obtener las consultorías para un paciente específico (por ejemplo, paciente **con usu_id 1**)
ids disponibles:
- 74
- 123
- 321
Se creo otro get en paciente.js y modifique el endpoint de el anterior punto para no tener inconvenientes al momento de recibir parametros, este endpoint permite recibir un paciente especifico dependiendo de su id
http://127.23.12.50:5010/pacientes/:id_paciente

## 7. Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)
fechas disponibles:
- 2023-04-05
- 2023-07-07
- 2023-08-08
- 2023-09-10
Se creo otro get en citas.js donde se recibe el paramtro fecha para obtener las citas de una fecha especifica
http://127.23.12.50:5010/citas/:fecha

# 8. Obtener los médicos y sus consultorios
Se creo el get de medicos el cual muestra los medicos y su consultorio
http://127.23.12.50:5010/medicos