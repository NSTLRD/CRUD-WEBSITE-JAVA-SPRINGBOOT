# CRUD-WEBSITE-JAVA-SPRINGBOOT
saludos mi nombre es starling javier diaz aquino 
aplique a java developer sr. manuel sanchez,
infosyp.
Los primero que hice fue descargar las propiedades
para la base de datos

luego cree una entidad empleado para registrar los usuarios,
utilizando la anotaciones @Entity @table, y @ID Y @GENERATEvALUE
que nos Genera automaticamente el autoincremento de los usuarios

use la anotacion @notNull para que las tablas de la base de 
datos no esten vacias.

luego cree una messages.properties para alertar al usuario cuando algun
input(casilla) este vacio.

tambien agregre algunas librerias para exportar los usuarios
a pdf y excel, pues el mandato era que se guardara en el
local storage del navegador pero no pude hacerlo debido
a que honestamente no conozco mucho sobre javascript pero
si me lo permiten puedo mejorar esa skill. 

para la password implemente el PasswordGenerator de java
y para el hash(encriptacion) use websecurity del
framework spring boot.

pude generar la lista con los usuarios registrado
en la cual se puede agregar y modificar el usuario tambien
le agrege eliminar.
y implemente login por roles para que si un user entre
tenga permitido los roles que yo le asigne.
y el admin pueda tener todo el acceso.
 use bootstrap
4 para generar el front end.

la lista transational no la pude realizar porque no tengo
conocimientos sobre como hacerla pero si estoy dispuesto a
aprender. cree dos archivos javascript para obtener los
datos pero me daba un error 404 de obtencion de la api.
