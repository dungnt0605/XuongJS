const BannerComponent = () => {
    return `
    <section class="banner">
            <h1>Buy your dream plants</h1>
            <div class="banner-text flex">
                <p><span>50+</span> <br>Plant Species</p>
                <p id="banner-text"><span>100+</span> <br>Customers</p>
            </div>
            <div class="search">
                <input type="text" class="search__input" placeholder="What are you looking for?">
                <button class="search__button"><a href="#"> <i class="fa-solid fa-magnifying-glass"></i></a>
                </button>
            </div>
        </section>
    `;
}
export default BannerComponent;