import './style.css';
import ProductPage from "./page/product";
import SigninPage from "./page/signin";
import SignupPage from "./page/signup";
import HomePage from "./page/home";
import HandelSignUp from "./component/handle/signup";
import DetalProductPage from "./page/detalProduct";
import demo from "./component/product/demo";
import { render, router } from "./utils";
import HendelSignIn from './component/handle/signin';
import { logout } from './validation/auth';


router.on( "/" ,() => render("#app", HomePage), {
    after() {
        demo();
        NewTreesComponent();
        TopTreesComponent();
        TrendProductComponent();
    },
});
router.on('/home' ,() => router.navigate("/"));

router.on('/detail/:id' , ({data}) =>{
    render('#app' ,() =>  DetalProductPage(data.id));
})

router.on('/products' , () => {
    render('#app' , ProductPage)
});


router.on('/signin' , () => render('#app' , SigninPage) ,{
    after(){
        HendelSignIn();
    }
});
router.on('/logout' , () => render ( "#app" , logout));

router.on('/signup' , () => render('#app' , SignupPage) ,{
    after(){
        HandelSignUp();
    }
});

router.resolve();