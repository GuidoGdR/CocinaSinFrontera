
export function createMenuFrag({ data }){
    
    const documentFragment = document.createDocumentFragment();

    // categorie
    for (let categorie of data.Categories){

        let categorieName = categorie.name;
        
        let categorieRef = categorie.nameSerialized;

        let categorieBox = document.createElement("div");
        categorieBox.classList.add("col-12", "d-flex", "flex-wrap", "justify-content-around", "gap-5", "mb-5");
        categorieBox.id = categorieRef

        documentFragment.appendChild(categorieBox);

        let subCatList = categorie.SubCategories;

        // SubCat
        for ( let subCat of subCatList ){
            
            let subCatName = subCat.name 



            let subCatBox = document.createElement("section");
            subCatBox.classList.add("col-12", "col-lg-5");

            categorieBox.appendChild(subCatBox);

            // Title and pic 

            let titleAndPicBox = document.createElement("div");
            titleAndPicBox.classList.add("col-12");

            subCatBox.appendChild(titleAndPicBox);

            // img
            if ( subCat.img){

                let subCatImgUrl = subCat.img
                
                let pictureBox = document.createElement("section");
                pictureBox.classList.add("section-img", "col-12");

                titleAndPicBox.appendChild(pictureBox);


                let imgElement = document.createElement("img")
                imgElement.src = subCatImgUrl
                imgElement.alt = `Img of category: ${categorieName} sub-category: ${subCatName}`;

                pictureBox.appendChild(imgElement);
            }

            //title
            let subCatTitle = document.createElement("h3");
            subCatTitle.classList.add("bg-my-primary", "col-12", "p-2", "text-center", "section-title", "font-weight-bold");
            subCatTitle.textContent = subCatName;

            titleAndPicBox.appendChild(subCatTitle);





            //description

            if (subCat.description){

                let subCatDescription = subCat.description;

                let subCatDescriptionElement = document.createElement("h6");
                subCatDescriptionElement.classList.add("col-12");
                subCatDescriptionElement.textContent = subCatDescription;
                
                titleAndPicBox.appendChild(subCatDescriptionElement);
            }





            // Products

            
            let ProductsBox = document.createElement("div");
            ProductsBox.classList.add("products-list", "col-12", "d-flex", "flex-wrap");

            subCatBox.appendChild(ProductsBox);

            let productsList = subCat.Products
            for ( let product of productsList ){

                let productName = product.name

                let ProductBox = document.createElement("section");
                ProductBox.classList.add("col-12", "d-flex", "flex-wrap");
    
                ProductsBox.appendChild(ProductBox);

                

                let productTitleAndDescription = document.createElement("h6");
                productTitleAndDescription.classList.add("col-10");

                ProductBox.appendChild(productTitleAndDescription);

                // Title
                let productTitle = document.createElement("b");
                productTitle.textContent = productName;

                productTitleAndDescription.appendChild(productTitle);


                // Description
                if ( product.description ){

                    productTitleAndDescription.innerHTML =`<h6 class="col-10"><b>${productName}</b> ${product.description}</h6>`;
                }

                // Price
                let productPrice = document.createElement("h6");
                productPrice.classList.add("col-2");
    
                ProductBox.appendChild(productPrice);
                if ( product.price ){

                    productPrice.textContent = product.price;
                }
                

            }

        };



        
    };
    
    return documentFragment;
};