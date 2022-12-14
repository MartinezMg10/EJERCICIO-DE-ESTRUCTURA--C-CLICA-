/* 1. Sumar una cantidad N números MAYORES a 0 utilizando MIENTRAS. */

/* let numero = 1
let suma = 0
while (numero > 0)
  {
    numero = parseInt(prompt("Digita un numero"))
    if(numero > 0){
        suma+= numero
    }
  }

  console.log(suma) */

/* 
2. Imprimir números aleatorios en el rango de 0 a 10 mientras el número no sea igual a cero. */

/* do {
    let numero =Math.random()*10
    if(numero > 0){
    console.log(numero)
    }
  } while (numero != 0);

 */
/* 
3. Imprimir 20 números aleatorios en el rango de 1 a 1000. */

/* let numero = 0
let conteo = 20

for(let i = 1;i <= conteo;i++){
    numero =Math.random()*1000
    console.log(numero)
}
 */

/* 4. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
todos los números impares desde 1 hasta ese número. */

/* numero = parseInt(prompt("Digite un numero entero positivo"))

if(numero > 0){
    for(let i = 1;i <= numero;i++){
        if(i%2 == 1){
            console.log(i)
        }
    }
}
 */



/* 5. Una persona debe realizar un muestreo con 20 personas para determinar el promedio de peso
de los niños, jóvenes, adultos y viejos que existen en su zona habitacional. Se determinan las
categorías con base en la sig., tabla:
CATEGORIA EDAD
Niños 0 - 12
Jóvenes 13 - 29
Adultos 30 - 59
Viejos 60 en adelante */

/*  let ninos,jovenes,adultos,viejos,pesoAdultos,pesoJovenes,pesoNinos,pesoViejos = 0
let promedioA,promedioJ,promedioN,promedioV = 0

for(let i=1;i<=20;i++){
    let edad=+prompt(`Digita la edad de la persona numero ${i}`)
    let peso =+prompt(`Digita el peso de la persona numero ${i}`)

    if(edad >= 0 && edad <= 12){
        ninos++
        pesoNinos+=peso
        promedioN = pesoNinos / ninos
    }else if(edad >= 13 && edad <= 23){
        jovenes++
        pesoJovenes+=peso
        promedioJ = pesoJovenes / jovenes
    }else if(edad >= 30 && edad <= 59){
        adultos++
        pesoAdultos+=peso
        promedioA = pesoAdultos / adultos
    }else if(edad >= 60){
        viejos++
        pesoViejos+=peso
        promedioV = pesoViejos / viejos
    } 
}

console.log(`El promedio de peso en niños fue de ${promedioN}`)
console.log(`El promedio de peso en jovenes fue de ${promedioJ}`)
console.log(`El promedio de peso en adultos fue de ${promedioA}`)
console.log(`El promedio de peso en viejos fue de ${promedioV}`)

 */
 
/* 6. Diseñen un algoritmo que imprima la siguiente secuencia:
1.1.1 - 1.1.2 - 1.1.3 - 1.1.4
1.2.1 - 1.2.2 - 1.2.3 - 1.2.4
1.3.1 - 1.3.2 - 1.3.3 - 1.3.4
1.4.1 - 1.4.2 - 1.4.3 - 1.4.4
1.5.1 - 1.5.2 - 1.5.3 - 1.5.4 */

/* const CADENA = "1"

for(let i =1;i <=5;i++){
    for(let j =1;j<=4;j++){
        document.write(CADENA + i + j + " ")
    }document.write("</br>")
}



 */

/* 7. Un Zoólogo pretende determinar el porcentaje de animales que hay en las siguientes tres
categorías de edades: de 0 a 1 año, de más de 1 año y menos de 3 y de 3 o más años. El
zoológico todavía no está seguro del animal que va a estudiar. Si se decide por elefantes solo
tomara una muestra de 20 de ellos; si se decide por las jirafas, tomara 15 muestras, y si son
chimpancés tomara 40. */
/* 
let animal = prompt("Digite el animal del cual tomara muestra \n 1.elefantes \n 2. jirafas \n 3. chimpances")
let edad1 = 0
let edad2 = 0
let edad3 = 0

if(animal == 1){
    for(let i =1;i <= 20;i++){
        let edad = prompt(`Digita edad del animal ${i} `)
        if(edad >= 0 && edad <=1){
            edad1++
        }else if(edad > 1 && edad <3){
            edad2++
        }else if(edad >= 3){
            edad3++
        }
    }
    promedio1 = edad1 /20 * 100
    promedio2 = edad2/20 * 100
    promedio3 = edad3/20 * 100
    
}else if(animal == 2){
    for(let i =1;i <= 15;i++){
        let edad=+prompt(`Digita edad del animal ${i} `)
        if(edad >= 0 && edad <=1){
            edad1++
        }else if(edad > 1 && edad <3){
            edad2++
        }else if(edad >= 3){
            edad3++
        }
    }

    promedio1 = edad1 /20 * 100
    promedio2 = edad2/20 * 100
    promedio3 = edad3/20 * 100

}else if(animal == 3){
    for(let i =1;i <= 40;i++){
        let edad=+prompt(`Digita edad del animal ${i}`)
        if(edad >= 0 && edad <=1){
            edad1++
        }else if(edad > 1 && edad <3){
            edad2++
        }else if(edad >= 3){
            edad3++
        }
    }
    promedio1 = edad1 /20 * 100
    promedio2 = edad2/20 * 100
    promedio3 = edad3/20 * 100

}

console.log(`El porcentaje de ${animal} en la edad de 0 a 1 año fue de ${promedio1}%`)
console.log(`El porcentaje de ${animal} en la edad de 0 a 1 año fue de ${promedio2}%`)
console.log(`El porcentaje de ${animal} en la edad de 0 a 1 año fue de ${promedio3}%`) 
 */

/* 
8. Una compañía de seguros tiene contratados a una cantidad N vendedores. Cada vendedor
hace tres ventas a la semana. Su política de pagos es que un vendedor recibe un sueldo base, y
además un 10% extra por comisiones del total de sus ventas. El gerente de la compañía desea
saber cuánto dinero recibirá cada vendedor en una semana por concepto de comisiones por
las ventas, y cuanto será el total tomando en cuenta su sueldo base y sus comisiones. */

/* let cantidadVendedores =+ prompt(`Digita la cantidad de vendedores contratados`)
const sueldoBase = 1000000
let ventasTotal = 0
let comision = 0

for(let i = 1;i <= cantidadVendedores;i++){
    let venta1 =+ prompt(`Digite el total de la primer venta del ${i} vendedor`)
    let venta2 =+ prompt(`Digite el total de la segunda venta del ${i} vendedor`)
    let venta3 =+ prompt(`Digite el total de la tercer venta del ${i} vendedor`)
    ventasTotal = venta1 + venta2 + venta3
    comision = ventasTotal*0.1
    sueldoSemana = sueldoBase/4const SUELDO = 950000
let autosVendidos =+ prompt("Digite la cantidad de autos vendidos")
let totalVendido = 0

for(let i = 1;i <= autosVendidos;i++){
    valorAuto =+ prompt(`Digite el valor del ${i} auto vendido`)
    totalVendido+= valorAuto
}

let comisionUnitaria = autosVendidos * 170000
let comision = totalVendido *0.05
let sueldoTotal = SUELDO + comision + comisionUnitaria

console.log(`El sueldo total del vendedor este mes es de ${sueldoTotal}`)

    sueldoTotal = sueldoSemana + comision

    console.log(`El ${i} vendedor recibe un total de $${sueldoTotal} a la semana`)
}

 */
/* 
9. Una agencia de venta de autos paga a su personal de ventas un salconst SUELDO = 950000
let autosVendidos =+ prompt("Digite la cantidad de autos vendidos")
let totalVendido = 0

for(let i = 1;i <= autosVendidos;i++){
    valorAuto =+ prompt(`Digite el valor del ${i} auto vendido`)
    totalVendido+= valorAuto
}

let comisionUnitaria = autosVendidos * 170000
let comision = totalVendido *0.05
let sueldoTotal = SUELDO + comision + comisionUnitaria

console.log(`El sueldo total del vendedor este mes es de ${sueldoTotal}`)

/* const SUELDO = 950000
let autosVendidos =+ prompt("Digite la cantidad de autos vendidos")
let totalVendido = 0

for(let i = 1;i <= autosVendidos;i++){
    valorAuto =+ prompt(`Digite el valor del ${i} auto vendido`)
    totalVendido+= valorAuto
}

let comisionUnitaria = autosVendidos * 170000
let comision = totalVendido *0.05
let sueldoTotal = SUELDO + comision + comisionUnitaria

console.log(`El sueldo total del vendedor este mes es de ${sueldoTotal}`)
 */

/* 
10. Hallar el promedio de calificaciones de un estudiante, teniendo en cuenta el nombre estudiante
y 5 notas; calculando la nota final de acuerdo a los siguientes porcentajes: Dos (2) notas valen
el 40% y las otras tres (3) valen el 60%.  */

/* let nombre = prompt("Digite el nombre del estudiante")

let notaT1=0,notaT2 = 0
let nota1= 0,nota2 = 0
let porcentaje1=0,porcentaje2 = 0
let total1 = 0,total2 = 0
let notaFinal = 0

for(let i=1 ;i <= 2;i++){
    nota1 = parseFloat(prompt(`Digite la ${i} nota`))
    notaT1 += nota1 
}

for(let i=3 ;i <= 5;i++){
     nota2 = parseFloat(prompt(`Digite la ${i} nota`))
     notaT2 += nota2 
}
total2 = notaT2/3
total1 = notaT1/2
porcentaje1 = total1 * 0.4
porcentaje2 = total2 * 0.6

notaFinal = porcentaje1 + porcentaje2
console.log(`La nota final de ${nombre} es de ${notaFinal}`) */