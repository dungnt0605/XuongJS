import Navigo from "navigo";

export const router = new Navigo('/' , {linksSelector: 'a'});

export const render = (container , Components) =>{
    document.querySelector(container).innerHTML = Components();
};
