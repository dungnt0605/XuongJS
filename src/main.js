import './style.css';
import ProductPage from "./page/product";
import SigninPage from "./page/signin";
import SignupPage from "./page/signup";
import HomePage from "./page/home";
import HandelSignUp from "./component/handle/signup";
import DetalProductPage from "./page/detalProduct";
import { render, router } from "./utils";
import HendelSignIn from './component/handle/signin';
import { logout } from './validation/auth';
import NewTreesComponent from './component/product/newTree';
import TopTreesComponent from './component/product/topTree';
import TrendProductComponent from './component/product/trendProduct';
import Admin from './page/admin';
import { getTrees } from './component/admin';
import createAdmin from './component/admin/create';
import { Create, Update, deleteProduct } from './component/admin/crud';
import updateAdmin from './component/admin/update';
import { formUpdate } from './component/admin/updateAdmin';
import hendleDetalProductPage from './component/handle/handleDetalProduct';


router.on( "/" ,() => render("#app", HomePage), {
    after() {
        NewTreesComponent();
        TopTreesComponent();
        TrendProductComponent();
    },
});
router.on('/home' ,() => router.navigate("/"));


router.on("/detail/:id", () => render('#app', DetalProductPage), {
    after({ data }) {
        hendleDetalProductPage(data);
    },
  });
 
router.on('/admin/update/:id',  () =>  render('#app', updateAdmin), {
        after({ data }) {
            formUpdate(data); 
            Update(data)
        }
    });

    

// router.on('/admin/update/:id', async () => {
//     try {
//         const  data  = await render('#app', updateAdmin);

//         if (data) {
//             await formUpdate(data);
//             Update(data);
//         }
//     } catch (error) {
//         console.error('Error in router:', error);
//     }
// });



router.on('/admin' , () => render("#app" ,Admin) , {
    after(){
        getTrees();
    },
});

router.on('/admin/create',() => render("#app" ,createAdmin) ,{
    after() {
        Create();
    }
});

router.on('/admin/delete/:id',({data}) => render("#app" ,() => deleteProduct(data.id)) );


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