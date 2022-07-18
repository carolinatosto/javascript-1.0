function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
     
    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    if (hora >=0 && hora <= 12 ) {
        img.src = 'manha.png'
        document.body.style.background = "rgb(235, 235, 94)"
    } else if (hora >= 12 && hora <= 18 ) {
        img.src = 'tardee.png'
        document.body.style.background = 'rgb(231, 125, 38)'
    } else {
        img.src = 'noite.png'
        document.body.style.background = 'rgba(88, 19, 88, 0.685)'
    }
}