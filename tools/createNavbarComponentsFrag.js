
import { createNavbarItem } from "./createNavbarItem";

export function createNavbarComponentsFrag({ data }){
    
    const documentFragment = document.createDocumentFragment();

    for (let categorie of data.Categories){

        let categorieName = categorie.name
        
        let categorieRef = categorie.nameSerialized

        let newLi = createNavbarItem({ elementName: categorieName, elementRef: categorieRef })

        documentFragment.appendChild(newLi)
    }

    return documentFragment
}