class User{
    
    constructor ( nombre, apellido, libros, mascotas ){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
  
    getFullName(){
        return (`${this.nombre} ${this.apellido}`)
    }
    
    addMascota( mascota ){
        this.mascotas.push(mascota)
    }
  
    countMascotas(){
        return (this.mascotas).length
    }
  
    addBook( title, author ){
        this.libros.push({ nombre:title, autor:author })
    }
  
    getBookNames(){
        return this.libros.map( libro => libro.nombre )
    }
  
}
  
  
const usuario = new User( 'Elon', 'Musk', [ { nombre:'El Señor de las Moscas', autor: 'William Goldwing' }, { nombre:'Fundacion', autor: 'Isaac Asimov' } ], ['perro', 'gato'])
  
  
console.log('Nombre Completo del Usuario: ', usuario.getFullName())
usuario.addMascota('gallo')
console.log('Se agrego mascota')
console.log('Cantidad de mascotas del Usuario: ', usuario.countMascotas())
usuario.addBook('Corazon', 'Edmundo de Admicis')
console.log('Se agrego libro')
console.log('Titulos de libros del Usuario: ', usuario.getBookNames())