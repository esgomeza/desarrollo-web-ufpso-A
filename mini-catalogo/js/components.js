async function cargarComponente(id, archivo){

    const respuesta = await fetch(archivo)

    const html = await respuesta.text()

    document.getElementById(id).innerHTML = html
}
cargarComponente("header","components/header.html")
cargarComponente("footer","components/footer.html")