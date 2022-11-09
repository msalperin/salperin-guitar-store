import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail"

import { db } from "../../../firebase/firebaseConfig";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailConteiner = () => {

    const [producto, setProducto] = useState({});
    
    const {id} = useParams(); 
    

    useEffect(() => {
      const productCollection = collection(db, "productos");
      const refDoc = doc(productCollection, id);

      getDoc(refDoc)
        .then((result) => {
          setProducto({
            id: result.id,
            ...result.data(),
          });
        })
    },[id])

  
    return ( 

        <>

           <ItemDetail producto={producto}/> 

        </>
     );
}
 
export default ItemDetailConteiner;