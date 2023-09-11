
import 'bootstrap'

import { getInfoAndFilesUrls } from './firebaseTools/getInfoAndFilesUrls';

import { uuid } from './vars';

import { createNavbarComponentsFrag } from './tools/createNavbarComponentsFrag';

import { createMenuFrag } from './tools/createMenuFrag';





window.addEventListener("load", async () => {

    // Get data
    const data = await getInfoAndFilesUrls({ document: uuid })

    // Create fragments
    const navbarFragment = createNavbarComponentsFrag({data});

    const menuFragment = createMenuFrag({data});


    // Set fragments


    const listInDom = document.getElementById("menu-navbar");
    listInDom.appendChild(navbarFragment);

    const MenuInDom = document.getElementById("menu");
    MenuInDom.appendChild(menuFragment);


});