const header__boton_desplegable = document.querySelector( ".header__boton_desplegable" )
const header__navegador = document.querySelector( ".header__navegador" )

header__boton_desplegable.addEventListener( "click", () => {
    header__navegador.classList.toggle("header__navegador--visible");
})