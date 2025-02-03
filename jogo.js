function play(){
        tela.desenhar();
        cobra.desenhar();
        placar.desenhar();
        cobra.mover();
        comida.desenhar();
        if (cobra.vida > 0)
            requestAnimationFrame(play);
}
const comida = new Comida(300,300)
play();
document.addEventListener("keydown",(e) => {
    if (e.key == 8) cobra.direcao='u';
    if (e.key == 6) cobra.direcao='r';
    if (e.key == 2) cobra.direcao='d';
    if (e.key == 4) cobra.direcao='l';

})
