const FoooterComponent = () => {
    return `
    <footer >
        <section class="contact">
            <img src="../public/logo.png" alt="logo" id="logo">
            <p>We help you find your dream plant</p>
            <div class="contact-logo flex">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
        </section>
        
            <div class="service-item">
                <h4>Information</h4>
                <p><a href="#">About</a></p>
                <p><a href="#">Product</a></p>
                <p><a href="#">Blog</a></p>
            </div>
            <div class="service-item">
                <h4>Company</h4>
                <p><a href="#">Community</a></p>
                <p><a href="#">Career</a></p>
                <p><a href="#">Our story</a></p>
            </div>
            <div class="service-item">
                <h4>Contact</h4>
                <p><a href="#">Getting Started</a></p>
                <p><a href="#">Pricing</a></p>
                <p><a href="#">Resources</a></p>
            </div>
        
    </footer>
    `;
}
export default FoooterComponent;