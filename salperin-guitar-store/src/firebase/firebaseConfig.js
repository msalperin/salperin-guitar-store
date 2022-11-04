import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";


const firebaseConfig = {
  apiKey: "AIzaSyB8UQJUjn15ofibxFfQZAVeDqRdWTIZCHk",
  authDomain: "proyecto-coder-f9ab9.firebaseapp.com",
  projectId: "proyecto-coder-f9ab9",
  storageBucket: "proyecto-coder-f9ab9.appspot.com",
  messagingSenderId: "305710682421",
  appId: "1:305710682421:web:0abb757010ffb06aa0fc7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);


export async function uploadFile(file) {
  const storageRef = ref(storage, v4()); 
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url 
} 
/* uploadBytes(storageRef, file).then((snapshot) => {
  console.log(snapshot);
});

export function uploadFile(file) {
  const storageRef = ref(storage, 'imagenes')
  uploadBytes(storageRef, file).then(snapshot => {
   console.log(snapshot) 
  }) 
 } */

/* function uploadFile(file) {
 const storageRef = ref(storage)
 uploadBytes(storageRef, file).then(snapshot => {
  console.log(snapshot) 
 }) 
}
/*  */
/* 
useEffect(() => {
    getDocs(productCollection)
    .then((result) => {
      const listProducts = result.docs.map((item) => {
        return {
          ...item.data(),
          id: item.id,
        };
      });
      setProducts(listProducts);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(setLoading(false)); */

/* 
    
  const productCollection = collection(db, "productos");
  const q = query(productCollection, where('category', '==', "women's clothing" )) */