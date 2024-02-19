import FoooterComponent from "../component/footer";
import HeaderComponent from "../component/header";

const Admin = () => { 
    return /*html*/`
    ${HeaderComponent()}
    <div class="container" >
    <h2>List Products</h2>
        <a href="/admin/create" class="btn btn-dark">Add products</a>
        <table class="table table-striped table-hover mt-4" id="table">
            
    
        </table>
    </div>
    ${FoooterComponent()}
    `;
    
}
export default Admin;