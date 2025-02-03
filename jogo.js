class Comida {
    tamanho=15;
    imagem;
    imagemArq='alimento.png';
    constructor (x,y){
        this.x = x;
        this.y = y;
        this.imagem = new Image();
        this.imagem.src=this.imagemArq;
    
    };
    desenhar(){
        cCtx.drawImage(this.imagem,
                        this.x,
                        this.y,
                        this.tamanho,
                        this.tamanho)
    }
}
