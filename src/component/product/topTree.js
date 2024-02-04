import api from "../../api/index.js";

const TopTreesComponent = async () => {
    const productTopElement = document.getElementById("productTop");
    let htmlContent = '';
    try {
        const {data} = await api.get("/trees");
        for (let i = data.length - 1; i >= 8; i--) {
            const e = data[i]; 
            htmlContent += /*html*/ `
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
        productTopElement.innerHTML =  htmlContent;
    } catch (error) {
        console.log(error);
    }
};

export default TopTreesComponent;