import Navigo from "navigo";
import './style.css';
import ProductPage from "./page/product";
import SigninPage from "./page/signin";
import SignupPage from "./page/signup";
import HomePage from "./page/home";
import DetalProductPage from "./page/detalProduct";

const render = (container , Components) =>{
    document.querySelector(container).innerHTML = Components();
}

const router = new Navigo('/' , {linksSelector: 'a'});

router.on('/' , () => {
    render('#app' , HomePage);
});

router.on('/detail/:id' , ({data}) =>{
    render('#app' ,() =>  DetalProductPage(data.id));
})

router.on('/products' , () => {
    render('#app' , ProductPage)
});

router.on('/signin' , () => {
    render('#app' , SigninPage)
})

router.on('/signup' , () => {
    render('#app' , SignupPage)
});

router.resolve();