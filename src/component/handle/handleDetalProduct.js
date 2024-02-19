import instance from "../../api";

const hendleDetalProductPage = async (data) => {
    
    const id = data.id;
    console.log(id);
    const productDetail = document.getElementById("detail");
    if (id) {
      instance
        .get(`/trees/${id}`)
        .then(({ data }) => {
          console.log(data);
          productDetail.innerHTML = /*html*/ `

    <div class="row">
        <div class="col-lg-5">
            <div class="card">
            <img src="../public/imageT2/${data.image}" alt="" style="height:70vh; object-fit: cover;">
            </div>
        </div>
        <div class="col-lg-7">
            <div class="card border border-0  ps-5">
                <div class="card-body">
                    <p>Trees</p>
                    <h3 class="fs-1 fw-bold ">${data.name}</h3>
                    <div class="d-flex" id="detailSize">
                        <a href="#" class="px-4 text-decoration-none  py-1 me-3 border border-1 rounded-pill">Small 30cm</a>
                        <a href="#" class="px-4 text-decoration-none  py-1 me-3 border border-1 rounded-pill">Medium 40cm</a>
                        <a href="#" class="px-4 text-decoration-none  py-1 me-3 border border-1 rounded-pill">Large 60cm</a>
                    </div>
                    <p class="fs-2 my-4 " >$ ${data.price}</p>
                    <p class=" mb-4 ">${data.description}</p>
                    <div class="row mb-5">
                        <div class="col-sm-3">
                            <div class="card border ps-3 pe-0 border-0 ">
                                <i class="m-auto my-3 fa-regular fa-sun" style="font-size: 50px; color: var(--blue);"></i>
                                <p class="text-center">Bright direct light</p>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card rounded-0 ps-3 pe-0 border-0 border-start border-info">
                                <i class="m-auto my-3 fa-solid fa-droplet" style="font-size: 50px; color: var(--blue);"></i>
                                <p class="text-center">Every 1 -2 weeks</p>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card rounded-0 ps-3 pe-0 border-0 border-start border-info">
                                <i class="m-auto my-3 fa-solid fa-temperature-half" style="font-size: 50px; color: var(--blue);"></i>
                                <p class="text-center">18'C - 30'C</p>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card rounded-0 ps-3 pe-0 border-0 border-start border-info">
                                <i class="m-auto my-3 fa-solid fa-paw" style="font-size: 50px; color: var(--blue);"></i>
                                <p class="text-center">toxic if consumed</p>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="text-white fw-bold px-5 py-3 rounded-pill" style="background: var(--blue2);">Add to cart</a>
                </div>

            </div>
        </div>
    </div>

`;
  })
  .catch(() => {
    productDetail.innerHTML = /*html*/ `
      <h2>Sản phẩm không tồn tại</h2>
      <a href="/">Quay lại trang chủ</a>
    `;
  });
}
};
export default hendleDetalProductPage;