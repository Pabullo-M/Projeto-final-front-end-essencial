function proximaImg(){
    let cont = 1;
    const maxImgs = 3;

    return function increment() {
        cont++;
        if (cont > maxImgs) {
            cont = 1;
        }
        document.getElementById('radio' + cont).checked = true;
    };
}

// Exportando a função para usar em outro lugar
function initializeSlider() {
    document.getElementById('radio1').checked = true;
    const nextImage = proximaImg(); // Criando uma closure para manter o estado de 'cont'
    setInterval(nextImage, 6000);
}

export { initializeSlider }