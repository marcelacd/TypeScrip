(()=>{

  // Uso de Let y Const
  const nombre = 'Marcela Carmona';
  let edad = 25;

  let PERSONAJE = {nombre,edad};

  //console.log(PERSONAJE);


  // Cree una interfaz que sirva para validar el siguiente objeto
  interface Batman {
    nombre: string,
    artesMarciales: string [];
  }

  const batman: Batman = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }


  // Convertir esta funcion a una funcion de flecha
  const resultadoDoble = ( a: number, b: number ) => a + b;

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  function getAvenger ( nombre: string, 
                       poder?: string, 
                       arma  : string = 'arco' ){
    let mensaje;
    if( poder ){
      //nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
      mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`
    }else{
      //mensaje = nombre + ' tiene un ' + poder`
      mensaje = `${nombre} tiene el poder de: ${poder}`
    }
  };

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

  class rectangulo {

    constructor ( public base: number,
                  public altura: number ){}

    operacion = ():number => this.base * this.altura;
                  
  }

  let resul = new rectangulo(3,5)
  console.log(resul.base)
  console.log(`Las medidas del rectangulo son: 
               Base  : ${resul.base}
               Altura: ${resul.altura} 
               Su area es de: ${resul.operacion()} cm`);



})();