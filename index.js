var estudiantes = 
[
{
    apellidop: "Estrada",
    apellidom: "Sandoval",
    nombre: "Elda Stephany",
    edad: 26,
    fechanacimiento: 
    {
        año: 1995,
        mes: "diciembre",
        dia: 14
    },
    carrera: "IRYC"
},
{
    apellidop: "0000",
    apellidom: "000000",
    nombre: "0000000",
    edad: 26,
    fechanacimiento: 
    {
        año: 1998,
        mes: "Febrero",
        dia: 20
    },
    carrera: "ABC"
},
]

var table = document.getElementsByTagName("table")[0];
for (var i = 0; i < estudiantes.length; i++)
{
var templ = document.getElementById('tbodyestudiantes').content.cloneNode(true);
var celnumero = templ.querySelector("span[name='tbodynumero']");
var celnombre = templ.querySelector("span[name='tbodynombre']");
var celedad = templ.querySelector("span[name='tbodyedad']");
var celcarrera = templ.querySelector("span[name='tbodycarrera']");

celnumero.innerText = i + 1
celnombre.innerText = estudiantes[i].apellidop + " " + estudiantes[i].apellidom + " " + estudiantes[i].nombre;
celedad.innerText = estudiantes[i].edad;
celcarrera.innerText = estudiantes[i].carrera
table.append(templ);
}
