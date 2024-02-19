import instance from "../../api";

export async function formUpdate ( data ) {
    const formUpdateAdmin = document.getElementById("formUpdateAdmin");
        const id = data.id;
        console.log(id);
        if(id){
            instance
            .get(`/trees/${id}`)
            .then(({ data }) => {
                console.log(data);
        formUpdateAdmin.innerHTML = /*html*/ `
        <form  class=" rounded-5" id="order_form" >
                <h3 class="text-center my-3 fw-bold">Update</h3>  
                  
                  <div class="card">
                          <input type="hidden" id="id_U" value=" ${data.id}">

                          <h4 class="fw-bold">Name :</h4>
                          <input type="text" id="name_U" value=" ${data.name}">
                          
                          <h4 class="fw-bold">Image :</h4>
                          <input type="file" id="image_U" value=" ${data.image}">
                          <img src="../../public/imageT2/${data.image}" alt="sp1" class="w-25">
  
                          <h4 class="fw-bold">Price :</h4>
                          <input type="text" id="price_U" value=" ${data.price}">
  
                          <h4 class="fw-bold">Origin :</h4>
                          <input type="text" id="origin_U" value="${ data.origin}">
  
                          <h4 class="fw-bold">Description :</h4>
                          <textarea class="vertical-resize" name="" id="description_U" cols="3" rows="10" style="height:40px;" >${data.description}</textarea>
                       
                  </div>
                      
              
              <div class="d-flex mt-5 justify-content-between mx-5" id="orderCustomBtn">
                  <input type="reset" value="Reset">
                  <button type="button" id="updateBtn" >Update</button>
              </div>
          
              <form  class=" rounded-5" id="order_form" >
        
         
          `; 
          
          
        })
        .catch(() => {
          formUpdateAdmin.innerHTML = /*html*/ `
            <h2>Sản phẩm không tồn tại</h2>
            <a href="/">Quay lại trang chủ</a>
          `;
        });
        
        }
    

}

 