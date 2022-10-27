(()=>{

  class notas{
  
    constructor (public not1: number,
                 public not2: number,
                 public not3: number){}
  
    promedio = ():number => (this.not1 + this.not2 + this.not3)/3;
  
    mensaje = () => {
  
    if(this.promedio() >= 7){
      console.log("Aprovo, felicitaciones"); 
  
    }else if (this.promedio() < 7 && this.promedio() > 4) {
      console.log("Aprovo");
  
    }else {
      console.log("Reprobo, pongase las pilas");
    }
   }
  }
  
  const a = new notas(8,9,9);
  const b = new notas(1,3,9);
  
  console.log(a.promedio());
  console.log(b.mensaje());
  
  
  /*let text;
  if (not1 === undefined) {
    text = "x es undefined";
  }else{
    text = "x es definido";
  }
  console.log(text);*/
  
  })();