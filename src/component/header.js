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
            <nav>
                <ul class="menu2 flex">
                    <li><a href="#"><i class="fa-solid fa-cart-shopping" style="color: #000000; font-size:20px ;"></i></a></li>
                    <li><a href="/signup" class="text-dark">Đăng ký</a> /<a href="/signin" class="text-dark">Đăng nhập</a></li>
                </ul>
            </nav>
            
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