import api from "../../api";
import { router } from "../../utils";

export function Create() {
    const createBtn = document.querySelector('#createBtn');
    createBtn.addEventListener('click', submitCreate);
}

async function submitCreate() {
    try {
        const name = document.querySelector('#name_C').value;
        const image_P = document.querySelector('#image_C');
        const price = document.querySelector('#price_C').value;
        const origin = document.querySelector('#origin_C').value;
        const description = document.querySelector('#description_C').value;

        const imageName = image_P.files[0].name;

        const pruduct = {
            name,
            image: imageName,
            price ,
            origin ,
            description
        };

        const {data} = await api.post("/trees" ,{...pruduct});
        console.log(data);
        if(data) {
            const confirmValue = confirm("Thêm Sản Phẩm Thành Công !");
            if(confirmValue){
                router.navigate("/admin");
            }

        }
 
    } catch (error) {
        console.log(error);
    }
}

export function Update() {
    const updateBtn = document.getElementById('updateBtn');
    console.log(updateBtn);
    
    document.addEventListener('DOMContentLoaded', function() {
        updateBtn.addEventListener('click', submitUpdate);
    });
}

export async function submitUpdate() {
    try {
        const id = await document.querySelector('#id_U').value;
        const name = await document.querySelector('#name_U').value;
        let image_P = await document.querySelector('#image_U');
        const price = await document.querySelector('#price_U').value;
        const origin = await document.querySelector('#origin_U').value;
        const description = await document.querySelector('#description_U').value;

        let imageNameNew = document.querySelector('image_U').files[0].name;
        console.log("hihi");

        const pruductNew = {
            name: name,
            price: price,
            description: description,
            origin: origin,
            image: imageNameNew
        };

        const {data} = await api.put(`/trees/${id}` ,{...pruductNew});
        console.log(data);
        if(data) {
            const confirmValue = confirm("Thêm Sản Phẩm Thành Công !");
            if(confirmValue){
                router.navigate("/admin");
            }

        }
 
    } catch (error) {
        console.log(error);
    }
}

export async function deleteProduct(id) {
    try {
        const response = await api.delete(`/trees/${id}`);
        if (response.status === 200) {
            const confirmValue = confirm("Bạn đã Xóa thành công !");
            if(confirmValue){
                router.navigate("/admin");
            }
        } else {
            throw new Error('Failed to delete product');
        }
    } catch (error) {
        throw new Error('Failed to delete product: ' + error.message);
    }
}