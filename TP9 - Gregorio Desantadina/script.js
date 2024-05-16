class CAutores {
    constructor(Nombre,Apellido,Nacionalidad,MejorObra,Año,Edad){
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Nacionalidad = Nacionalidad;
        this.MejorObra = MejorObra;
        this.Año = Año;
        this.Edad = Edad;
    }
}
const Lista = [
    new CAutores("Gabriel","García Márquez","Colombiano","Cien Años de soledad",1967,40),
    new CAutores("Julio","Cortázar","Argentino","Rayuela",1963,48),
    new CAutores("Isabel","Allende","Chilena","La casa de los espíritus",1982,40),
    new CAutores("Jorge Luis","Borges","Argentino","Ficciones",1944,45),
    new CAutores("Clarice","Lispector","Brasileña","La hora de la estrella",1966,56),
    new CAutores("Juan","Rulfo","Mexicano","Pedro Páramo",1955,38),
    new CAutores("Carlos","Fuentes","Mexicano","La región más transparente",1958,29),
    new CAutores("Eduardo","Galeano","Uruguayo","Las venas abiertas de América Latina",1971,31)
];
function TodosLosAutoresArgentinos(){
    document.write("<table border = 1>");
    document.write("<th> todos los autores de que sean de Nacionalidad Argentina </th>");
    for(let i = 0 ; i < Lista.length ; i++){
        if(Lista[i].Nacionalidad == "Argentino"){
            document.write("<tr>" + "<td>" + Lista[i].Nombre + " " + Lista[i].Apellido+ "</td>" + "</tr>");
        }
    }
}
function ListaDeAños(){
    document.write("<table border = 1>");
    document.write("<th colspan = 4> todos los autores que publicaron entre 1960 a 1980. </th>");
    for(let i = 0 ; i < Lista.length ; i++){
        if(Lista[i].Año > 1959 && Lista[i].Año < 1981){
            document.write("<tr>");
            document.write("<td>" + Lista[i].Nombre + " " + Lista[i].Apellido + "</td>");
            document.write("<td>" + Lista[i].MejorObra + "</td>");
            document.write("<td>" + Lista[i].Año + "</td>");
            document.write("</tr>");
        }
    }
}
function TodosLosAutores(){
    document.write("<table border = 1>");
    document.write("<th colspan = 1> Todos los autores </th>");
    for(let i = 0 ; i < Lista.length ; i++){
        document.write("<tr>" + "<td>" + Lista[i].Nombre + " " + Lista[i].Apellido  + "</td>"+ "</tr>");
    }
}
function PromedioDeEdad(){
    let promedioDeEdad = 0;
    for(let i = 0 ; i < Lista.length ; i++){
        promedioDeEdad += Lista[i].Edad;
    }
    document.write("<table border = 1>");
    document.write("<th colspan = 4> promediod de edad </th>");
    document.write("<td>" + promedioDeEdad/Lista.length + "</td>");
}
TodosLosAutoresArgentinos();
ListaDeAños();
PromedioDeEdad();
TodosLosAutores();
