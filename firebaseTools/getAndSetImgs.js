


import { dbFiles, uuid } from "../vars";


import { getFileURL } from "./getFileURL";

export async function getAndSetImgs({data}){
    let newData = data 

    for (let categorie of newData.Categories){


        for (let subCat of categorie.SubCategories){


            if (subCat.img){

                let imgName = subCat.img

                let subCatImgUrl = await getFileURL({ dbFiles, userUid: uuid, imgName })

                let categorieRef = categorie.nameSerialized
                let subCatRef = subCat.name.trim().replaceAll(" ", "_")

                let imgElement = document.getElementById(`${categorieRef}-${subCatRef}-img`)
                imgElement.src = subCatImgUrl

                subCat.img = subCatImgUrl
            }
        }
    }

    return newData
}