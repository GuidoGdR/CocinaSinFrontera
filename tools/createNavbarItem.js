

export function createNavbarItem({ elementName, elementRef }){


    let newLi = document.createElement("li");
    newLi.classList.add("nav-item")


    let newA = document.createElement("a");

    newA.classList.add("nav-link", "active")
    newA.text = elementName
    newA.href = `#${elementRef}`

    newLi.appendChild(newA)

    return newLi
}