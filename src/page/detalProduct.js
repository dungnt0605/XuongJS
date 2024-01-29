import { dataArrayTressNew } from '../../conn.js';
import FoooterComponent from '../component/footer.js';
import HeaderComponent from '../component/header.js';


const DetalProductPage = (id) => {
    const product = dataArrayTressNew.find((item) => item.id == id)
    return `
    ${HeaderComponent()}
    <div class="container my-5">
        <div class="row">
            <div class="col-lg-5">
                <div class="card">
                <img src="../public/imageT2/${product.image}" alt="" style="height:70vh; object-fit: cover;">
                </div>
            </div>
            <div class="col-lg-7">
                <div class="card border border-0  ps-5">
                    <div class="card-body">
                        <p>Trees</p>
                        <h3 class="fs-1 fw-bold ">${product.name}</h3>
                        <div class="d-flex">
                            <a href="#" class="px-4 text-decoration-none  py-2 me-3 border border-1 rounded-pill" style="font-size: 15px;">Small 30cm</a>
                            <a href="#" class="px-4 text-decoration-none  py-2 me-3 border border-1 rounded-pill" style="font-size: 15px;">Medium 40cm</a>
                            <a href="#" class="px-4 text-decoration-none  py-2 me-3 border border-1 rounded-pill" style="font-size: 15px;">Large 60cm</a>
                        </div>
                        <p class="fs-2 my-4 " >$ ${product.price}</p>
                        <p class=" mb-4 ">${product.description}</p>
                        <div class="row">
                            <div class="col-sm-3">
                                <div class="card border ps-3 pe-0 border-0 ">
                                    <i class="m-auto my-3 fa-regular fa-sun" style="font-size: 50px; color: var(--blue);"></i>
                                    <p class="text-center">Bright direct light</p>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="card border ps-3 pe-0 border-0 border-start">
                                    <i class="m-auto my-3 fa-solid fa-droplet" style="font-size: 50px; color: var(--blue);"></i>
                                    <p class="text-center">Every 1 -2 weeks</p>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="card border ps-3 pe-0 border-0 border-start">
                                    <i class="m-auto my-3 fa-solid fa-temperature-half" style="font-size: 50px; color: var(--blue);"></i>
                                    <p class="text-center">18'C - 30'C</p>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="card border ps-3 pe-0 border-0 border-start">
                                    <i class="m-auto my-3 fa-solid fa-paw" style="font-size: 50px; color: var(--blue);"></i>
                                    <p class="text-center">toxic if consumed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ${FoooterComponent()}
    `;
}
export default DetalProductPage;