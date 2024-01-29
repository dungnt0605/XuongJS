import { dataArrayProduct } from "../../../conn";

const TrendProductComponent = () => {
  return `
  
    ${dataArrayProduct.map((e) => { 
        return `
    <article class="product-item flex">
        <img src="./imageT2/${e.image}" alt="sp1">
        <div class="product-content">
            <h4>${e.name}</h4>
            <span>$${e.price}</span><br>
            <button class="product-btn">
                Buy
            </button>
        </div>
    </article>
    `}).join('')}

    `;
    
};
export default TrendProductComponent;