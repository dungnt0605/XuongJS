const SigninPage = () => {
    return `
    <main >
            <section class="SignIn flex">
                <div id="exit"><a href="/" ><i class="fa-solid fa-xmark"></i></a></div>
                <section class="form-img">
                    <h2 class="mt-5">Welcome to Greenmind</h2>
                </section>
                <section class="form">
                    <h2>Sign In</h2>
                    <form action="">
                        <label for="">Email</label>
                        <input type="email" required>
                        <label for="">PassWord</label>
                        <input type="password" name="" id="">
                        <button type="submit">Sign in</button>
                        <label for="" id="label">Login with social account ? </label>
                        <div class="icon flex">
                            <i class="fa-brands fa-google fa-2x" style="color: #000000;"></i>
                            <i class="fa-brands fa-facebook fa-2x" style="color: #000000;"></i>
                            <i class="fa-brands fa-instagram fa-2x" style="color: #000000;"></i>
                        </div>
                        <h6 class="text-center">Do not have an account ?<a class="ms-3" href="/signup" >Sign Up</a></h6>
                    </form>
                </section>
            </section>

        </main>
    `;
}
export default SigninPage;