function fizzBuzz() {
    for ( let i = 1; i <= 100 ; i ++)
    // PPONEMOS DE PRIMERO PORQUE SINO COMPROMENTE LOS SIGUIENTES RECORRIDOS .... 
    if ( i % 15 === 0 ) { //15 es múltiplo de 3 y 5 ... 
        console.log('fizzBuzz');
    } else if( i % 3 === 0) { // múltiplos de 3, en división dan 0
        console.log('fizz'); 
        } else if ( i % 5 === 0 ) { // múltiplos de 5
            console.log('buzz');
        }  
        else if ( i % 7 === 0 ) { // múltiplos de 5
            console.log('WOF');
        }  

        else{
            console.log(i)
        }
    
}

fizzBuzz(); 