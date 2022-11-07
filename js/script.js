let usuario = "jorgeisac";
let contraseña = "sony123";

function login() {
    let ingresar = false;

    for (let i=2; i>=0; i--) {
        let usuario1 = prompt("Ingresa tu usuario");
        if (usuario1 == usuario){
        let contraseña1 = prompt("introducir contraseña. Tenes " + (i + 1) + " oportunidades");
        if(contraseña1==contraseña){
            alert("ingreso exitoso. bienvenido");
            ingresar= true;
            break;
        }else{
            alert("contraseña incorrecta. Te quedan " + i + " intentos");
        }

        }
    }
    return ingresar;
}

if(login()){
let categoria = prompt("Elegi una categoria: \n1- accion \n2- drama \n3- terror \n4- suspenso \n5- comedias \n6- anime \n7- xxx \n8-Ver  catalogo \n9 - Salir")

while(categoria != "xxx"){

switch (categoria) {
    case "1":
        alert ("Bienvenido a la seccion de peliculas de accion.");
        let accion= prompt("¿que pelicula desea ver?");
        alert("Disfrute de " + accion +" ");
        categoria = prompt("Elegi una categoria: \n1- accion \n2- drama \n3- terror \n4- suspenso \n5- comedias \n6- anime \n7- xxx \n8-Ver  catalogo  \n9 - Salir")
        break;

    case "2":
        alert ("Bienvenido a la seccion de peliculas de drama.");
        let drama= prompt("que pelicula desea ver?");
        alert("Disfrute de " + drama +" ");
        break;

    case "3":
        alert ("Bienvenido a la seccion de peliculas de terror.");
        let terror= prompt("que pelicula desea ver?");
        alert("Disfrute de " + terror +" ");
        break;

    case "4":
        alert ("Bienvenido a la seccion de peliculas de suspenso.");
        let suspenso= prompt("que pelicula desea ver?");
        alert("Disfrute de " + suspenso +" ");
        break;

    case "5":
        alert ("Bienvenido a la seccion de peliculas de comedias.");
        let comedias= prompt("que pelicula desea ver?");
        alert("Disfrute de " + comedias +" ");
        break;

    case "6":
        alert ("Bienvenido a la seccion de peliculas de anime.");
        let anime= prompt("que pelicula desea ver?");
        alert("Disfrute de " + anime +" ");
        break;

        case "7":
            let categoriax=  prompt ("¿cuantos años tenes?")
    if(categoriax>=18){
        let pelix = prompt("Bienvenido a la categoria de peliculas para adultos.¿que pelicula desea ver?");
        alert("Disfrute de "+ pelix +" ");
        continuar = false;
        break;
    }else{
        alert("Lo lamento. Esta categoria es solamente para mayores de edad");
        
    }
        break;

        case "8":
            alert ("Bienvenido a nuestro catalogo.");
            class Pelicula {
                constructor(titulo,director,anio,categoria,puntuacion,id){
                    this.titulo = titulo;
                    this.director = director;
                    this.anio = parseInt(anio);
                    this.categoria = categoria;
                    this.puntuacion = parseInt(puntuacion);
                    this.id = id;
                }
                asignarId(array){
                    this.id = array.length;
                }
            }
            const Peliculas = [
                new Pelicula ("buscando a nemo", "jorge lopez", 2003, "infantil", 9,1),
                new Pelicula ("el secreto de sus ojos", "jose campanella", 2009, "drama", 10,2),
                new Pelicula ("avengers", "Joe Russo", 2018, "accion", 8,3),
                new Pelicula ("pequeña gran vida", "alexander paine", 2017, "ciencia ficcion", 3,4),
                new Pelicula ("como entrenar a tu dragon", "marcos poggio", 2003, "infantil", 7,5),
                new Pelicula ("fast and furious 6", "erick dakc", 2003, "accion", 6,6),
                new Pelicula ("hachiko", "David lowe", 2000, "drama", 9,7),
            
            ]
            let continuar = true;

            while (continuar) {
            let ingreso = prompt ('Ingresa los datos de la pelicula: titulo, director, año, categoria, puntuacion, separados por una barra diagonal (/). Ingresa X para salir');

                if(ingreso == "X"){
                    continuar = false;
                    break;
                }

                let datos =ingreso.split('/');
                console.log(datos);

                const pelicula = new Pelicula(datos[0], datos[1], datos[2], datos[3], datos[4]);

                Peliculas.push(Pelicula);
                Pelicula.asignarId(Peliculas);
                console.log(Peliculas);
            }
            let opciones = prompt ('Elegi la opcion deseada:\n1 - Titulo (A a Z) \n2 - Titulo (Z a A) \n3 - Mayor puntuacion a menor \n4 - Año de emision (del mas nuevo al mas viejo)');

            function ordenar (opciones, array){
                let arrayOpciones = array.slice(0);
                switch (opciones) {
                    case "1":
                        let TituloAscendente = arrayOpciones.sort((a,b) => a.titulo.localeCompare(b.titulo));
                        return TituloAscendente;
                    
                    case "2":
                        return arrayOpciones.sort((a,b) => b.titulo.localeCompare(b.titulo));
    
                    case "3":
                        return arrayOpciones.sort ((a,b) => b.puntuacion - a.puntuacion);
                        
                        case "4":
                        return arrayOpciones.sort((a,b) => b.anio - a.anio);
                
                    default:
                        alert('upps, lo lamento pero no puedes buscar esa opcion aqui');
                        break;
                }

            }
            function crearStringRresultado(array){
                let info = "";

                array.forEach(elemento =>{
                    info+= 'Titulo: '+elemento.titulo +'\nDirector: '+elemento.director +'\nAño de emision: '+elemento.anio + '\nPuntuacion: ' + elemento.puntuacion + ' puntos.\n\n'
                });
                return info;
            }
            alert(crearStringResultado(ordenar(opciones, Peliculas)));
    case "9":
        alert("Gracias por elegir nuestro sitio. Vuelva pronto");
        break;
    default:
        break;
        }
    }
}else{
    alert("bloquearemos su ingreso con este usuario por seguridad");
}

alert("Gracias por elegir nuestro sitio. Vuelva pronto");
