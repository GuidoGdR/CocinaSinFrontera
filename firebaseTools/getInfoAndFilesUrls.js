
import { getInfo } from "./getInfo";

import { getFileURL } from "./getFileURL";

import { dbFiles } from "../vars";




export async function getInfoAndFilesUrls({document}){
    
    const collection = "menu";

    
    let data = await getInfo({ collection, document });



    for (let categorie of data.Categories){

        for (let subCat of categorie.SubCategories){

            if (subCat.img){

                let imgName = subCat.img

                subCat.img = await getFileURL({ dbFiles, userUid: document, imgName })
                
            }
        }
    }


    return data
};

