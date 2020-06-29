        /*for (let index = 0; index < array.length; index++) {
            const element = array[index];

        }*/

                 /*Continue seguir al siguiente de la condicion*/
         /*for (let index = 1; index <= 100; index++) {
            if(index % 7 === 0) continue 
            console.log(index);
            //if(index % 5 === 0) console.log(index);

        }*/

                    /*Break romper el ciclo*/ 
        /*for (let index = 1; index <= 100; index++) {
            if(index > 10) break
            console.log(index);
            //if(index % 5 === 0) console.log(index);

        }*/
       /* let n = 0
        for (let index = 1; index <= 100; index++) {
            if(index % 6 === 0) {
            console.log(index);
            n++
        }
              //  console.log(n);
                if(n >= 7) break 

        }*/

                /*CICLO WHILE & DOWHILE*/ 
    //    i = 10
    //    while (i--) {
    //        console.log(i)
    //       // i++
    //    }

  //  let password = 'EDteam'
  //  let pass
  //  do {
  //      pass = prompt('Ingresa la contraseña')
  //  } while (pass !== password)

                  /*FUNCIONES*/

   /*declara*/
/*     function gretting(person,sexo) {
         let saludo = sexo === 'm'  
                   // ? `Bienvenido`
                    : `Bienvenida`
            return `Bienvenido a mi pagina, ${person}`
        
     }
     console.log(gretting('Beto','m'))
     console.log(gretting('Enrique','m'))
     console.log(gretting('Luisa','f'))
     console.log(gretting('Karla','f'))*/

    /*flecha*/

    const gretting = (person,sexo) => {
        let saludo = sexo === 'm'  
                   ? `Bienvenido`
                   : `Bienvenida`
           return `${saludo} a mi pagina, ${person}`
       
    }
    console.log(gretting('Beto','m'))
    console.log(gretting('Enrique','m'))
    console.log(gretting('Luisa','f'))
    console.log(gretting('Karla','f'))


    const sumar =(a,b) => a + b

   /* function sumar = (a,b) {
        return a + b
    }*/ 

    console.log(sumar(1,7))
    console.log(sumar(3,7))
    