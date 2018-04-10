
var dia = prompt ("Ingrese un dia de la semana");
dia = dia.toUpperCase();
var habil = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES"];
var finde = ["SABADO", "DOMINGO"];

for (var i = 0; i < habil.length; i++) {
  if (dia === habil[i]) {
    console.log("El dia es habil");
    break;
  }
}

for (var i = 0; i < finde.length; i++) {

  if (dia === finde[i]) {
    console.log("El dia es fin de semana");
    break;
  }

}
