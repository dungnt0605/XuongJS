import BannerComponent from "../component/bannerHome";
import FoooterComponent from "../component/footer";
import HeaderComponent from "../component/header";
import NewTreesComponent from "../component/product/newTree";
import TopTreesComponent from "../component/product/topTree";
import TrendProductComponent from "../component/product/trendProduct";

const HomePage = () => {
    return `
    ${HeaderComponent()}
    ${BannerComponent()}
    <section id="sale" class="Container flex">
                <article class="sale-item">
                    <p>Up to 40% off</p>
                    <h2>Natural plants</h2>
                    <a href="#"><button class="sale-btn">Shop now</button></a>
                </article>
                <article class="sale-item">
                    <p>Sale 20%</p>
                    <h2>Wide plants</h2>
                    <a href="#"><button class="sale-btn">Shop now</button></a>
                </article>
            </section>
            <!-- ------------------------TRENDING PRODUCT------------------------------ -->
            <section id="product">
                <h2> TRENDING PRODUCT</h2>
                <section id="product-row">
                    ${TrendProductComponent()}
                </section>
            </section>
            <!-- --------------------New--------------------------- -->
            <section id="New">
                <h2>NEW PRODUCT</h2>
                <section class="New-content " id="productNew">
                    ${NewTreesComponent()}
                </section>
                <!-- ---------------------------Top sale------------------------------------- -->
                <h2>TOP SALE</h2>
                <section class="New-content flex evenly">
                    ${TopTreesComponent()}
                </section>

            </section>
            ${FoooterComponent()}
    `;
}
export default HomePage;