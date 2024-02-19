import api from "../../api";
import { router } from "../../utils";
import { ValiSignIn } from "../../validation/auth";

const HendelSignIn = () => {
  const signinBtn = document.querySelector("#signin");
  signinBtn.addEventListener("click", submitSignIn);
};

async function submitSignIn() {
  try {
    const email = document.querySelector("#email").value;
    const pass = document.querySelector("#pass").value;

    const user = {
      email,
      pass,
    };
    const { data }= await api.get("/user");
    
    const  data1  = data.find((item) => item.email === user.email) ;
    console.log(data1);
    
    if (ValiSignIn(user) ) {
      if (data1) {
        sessionStorage.setItem("user", JSON.stringify(data1));
        const comfirmValue = confirm(
          `Đăng nhập thành công , bạn có muốn chuyển sang trang home k  ! , ${data1.email}`
        );
        if (comfirmValue) {
          router.navigate("/");
        }
      }else{
        alert("Sai mật khẩu hoặc Email vui lòng đăng nhập đúng ! ");
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export default HendelSignIn;
