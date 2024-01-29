import {dataArrayTressNew} from '../../../conn.js' ;

const NewTreesComponent = () => {
    return `
    ${dataArrayTressNew.map( (e) =>{
        return `
        <article class="new-item" onclick="return window.location.href='/detal/${e.id}'">
        
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
                    <a href="#"><button>Buy</button></a>
                    <a href="#"><i class="fa-solid fa-cart-plus" style="color: #000000;"></i></a>

                </div>
            </div>
        
        </article>
        `;
    }).join('')}
    `;
}
export default NewTreesComponent;
