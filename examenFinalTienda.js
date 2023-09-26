let pasillo1 =[
    {nombre: "Monitor",costo: 250},
    {nombre: "Tv",costo: 100},
    {nombre: "Smart Tv",costo: 320},
    {nombre: "Celular",costo: 150},
    {nombre: "Laptop",costo: 1000},
    {nombre: "teclado",costo: 20},
    {nombre: "Audifonos",costo: 5},
]

let pasillo2 =[
    {nombre: "Mesa",costo: 3000},
    {nombre: "Silla",costo: 2300},
    {nombre: "Muebles",costo: 320},
    {nombre: "Sillon",costo: 20000},
    {nombre: "Espejo",costo: 10000},
    {nombre: "Estante",costo: 700},
]

alert ("Bienvenidos a Star Store");
alert("Actualmente contamos con solo dos pasillos");
let pasillo = prompt ("1: pasillo de electronica, 2: pasillo de muebles domesticos, 3: Ofertas del dia en Pasillo 1 ");

if (pasillo == 1) {
    let articulosFiltrados = pasillo1.filter(function(articulo){
        document.write (articulo.nombre,"<br>","Cuesta: $", articulo.costo ,"<br><br>")
    }); 
}else if (pasillo == 2) {
    let articulosFiltrados = pasillo2.filter(function(articulo){
        document.write (articulo.nombre,"<br>","Cuesta: $", articulo.costo ,"<br><br>")
    });
}else if (pasillo == 3) {
    let articulosBaratos = pasillo1.some(function (articulo) {
        if (articulo.costo <= 230) {
            document.write(articulo.nombre,"<br>","Cuesta: $ ", articulo.costo ,"<br><br>");
        }

    });

}
