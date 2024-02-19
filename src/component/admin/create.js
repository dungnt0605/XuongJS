const createAdmin = () => {
  return /*html*/ `
        <main >
            
            <form  class=" rounded-5" id="order_form">
            <h3 class="text-center my-3 fw-bold">Create</h3>
            
                
                <div class="card">
                        <h4 class="fw-bold">Name :</h4>
                        <input type="text" id="name_C" >
                        
                        <h4 class="fw-bold">Image :</h4>
                        <input type="file" id="image_C" >

                        <h4 class="fw-bold">Price :</h4>
                        <input type="text" id="price_C" >

                        <h4 class="fw-bold">Origin :</h4>
                        <input type="text" id="origin_C" >

                        <h4 class="fw-bold">Description :</h4>
                        <textarea class="vertical-resize" name="" id="description_C" cols="3" rows="10" style="height:40px;" ></textarea>
                     
                </div>
                    
            
            <div class="d-flex mt-5 justify-content-between mx-5" id="orderCustomBtn">
                <input type="reset" value="Reset">
                <button type="button" id="createBtn" >Create</button>
            </div>
        </form>

        </main>
    
    `;
};

export default createAdmin;
