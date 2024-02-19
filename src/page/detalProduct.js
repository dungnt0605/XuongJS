import FoooterComponent from "../component/footer";
import HeaderComponent from "../component/header";



const DetalProductPage =  () => {
    return /*html*/ `
        ${HeaderComponent()}
            <div class="container my-5" id="detail">
            </div>
        ${FoooterComponent()}
  `;

};



export default DetalProductPage;