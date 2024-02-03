// import { checkLoginStatus } from "../validation/auth";

import { checkLoginStatus } from "../validation/auth";

const HeaderComponent = () => {
    return `
    <header class="flex between">
            <nav class="flex ">
                <a href="/"><img src="../public/logo.png" alt="logo" id="logo"></a>
                <ul class="menu flex">
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/detal">Contacts</a></li>
                </ul>
            </nav>
                
            <div class="flex ">
                <div class="mt-2 me-4"><a href="#" ><i class="fa-solid fa-cart-shopping" style="color: #000000; font-size:20px;"></i></a></div>
                <ul class=" navbar-nav  mt-2 " >
                    <li class="nav-item dropdown">${checkLoginStatus()}</li>
                </ul>
            </div>
            
                <ul class="menu-small ">
                    <li class="menu-small-li"><i class="fas fa-bars" style="color: #000000;"></i>
                        <ul class="menu-small-ul">
                            <li><a href="#"><i class="fa-regular fa-circle-user" style="color: #000000;"></i>Sign in/Sign up</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="./DM_index.html">Products</a></li>
                            <li><a href="#">Contacts</a></li>
                            <li><a href="./DM_index.html">Cart</a></li>
                            
                        </ul>
                    </li>
                </ul>
            
        </header>
    `
}
export default HeaderComponent;