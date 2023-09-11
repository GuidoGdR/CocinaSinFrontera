
import { doc, getDoc } from "firebase/firestore";
import { db } from "../vars.js";


export async function getInfo({ collection, document }) {
  
    const docRef = doc(db, collection, document);
  
    const docSnap = await getDoc(docRef)
      .then((response) => {
  
        if (response.exists()) {
  
          return response.data()
  
        }
  
      })
      .catch((error) => {
        console.log(error)
        return
      })
  
      
      
      return docSnap
  }
  