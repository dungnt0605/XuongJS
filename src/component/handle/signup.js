
import api from "../../api";
import { router } from "../../utils";
import { ValiSignUp } from "../../validation/auth";

const HandelSignUp = () => {
  const signupBtn = document.querySelector("#signup");
  signupBtn.addEventListener("click", submitSignup);
};

async function submitSignup() {
  try {
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const pass = document.querySelector("#pass").value;
    const repass = document.querySelector("#repass").value;
    // console.log(email);
    // console.log(pass);

    const user = {
      username,
      email,
      pass,
    };
    if (ValiSignUp({ ...user, repass })) {
      const {data} = await api.post("/user", {
        ...user , 
        role:"member",
        address: "",
        phone: "",
      });
      console.log(data);
      if(data){
        const comfirmValue = confirm(`Đăng ký thành công , bạn có thể đăng nhập ngay ! , ${data.email}` );
        if(comfirmValue){
        router.navigate("/signin");
        }
      }
    }
  } catch (error){
    console.log(error);
  }
}

export default HandelSignUp;
