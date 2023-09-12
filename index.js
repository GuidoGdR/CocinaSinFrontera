
import 'bootstrap';

import { uuid } from './vars';

import { createNavbarComponentsFrag } from './tools/createNavbarComponentsFrag';

import { createMenuFrag } from './tools/createMenuFrag';

import { getInfo } from './firebaseTools/getInfo';

import { getAndSetImgs } from './firebaseTools/getAndSetImgs';

window.addEventListener("load", async () => {


    let data = JSON.parse(localStorage.getItem("menu"));

    if ( !data ){

    const collection = "menu";

    // Get data
    data = await getInfo({ collection, document:uuid })


    // Create fragments
    const navbarFragment = createNavbarComponentsFrag({data});

    const menuFragment = createMenuFrag({data});

    // Set fragments
    
    const listInDom = document.getElementById("menu-navbar");
    listInDom.appendChild(navbarFragment);

    const MenuInDom = document.getElementById("menu");
    MenuInDom.appendChild(menuFragment);


    data = await getAndSetImgs({data})


    localStorage.setItem("menu", JSON.stringify(data));

    }
    else{
        
        // Create fragments
        const navbarFragment = createNavbarComponentsFrag({data});

        const menuFragment = createMenuFrag({ data, imgsReady: true });

        // Set fragments
        
        const listInDom = document.getElementById("menu-navbar");
        listInDom.appendChild(navbarFragment);

        const MenuInDom = document.getElementById("menu");
        MenuInDom.appendChild(menuFragment);

    }

});
