
let usuario = (prompt('Hola! Bienvenido a Game Zone! Ingresa tu usuario.'))
let password = parseInt(prompt('Gracias, ahora ingresa tu password.'))
let producto = parseInt(prompt(`Bienvenido ${usuario}! Que deseas comprar el dia de hoy? 1. PS5 | 2. XBOX Series X/S | 3. Nintendo Switch | 4. Videojuegos`))
let seguirComprando = true
let totalCompra = 0
let decision
let totalCompraFinal = 0



while (seguirComprando === true) {
    if (producto === 1) { 
        totalCompra = totalCompra + 500
    } else if (producto === 2) {
        totalCompra = totalCompra + 400
    } else if (producto === 3) {
        totalCompra = totalCompra + 300
    } else if (producto === 4) {
        totalCompra = totalCompra + 50
    } 

    alert(`${usuario}, tu total hasta ahora es de: ${totalCompra}.`)    
    decision = parseInt(prompt(`${usuario} Quieres seguir comprando? 1. Si | 2. No`))

    if (decision === 1) {
        producto = parseInt(prompt(`Muy bien ${usuario}, escoge el producto que deseas comprar ahora: 1. PS5 | 2. XBOX Series X/S | 3. Nintendo Switch | 4. Videojuegos`))
    } else {
        seguirComprando = false
    }
   
}



totalCompraFinal = parseInt(alert(`${usuario}, el total de tu compra es de ${totalCompraFinal + totalCompra}. Gracias por preferirnos!`))






    




    






