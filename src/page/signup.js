const SignupPage = () => {
    return `
        <main >
            <section class="SignIn flex">
                <div id="exit"><a href="/" ><i class="fa-solid fa-xmark"></i></a></div>
                <section class="form-img">
                    <h2 class="mt-5">Welcome to Greenmind</h2>
                </section>
                <section class="form">
                    <h2>Sign Up</h2>
                    <form action="">
                        <label for="">Username</label>
                        <input type="text" id="username" required>
                        <label for="">Email</label>
                        <input type="email" id="email" required>
                        <label for="">PassWord</label>
                        <input type="password" name="" id="pass">
                        <label for="">RepassWord</label>
                        <input type="password" name="" id="repass">
                        <button type="button" id="signup">Sign Up</button>
                        
                        <h6 class="text-center">Do not have an account ?<a class="ms-3" href="/signin" >Sign In</a></h6>
                    </form>
                </section>
            </section>

        </main>
    `;
}
export default SignupPage;