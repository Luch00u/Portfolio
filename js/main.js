//div de bienvenida
const welcome = document.querySelector(".welcome");
//-------------REGISTRO DE EVENTOS -------------------
createStarlights()

















//---------------------- FUNCIONES ---------------------------
//Crea un total de estrellas para el background
function createStarlights() {
    for (let i = 0; i < 500; i++) {
        // let select = Math.round(colores.length * Math.random())
        let starlights = document.createElement('span')
        welcome.appendChild(starlights)
        starlights.className = "starlight"
        starlights.style.top = innerHeight * Math.random() + 'px';
        starlights.style.left = innerWidth * Math.random() + 'px';
        if (i % 4 == 0) {
            starlights.style.opacity = 50 + "%"
            setInterval(() => {
                starlights.style.top = innerHeight * Math.random() + 'px';
                starlights.style.left = innerWidth * Math.random() + 'px';
                starlights.style.animation="efectoLuz 5s infinite"
            }, 6000);
        }
        // CADA 10 ESTRELLAS SE CREA UNA MAS GRANDE
        if (i % 10 == 0) {
            starlights.style.height = 6 + "px"
            starlights.style.width = 6 + "px"
        }

    }


}








