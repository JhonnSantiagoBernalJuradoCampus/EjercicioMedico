# README.md

Este archivo README proporciona una visión general organizada y estéticamente agradable de los endpoints del proyecto. Los endpoints están agrupados según su funcionalidad y uso.

## Configuración del proyecto

Para configurar el proyecto, sigue estos pasos:

1. Ejecuta `npm init -y` para inicializar el proyecto.
2. Instala las dependencias requeridas:
   - `npm i -E -D express`
   - `npm i -E -D mysql2`
   - `npm i -E -D dotenv`
   - `npm i -E -D class-transformer`
   - `npm i -E -D reflect-metadata`
   - `npm i -E -D typescript`
   - `npm i -E -D nodemon`
   - `npm i -E -D class-validator`
3. Crea el archivo `.env` con su configuración.
4. Crea el archivo `.env.example`.
5. Crea el archivo `.gitignore` e ignora los siguientes archivos y directorios:
   - `/node_modules`
   - `package-lock.json`
   - `.env`

# Consultas SQL

1. Obtener todos los pacientes alfabéticamente:
   - Endpoint: `/pacientes`
   - Método: GET
   - Descripción: Obtiene todos los pacientes ordenados alfabéticamente.

2. Obtener todas las citas alfabéticamente:
   - Endpoint: `/citas`
   - Método: GET
   - Descripción: Obtiene todas las citas ordenadas alfabéticamente.

3. Obtener todos los médicos de una especialidad específica (por ejemplo, 'Cardiología'):
   - Endpoint: `/medicos/:especialidad`
   - Método: GET
   - Descripción: Obtiene todos los médicos de una especialidad específica.

4. Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con usu_id 1):
   - Endpoint: `/citas/proxima/:id_proxima`
   - Método: GET
   - Descripción: Obtiene la próxima cita para un paciente específico.

5. Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con med_nroMatriculaProsional 1):
   - Endpoint: `/pacientes/grupo/:id_medico`
   - Método: GET
   - Descripción: Obtiene todos los pacientes que tienen citas con un médico específico.

6. Obtener las consultorías para un paciente específico (por ejemplo, paciente con usu_id 1):
   - Endpoint: `/pacientes/:id_paciente`
   - Método: GET
   - Descripción: Obtiene las consultorías para un paciente específico.

7. Encontrar todas las citas para un día específico (por ejemplo, '2023-07-12'):
   - Endpoint: `/citas/:fecha`
   - Método: GET
   - Descripción: Obtiene todas las citas para una fecha específica.

8. Obtener los médicos y sus consultorios:
   - Endpoint: `/medicos`
   - Método: GET
   - Descripción: Obtiene todos los médicos y sus consultorios.

9. Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con med_nroMatriculaProsional 1 en '2023-07-12'):
   - Endpoint: `/citas/medico/:fecha`
   - Método: GET
   - Descripción: Cuenta el número de citas que tiene un médico en un día específico.

10. Obtener los consultorios donde se aplicaron las citas de un paciente:
    - Endpoint: `/consultorio/:id_paciente`
    - Método: GET
    - Descripción: Obtiene los consultorios donde se aplicaron las citas de un paciente.

11. Obtener todas las citas realizadas por los pacientes de un género si su estado de la cita fue atendida:
    - Endpoint: `/citas/genero/:genero`
    - Método: GET
    - Descripción: Obtiene todas las citas realizadas por pacientes de un género específico si el estado de la cita fue "atendida".

12. Insertar un paciente en la tabla usuario, pero si es menor de edad, solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente.
   - Endpoint: `/pacientes`
   - Método: POST
   - Descripción: Inserta un paciente en la tabla de usuarios. Si el paciente es menor de edad, se requiere la información del acudiente y se verifica si el acudiente ya está registrado.

   Ejemplo de objeto JSON de solicitud:
   ```json
   {
     "cc": 312431,
     "primer_nombre": "jhon",
     "segundo_nombre": "santiago",
     "primer_apellido": "bernal",
     "segundo_apellido": "jurado",
     "telefono": "1231212",
     "direccion": "calle#14-16",
     "email": "santiago@gmail.com",
     "tipo_documento": 1,
     "genero": 1,
     "acudiente": 1
   }

13. Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico:
    - Endpoint: /citas/mes/:mes
    - Método: GET
    - Descripción: Obtiene todas las citas rechazadas en un mes específico. Muestra la fecha de la cita, el nombre del usuario y el médico.