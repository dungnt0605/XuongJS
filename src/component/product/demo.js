import api from "../../api";

const demo = async () => {
    const productNew = document.getElementById('productNew');

    try {
        const {data} = await api.get("/trees");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
export default demo;