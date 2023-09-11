
import { ref, getDownloadURL  } from "firebase/storage";

export function getFileURL({ dbFiles, userUid, imgName }) {


    const pathReference = ref(dbFiles, `${userUid}/${imgName}` );

    const imgURL = getDownloadURL( pathReference );


    return imgURL
}
