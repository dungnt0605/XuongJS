import api from "../../api";

export async function  getTrees  () {
    const tabletreesAll = document.getElementById("table");
    try {
        const {data } = await api.get('/trees');
        console.log(data);
        
        
            
       const contentTrees = `
       <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>IMAGE</th>
            <th>DESCRIPTION</th>
            <th></th>

        </tr>` +  data.map((e) => `
            <tr>
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.price}</td>
                <td><img src="../../public/imageT2/${e.image}" alt="sp1" class="w-25"></td>
                <td>${e.description}</td>
                <td class="w=25"> <a href="/admin/delete/${e.id}" class="btn btn-secondary fs-6">Delete</a> <a href="/admin/update/${e.id}" class="btn btn-danger fs-6">Update</a> </td>
            </tr>
        `).join(' ');
    
   
    tabletreesAll.innerHTML = contentTrees;
    } catch (error) {
        console.log(error);
    }
}