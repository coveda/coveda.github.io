

window.addEventListener('DOMContentLoaded', function() {


//VARIABLES ------------------------------------------------------
var header = document.getElementById('header');
var listaHeader= document.getElementById('list-header');
var hamburguesa= document.getElementById('hamburguesa-header');
var cerrarHamburguesa= document.getElementById('cerrar-hamburguesa-header');

var slider = document.getElementById('slider');
var sliderHijo = document.getElementById('sliderHijo');

//DETECTOR nombre de la página. Devuelve positivo si es el index---
//Así puedo restringir animaciones a páginas concretas- Header se hace visible desde el inicio si la pag no es index
let nombrePag = window.location.pathname.split('/').pop();
let marcadorPag = window.location.hash;

if (nombrePag!='index.html' && nombrePag != 'coveda.github.io') {
    header.style.transition = 'none';
    header.style.opacity = '100%';
}
else {
    header.style.pointerEvents = 'none';
}

if (parseInt(window.innerWidth)<=600) {
    header.style.transition = 'none';
    header.style.opacity = '100';
    header.style.pointerEvents = 'auto';
}

///HEADER que carga solo cuando se ha bajado----------------------
//Solo aplica en index.html

window.addEventListener('scroll', function() {


    if ((nombrePag == 'index.html' || nombrePag == 'coveda.github.io') && parseInt(window.innerWidth)>600) {

        if (window.scrollY > 100) {
            header.setAttribute('style', 'opacity:100%;')
        }
        else {
            header.setAttribute('style', 'opacity:0%;')
            header.setAttribute('style', 'pointer-events: none;')
        }   
    }
    else {
        header.setAttribute('style', 'opacity:100%;')
    }
})

//FORMULARIO

if (nombrePag=='contacto.html' || nombrePag.indexOf('contacto.html')==1) {

var botonSubmit = document.getElementById('botonSubmit');
var botonBorrar = document.getElementById('botonBorrar');
    
var formNombre = document.getElementById('nombre');
var formApellido = document.getElementById('apellido');
var formEmail = document.getElementById('email');

var formMensaje = document.getElementById('mensaje');









var BalertaNombre = false;
var BalertaApellido = false;
var BalertaEmail = false;
var BalertaMensaje = false;



botonSubmit.addEventListener('click', function() {
    


if (formNombre.value == '' || formNombre.value.indexOf('@')!=-1 || formNombre.value.indexOf('$')!=-1 || formNombre.value.indexOf('#')!=-1) {
    if (formNombre.value.indexOf('@')!=-1 || formNombre.value.indexOf('$')!=-1 || formNombre.value.indexOf('#')!=-1 && BalertaNombre==true) {
        document.getElementById('alertaNombre').innerHTML='*Por favor, elimine los caracteres especiales'
    }
    else if(BalertaNombre==true) {
        document.getElementById('alertaNombre').innerHTML='*Por favor, rellene el campo'
    }

    if (BalertaNombre==false) {
        if (formNombre.value.indexOf('@')!=-1 || formNombre.value.indexOf('$')!=-1 || formNombre.value.indexOf('#')!=-1) {
            formNombre.insertAdjacentHTML('afterend', '<p id="alertaNombre" style="color:red; font-size: 9pt; position:absolute;">*Por favor, elimine los caracteres especiales</p>');
        }
        else {
            formNombre.insertAdjacentHTML('afterend', '<p id="alertaNombre" style="color:red; font-size: 9pt; position:absolute;">*Por favor, rellene el campo</p>');
        }
    BalertaNombre = true;
    }
    } else if (BalertaNombre==true) {
        document.getElementById('alertaNombre').remove();
        BalertaNombre = false;
    }

if (formApellido.value == '' || formApellido.value.indexOf('@') != -1 || formApellido.value.indexOf('$') != -1 || formApellido.value.indexOf('#') != -1) {
    if (formApellido.value.indexOf('@') != -1 || formApellido.value.indexOf('$') != -1 || formApellido.value.indexOf('#') != -1 && BalertaNombre==true) {
        document.getElementById('alertaApellido').innerHTML = '*Por favor, elimine los caracteres especiales';
    } else if (BalertaApellido == true) {
        document.getElementById('alertaApellido').innerHTML = '*Por favor, rellene el campo';
    }

    if (BalertaApellido == false) {
        if (formApellido.value.indexOf('@') != -1 || formApellido.value.indexOf('$') != -1 || formApellido.value.indexOf('#') != -1) {
            formApellido.insertAdjacentHTML('afterend', '<p id="alertaApellido" style="color:red; font-size: 9pt; position:absolute;">*Por favor, elimine los caracteres especiales</p>');
        } else {
            formApellido.insertAdjacentHTML('afterend', '<p id="alertaApellido" style="color:red; font-size: 9pt; position:absolute;">*Por favor, rellene el campo</p>');
        }
        BalertaApellido = true;
    }
    } else if (BalertaApellido == true) {
        document.getElementById('alertaApellido').remove();
        BalertaApellido = false;
    }

    if (formEmail.value == '') {
        if (BalertaEmail==false) {
        formEmail.insertAdjacentHTML('afterend', '<p id="alertaEmail" style="color:red; font-size: 9pt; position:absolute;">*Por favor, rellene el campo</p>');
        BalertaEmail = true;
        }
    } else if (BalertaEmail==true) {
        document.getElementById('alertaEmail').remove();
        BalertaEmail = false;
    }

    if (formMensaje.value == '') {
        if (BalertaMensaje==false) {
        formMensaje.insertAdjacentHTML('afterend', '<p id="alertaMensaje" style="color:red; font-size: 9pt; position:absolute;">*Por favor, rellene el campo</p>');
        BalertaMensaje = true;
        }
    } else if (BalertaMensaje==true) {
        document.getElementById('alertaMensaje').remove();
        BalertaMensaje = false;
    }







        if (BalertaNombre == false && BalertaApellido == false && BalertaEmail == false && BalertaMensaje == false) {
        document.getElementById('formContacto').submit();


  
        let destinatario = "pablo.blanco.sep@gmail.com";
        let asunto = encodeURIComponent(formApellido.value);
        let cuerpo = encodeURIComponent(
          `Nombre: ${formNombre.value}\nCorreo: ${formEmail.value}\n\nMensaje:\n${formMensaje.value}`
        );

        window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;

        //Eliminar avisos

        if (BalertaNombre == true) {
            document.getElementById('alertaNombre').remove();
        }
        
        if (BalertaApellido == true) {
            document.getElementById('alertaApellido').remove();
        }
        
        if (BalertaEmail == true) {
            document.getElementById('alertaEmail').remove();
        }
        
        if (BalertaMensaje == true) {
            document.getElementById('alertaMensaje').remove();
        }
        




        BalertaNombre = false;
        BalertaApellido = false;
        BalertaEmail = false;
        BalertaMensaje = false;



    }

    
    
})

    botonBorrar.addEventListener('click', function() {

        document.getElementById('formContacto').reset();
        location.reload();

            if (BalertaNombre == true) {
                document.getElementById('alertaNombre').remove();
            }
            
            if (BalertaApellido == true) {
                document.getElementById('alertaApellido').remove();
            }
            
            if (BalertaEmail == true) {
                document.getElementById('alertaEmail').remove();
            }
            
            if (BalertaMensaje == true) {
                document.getElementById('alertaMensaje').remove();
            }
            



            BalertaNombre = false;
            BalertaApellido = false;
            BalertaEmail = false;
            BalertaMensaje = false;

    })

}

//HEADER  Preparar Hamburguesa-------------------------------------

hamburguesa.addEventListener('click', function() {
    
    listaHeader.setAttribute('class', 'list-header2');

})

cerrarHamburguesa.addEventListener('click', function() {

    listaHeader.setAttribute('class', 'list-header')
})



window.addEventListener('resize', function() {

    listaHeader.setAttribute('class', 'list-header');
})

if (nombrePag=='portfolio.html') {

let Pjava1 = document.getElementById('Pjava1');
let Pjava2 = document.getElementById('Pjava2');
let Pweb1 = document.getElementById('Pweb1');
let Pweb2 = document.getElementById('Pweb2');
let Pbases1 = document.getElementById('Pbases1');
let Pdiseno1 = document.getElementById('Pdiseno1');

let filtrosTodos = document.getElementById('filtrosTodos');
let filtrosJava = document.getElementById('filtrosJava');
let filtrosWeb = document.getElementById('filtrosWeb');
let filtrosBases = document.getElementById('filtrosBases');

let headerJava = document.getElementById('headerJava');
let headerWeb = document.getElementById('headerWeb');
let headerBases = document.getElementById('headerBases');
let headerDiseno = document.getElementById('headerDiseno');

/* JAVA */
headerJava.addEventListener('click', function() {
    window.location.href = 'portfolio.html#programacion';
    location.reload();
});

filtrosJava.addEventListener('click', function() {
    window.location.href = 'portfolio.html#programacion';
    location.reload();
});

if (marcadorPag == '#programacion') {
    Pweb1.style.display = 'none';
    Pweb2.style.display = 'none';
    Pbases1.style.display = 'none';
    Pdiseno1.style.display = 'none';

    filtrosJava.style.color = '#ff004c';
    filtrosJava.style.fontWeight = 'bold';
}

/* WEB */
headerWeb.addEventListener('click', function() {
    window.location.href = 'portfolio.html#web';
    location.reload();
});

filtrosWeb.addEventListener('click', function() {
    window.location.href = 'portfolio.html#web';
    location.reload();
});

if (marcadorPag == '#web') {
    Pjava1.style.display = 'none';
    Pjava2.style.display = 'none';
    Pbases1.style.display = 'none';
    Pdiseno1.style.display = 'none';

    filtrosWeb.style.color = '#00bd84';
    filtrosWeb.style.fontWeight = 'bold';
}

/* BASES DE DATOS */
headerBases.addEventListener('click', function() {
    window.location.href = 'portfolio.html#bases';
    location.reload();
});

filtrosBases.addEventListener('click', function() {
    window.location.href = 'portfolio.html#bases';
    location.reload();
});

if (marcadorPag == '#bases') {
    Pjava1.style.display = 'none';
    Pjava2.style.display = 'none';
    Pweb1.style.display = 'none';
    Pweb2.style.display = 'none';
    Pdiseno1.style.display = 'none';

    filtrosBases.style.color = '#1583dd';
    filtrosBases.style.fontWeight = 'bold';
}

/* DISEÑO */
headerDiseno.addEventListener('click', function() {
    window.location.href = 'portfolio.html#diseno';
    location.reload();
});

filtrosDiseno.addEventListener('click', function() {
    window.location.href = 'portfolio.html#diseno';
    location.reload();
});

if (marcadorPag == '#diseno') {
    Pjava1.style.display = 'none';
    Pjava2.style.display = 'none';
    Pweb1.style.display = 'none';
    Pweb2.style.display = 'none';
    Pbases1.style.display = 'none';

    filtrosDiseno.style.color = '#7100bd';
    filtrosDiseno.style.fontWeight = 'bold';
}


    /*TODO*/
    filtrosTodos.addEventListener('click', function() {
        window.location.href = 'portfolio.html'
        location.reload()
    })
    
     if(marcadorPag=='') {

           filtrosTodos.style.color= 'black';
           filtrosTodos.style.fontWeight= 'bold';
     }
}

if ((nombrePag === 'index.html' || nombrePag === 'coveda.github.io')) {

    //COOKIES
/*
var botonCookies1=document.getElementById('botonCookies1');
var botonCookies2=document.getElementById('botonCookies2');
var botonCookiesX=document.getElementById('botonCookiesX');

var cookies=document.getElementById('cookies');

    botonCookies1.addEventListener('click', function() {
        cookies.setAttribute('style','display: none');
    })

    botonCookies2.addEventListener('click', function() {
        cookies.setAttribute('style','display: none');
    })

    botonCookiesX.addEventListener('click', function() {
        cookies.setAttribute('style','display: none');
    })

    if(marcadorPag!='#cookiesPasadas') {
        cookies.setAttribute('style','display: none');
    }
*/

    ///SLIDER --------------------------------------------------------

    //SLIDER BOTON IZQUIERDO

var contadorSlider=0;

document.getElementById('sliderizq').addEventListener('click', function() {

    //Variable que toma el valor de la anchura del reel entero del slider. Asi es personalizable desde css.
    //En caso de añadir o quitar elementos solo habria que cambiar la propiedad width del mismo css.
    var sliderLongitud = (parseInt(window.getComputedStyle(slider).getPropertyValue('width')))/2;
    var sliderHijoAncho = (parseInt(window.getComputedStyle(sliderHijo).getPropertyValue('width'))+20)

    //Variable que toma el valor de la anchura de cada hijo del slider.

    //Si el slider llega al limite, 
    if (contadorSlider-sliderHijoAncho < -sliderLongitud) {
    contadorSlider=0;
    }
    else if(contadorSlider <= 0) {
    contadorSlider-=sliderHijoAncho;
    }
    slider.setAttribute('style','left:'+contadorSlider+'px;');

})

//SLIDER BOTON DERECHO

document.getElementById('sliderdch').addEventListener('click', function() {


    //Variable que toma el valor de la anchura del reel entero del slider. Asi es personalizable desde css.
    //En caso de añadir o quitar elementos solo habria que cambiar la propiedad width del mismo css.
    var sliderLongitud = (parseInt(window.getComputedStyle(slider).getPropertyValue('width')))/2;
    var sliderHijoAncho = (parseInt(window.getComputedStyle(sliderHijo).getPropertyValue('width'))+20)

    //Variable que toma el valor de la anchura de cada hijo del slider.

    //Si el slider llega al limite, 
    if (contadorSlider >= 0) {
    contadorSlider=-sliderLongitud;
    }
    else if(contadorSlider <= 0) {
    contadorSlider+=290;
    }
    slider.setAttribute('style','left:'+contadorSlider+'px;');

})

}

//SLIDER FILIPINAS PROYECTO

if (nombrePag=='proyecto5.html') {

    let contadorSlider2=0;

    document.getElementById('sliderizq').addEventListener('click', function() {

        contadorSlider2++

        if(sliderFilipinas) {
            clearInterval(cambiarImagenIntervalo)
        }

        if (contadorSlider2===0) {
            document.getElementById('sliderFilipinas').src = "img/proyectos/filipinas_mockup/MOCKUP - ESTUCHE.jpg";
        }
        else if (contadorSlider2===1) {
            document.getElementById('sliderFilipinas').src = "img/proyectos/filipinas_mockup/MOCKUP - INTERIOR (1).jpg";
        }
        else if (contadorSlider2===2) {
            document.getElementById('sliderFilipinas').src = "img/proyectos/filipinas_mockup/MOCKUP - INTERIOR (2).jpg";
        }
        else if (contadorSlider2===3) {
            document.getElementById('sliderFilipinas').src = "img/proyectos/filipinas_mockup/MOCKUP - INTERIOR (3).jpg";
        }
        else if (contadorSlider2=>4) {
            document.getElementById('sliderFilipinas').src = "img/proyectos/filipinas_mockup/MOCKUP - INTERIOR (4).jpg";
            contadorSlider2=-1;
        }

    })

    document.getElementById('sliderdch').addEventListener('click', function() {

        contadorSlider2--
        
        if(sliderFilipinas) {
            clearInterval(cambiarImagenIntervalo)
        }

        if (contadorSlider2<0) {
            contadorSlider2=4;
        }

        if (contadorSlider2<=0) {
            document.getElementById('sliderFilipinas').src = "img/proyectos/filipinas_mockup/MOCKUP - ESTUCHE.jpg";
        }
        else if (contadorSlider2===1) {
            document.getElementById('sliderFilipinas').src = "img/proyectos/filipinas_mockup/MOCKUP - INTERIOR (1).jpg";
        }
        else if (contadorSlider2===2) {
            document.getElementById('sliderFilipinas').src = "img/proyectos/filipinas_mockup/MOCKUP - INTERIOR (2).jpg";
        }
        else if (contadorSlider2===3) {
            document.getElementById('sliderFilipinas').src = "img/proyectos/filipinas_mockup/MOCKUP - INTERIOR (3).jpg";
        }
        else if (contadorSlider2===4) {
            document.getElementById('sliderFilipinas').src = "img/proyectos/filipinas_mockup/MOCKUP - INTERIOR (4).jpg";
        }

    })

    let sliderFilipinas=false;

    window.addEventListener('load', function() {

    if(parseInt(window.innerWidth)<=2000) {

    function cambiarImagen() {
        if(sliderFilipinas) {

        contadorSlider2++

        if (contadorSlider2===0) {
            document.getElementById('sliderFilipinas').src = "img/proyectos/filipinas_mockup/MOCKUP - ESTUCHE.jpg";
        }
        else if (contadorSlider2===1) {
            document.getElementById('sliderFilipinas').src = "img/proyectos/filipinas_mockup/MOCKUP - INTERIOR (1).jpg";
        }
        else if (contadorSlider2===2) {
            document.getElementById('sliderFilipinas').src = "img/proyectos/filipinas_mockup/MOCKUP - INTERIOR (2).jpg";
        }
        else if (contadorSlider2===3) {
            document.getElementById('sliderFilipinas').src = "img/proyectos/filipinas_mockup/MOCKUP - INTERIOR (3).jpg";
        }
        else if (contadorSlider2=>4) {
            document.getElementById('sliderFilipinas').src = "img/proyectos/filipinas_mockup/MOCKUP - INTERIOR (4).jpg";
            contadorSlider2=-1;
        }

        }
    }

    if (!sliderFilipinas) {
    cambiarImagenIntervalo = setInterval(cambiarImagen, 3000);
    sliderFilipinas=true;
    }

    }
    else {
    sliderFilipinas=false;
    }

    })

        //PORCENTAJE FILIPINAS PROYECTO

        let Porcentaje=document.getElementById('Porcentaje');
        let imgPorcentaje=document.getElementById('imgPorcentaje');
        let btnColorear=document.getElementById('btnColorear');

        let numPorcentaje=1.01;

        let isDragging = false;

        function actPorcentaje() {
            if(numPorcentaje>1 && numPorcentaje<99) {
            Porcentaje.setAttribute('style', `width: ${numPorcentaje}%;`);
            imgPorcentaje.setAttribute('style', `clip-path: polygon(0% 0%, ${numPorcentaje}% 0%, ${numPorcentaje}% 100%, 0% 100%);`);
            }
        }

        actPorcentaje()

        /*Grab versión mouse*/

        Porcentaje.addEventListener("mousedown", (event) => {
            isDragging = true;
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", () => {
                isDragging = false;
                document.removeEventListener("mousemove", onMouseMove);
            });
        });
        
        function onMouseMove(event) {
            if (!isDragging) return;
            const rect = Porcentaje.parentElement.getBoundingClientRect();
            let newWidth = ((event.clientX - rect.left) / rect.width) * 100;
            numPorcentaje = Math.max(0, Math.min(100, newWidth));

            actPorcentaje();
        }
    
        /*Grab versión móvil*/

        Porcentaje.addEventListener("mousedown", startDrag);
        Porcentaje.addEventListener("touchstart", startDrag, { passive: true });

        function startDrag(event) {
            isDragging = true;
            document.addEventListener("mousemove", onMove);
            document.addEventListener("mouseup", stopDrag);
            document.addEventListener("touchmove", onMove, { passive: true });
            document.addEventListener("touchend", stopDrag);
        }

        function onMove(event) {
            if (!isDragging) return;
            
            const clientX = event.type.startsWith("touch") ? event.touches[0].clientX : event.clientX;
            const rect = Porcentaje.parentElement.getBoundingClientRect();
            let newWidth = ((clientX - rect.left) / rect.width) * 100;
            
            numPorcentaje = Math.max(0, Math.min(100, newWidth));
            actPorcentaje();

            
        }

        function stopDrag() {
            isDragging = false;
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseup", stopDrag);
            document.removeEventListener("touchmove", onMove);
            document.removeEventListener("touchend", stopDrag);
        }


        //Observer: Ejecutar animación al aparecer en pantalla

        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    for (let i = numPorcentaje; i < 99; i++) {
                        setTimeout(() => {
                            numPorcentaje = i;
                            actPorcentaje();
                        }, i * 25);
                        intervaloFlag=false;
                    }
        
                    // Desconectar el observer para que no se vuelva a activar
                    observer.disconnect();
                    
                    intervaloFlag=true;
                }
            });
        });
        
        observer.observe(Porcentaje);

        let btnColorearFlag=false;
        let btnOriginalFlag=true;

        btnColorear.addEventListener("click", function(){
            if(!btnColorearFlag) {
            imgPorcentaje.src = "img/proyectos/filipinas_mockup/album_de_tipos_filipinos-56 - COL.png";

            btnColorear.innerHTML="Blanco y Negro";
            
            btnColorearFlag=true;
            }
            else {
            imgPorcentaje.src = "img/proyectos/filipinas_mockup/album_de_tipos_filipinos-56.png";

            btnColorear.innerHTML="Colorear";
            
            btnColorearFlag=false;  
            }
        })

        let intervaloFlag=true;

    btnOriginal.addEventListener("click", function() {
        if (intervaloFlag) {
        if (btnOriginalFlag) {
            btnOriginal.innerHTML = "Mostrar Restaurado";
            btnOriginalFlag = false;

            let intervalo = setInterval(() => {
                if (numPorcentaje > 1) {
                    numPorcentaje--;
                    actPorcentaje();

                    intervaloFlag=false;
                } else {
                    clearInterval(intervalo);
                    intervaloFlag=true;
                }
            }, 25);
        
    } else {
        btnOriginal.innerHTML = "Mostrar Original";
        btnOriginalFlag = true;

        let intervalo = setInterval(() => {
            if (numPorcentaje < 99) {
                numPorcentaje++;
                actPorcentaje();

                intervaloFlag=false;
            } else {
                clearInterval(intervalo);
                intervaloFlag=true;
            }
        }, 25);
    }
    }
    });

    }

})
