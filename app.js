"use strict";
(() => {
    class notas {
        constructor(not1, not2, not3) {
            this.not1 = not1;
            this.not2 = not2;
            this.not3 = not3;
            this.promedio = () => (this.not1 + this.not2 + this.not3) / 3;
            this.mensaje = () => {
                if (this.promedio() >= 7) {
                    return "Aprovo ¡felicitaciones!";
                    //console.log("Aprovo, felicitaciones");
                }
                else if (this.promedio() < 7 && this.promedio() > 4) {
                    return "Aprovo";
                }
                else {
                    return "Reprobo, pongase las pilas";
                }
            };
        }
    }
    const a = new notas(1, 4, 1);
    const b = new notas(1, 3, 9);
    console.log(`Promedio de ${a.promedio()} usted ${a.mensaje()}`);

    //console.log(b.mensaje());
    /*let text;
    if (not1 === undefined) {
      text = "x es undefined";
    }else{
      text = "x es definido";
    }
    console.log(text);*/
})();
