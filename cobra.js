const cobra = {
    x:400,
    y:200,
    tamanho:10,
    largura:10,
    cor:"red",
    desenhar(){
        cCtx.fillStyle=this.cor;
        cCtx.fillRect(this.x,this.y,this.tamanho,this.largura);
    }
}
cobra.desenhar();
