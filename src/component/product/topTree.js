import { dataArrayTress } from '../../../conn.js';

const TopTreesComponent = () => {
    let htmlContent = '';
    for (let i = dataArrayTress.length - 1; i >= 8; i--) {
        const e = dataArrayTress[i]; // Giả sử e là phần tử hiện tại của mảng
        htmlContent += `
            <article class="new-item" onclick="return window.location.href='/detail/${e.id}'">
                <img src="./imageT2/${e.image}" alt="bnm">
                <div class="new-describe">
                    <h5>${e.name}</h5>
                    <span>$${e.price}</span>
                    <div class="star flex">
                    <i class="fa-solid fa-star" style="color: #fff70f;"></i>
                    <i class="fa-solid fa-star" style="color: #fff70f;"></i>
                    <i class="fa-solid fa-star" style="color: #fff70f;"></i>
                    <i class="fa-solid fa-star" style="color: #fff70f;"></i>
                    <i class="fa-solid fa-star" style="color: #fff70f;"></i>
                </div>
                <div class="New-btn flex between">
                    <a href="/detail/${e.id}"><button>Buy</button></a>
                    <a href="#"><i class="fa-solid fa-cart-plus" style="color: #000000;"></i></a>

                </div>
                </div>
            </article>
        `;
    }
    return htmlContent;
};

export default TopTreesComponent;