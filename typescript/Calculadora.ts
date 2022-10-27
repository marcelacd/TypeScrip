(()=>{

//calculadora

type Operacion = 'multi' | 'suma' | 'div'

const calculator = (a: number, b: number, op: Operacion): number | string => {
  if (op === 'multi') return a * b;
  if (op === 'suma') return a + b;
  if (op === 'div') {
    if(b === 0) throw new Error('Sorry, no se puede dividir entre 0')
    return a / b;
    }

    throw new Error('Operacion no valida')

  }

  console.log(calculator(2,7,'suma'))

  //console.log(process.argv)

 /* try {
    console.log(calculator(1,5,'div'))
  }catch (e){
    console.log('El error es ', e)
  }*/

})();