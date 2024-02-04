import api from '../../api/index.js';

const NewTreesComponent = async () => {
    const productNewElement = document.getElementById("productNew");
    let contentHTML = '' ;
    try {
        const {data} = await api.get("/trees");
        for(let i = 0 ; i < 8 ; i++){
            let e = data[i];
            contentHTML += /*html*/`
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
            `
        }
        productNewElement.innerHTML =  contentHTML ;
    } catch (error) {
        console.log(error);
    }
}
export default NewTreesComponent;
