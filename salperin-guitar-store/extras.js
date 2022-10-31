/* Productos por array  */

/* 
const productos = [
    {id:0, nombre: 'Gibson Les Paul', precio: 10000, categoria: 'guitarras', stock: 2, rating:3.5 },
    {id:1, nombre: 'Fender Telescaster', precio: 13000, categoria: 'guitarras', stock: 3, rating: 4.5 },
    {id:2, nombre: 'Bajo Musicman', precio: 8000, categoria: 'bajos', stock: 1, rating: 4  },
    {id:3, nombre: 'Cable de Guitarra', precio: 2000, categoria: 'accesorios', stock: 20, rating: 2  },
    {id:4, nombre: 'Gibson Les Paul', precio: 10000, categoria: 'guitarras', stock: 2, rating: 5 },
    {id:5, nombre: 'Fender Telescaster', precio: 13000, categoria: 'guitarras', stock: 3, rating: 3.5  },
    {id:6, nombre: 'Bajo Musicman', precio: 8000, categoria: 'bajos', stock: 1, rating: 4 },
    {id:7, nombre: 'Cable de Guitarra', precio: 2000, categoria: 'accesorios', stock: 20, rating: 1 },
];

const obtenerProductos = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(productos);
    }, 2000);
    //reject("ocurrio un error en la promesa")
  }) */


/* useEffect(() => {
        obtenerProductos
        .then((data)=>{
           if(!id){
             setProductos(data)
           }else{ 
             const filtrado = data.filter(producto => producto.categoria === id); 
             setProductos(filtrado)
           };
        })
        .catch((error)=>{
          console.log("salio todo mal");
          console.log(error);
        })
      }, [id])
 */

 /*      useEffect(() => {
        getDocs(productCollection)
        .then((result) => {  
        const listProducts =result.docs.map(item =>{
          return {
            ...item.data(),
            id: item.id
          }
        })  
        console.log(listProducts)
        setProductos(listProducts)
        })
      }, [id])  */