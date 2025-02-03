const cobra = {
    x:400,
    y:200,
    tamanho:10,
    largura:10,
    cor:"red",
    comprimento:1,
    x:400,
    y:260,
    tamanho:10,
    largura:10,
    direcao:'r',
    vida:3,
    desenhar() {
        cCtx.fillStyle=this.cor;
        cCtx.fillRect(this.x,this.y,this.tamanho,this.largura);
    },

    mover(){
        if (this.direcao =='r')
            this.x++;
        if (this.direcao == 'l')
            this.x--;
        if (this.direcao == 'd')
            this.y++;
        if (this.direcao == 'u')
            this.y--
        if (this.x < 0 || this.x > (tela.largura-this.tamanho))
            this.morrer();
        if  (this.x < 60 || this.y > (tela.altura+placar.altura-this.tamanho))    
            this.morrer();

    },

    morrer(){
        this.vida--;
        this.x=400;
        this.y=260;

    }
}
