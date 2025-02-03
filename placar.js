const placar = {
    largura:800,
    altura:60,
    corFundo:"black",
    corTexto:"white",
    nomeJogo:"cobrinha",
    recorde: 0,
    pontuacao: 0,
    desenhar(){
        cCtx.fillStyle=this.corFundo;
        cCtx.fillRect(0,0,this.largura,this.altura);
        cCtx.fillStyle=this.corTexto;
        cCtx.fount = '20px Fantasy';
        cCtx.textAlign = 'center'
        cCtx.textBaseline = 'middle'
        cCtx.fillText(this.nomeJogo,400,35)
        cCtx.font='14px Fantasy';
        cCtx.textAlign='right'
        cCtx.textBaseline='bottom'
        cCtx.fillText("recorde: "+this.recorde,780,25)
        cCtx.textBaseline= 'top'
        cCtx.fillText("vida ",780,35)
        cCtx.textAlign = 'left'
        cCtx.textBaseline = 'bottom'
        cCtx.fillText("pontuação "+this.pontuacao,15,25)
    }
}
placar.desenhar();
