<html>
<head>
<script src="<?= base_url();?>assets/js/prototype.js" type="text/javascript"></script>

<script>
var base_url = '<?= base_url();?>';
    //Funcion que es llamada en al hacer click en el elemento definido como boton
    //Desencadena la llamada ajax que recibe los datos formateados como JSON
function HicieronClick()
{
var opciones = {
//funcion a llamar cuando reciba la respuesta
onSuccess: function(t){
datos = eval(t.responseText);
procesar(datos);
},
onFailure: function(t){
alert("Error al obtener Datos");
}
}
new Ajax.Request(base_url+'index.php/nombres/ajax_nombres',opciones);
}
 
//Funcion que procesa lso datos JSON y los muestra formateados como una tabla
function procesar(datos)
{
 
//guardo el div donde voy a escribir los datos en una variable
var contenedor = document.getElementById("lista");
 
texto = "<table border=1>";
 
//Itero sobre los datos que me pasan como parametro
for (var i=0; i < datos.length; i++)
{
dato = datos[i];
texto += "<tr> <td>"+  dato.id_empleado + " " + dato.nombre + " "+ dato.apellido + " "+ dato.mes+"</td></tr>";
}
 
      texto += "</table>";
 
//Escribo el texto que forme en el div que corresponde
contenedor.innerHTML = texto;
 
}
</script>
</head>
<body>
 
<h1>Prueba Ajax! y JSON</h1>
<div id="Boton" onClick="HicieronClick()">Haz Click sobre este texto para llenar la lista</div>
 
<div id="lista">
En este div se mostraran los datos que se reciban por Ajax.
</div>
</body>
</html>