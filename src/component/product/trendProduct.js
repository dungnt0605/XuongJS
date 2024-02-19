import api from "../../api";

const TrendProductComponent = async () => {
    const product_row = document.getElementById("product-row");
    const { data } = await api.get("/product");
    console.log(data);
    product_row.innerHTML = data.map((e) =>  /*html*/ `
    <article class="product-item flex">
        <img src="./imageT2/${e.image}" alt="sp1">
        <div class="product-content">
            <h4>${e.name}</h4>
            <span>${e.price}</span><br>
            <button class="product-btn">
                Buy
            </button>
        </div>
    </article>
    `).join('');

   
    
};
export default TrendProductComponent;