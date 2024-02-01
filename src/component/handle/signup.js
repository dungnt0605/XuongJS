import api from "../../api";
import { ValiSignUp } from "../../validation/auth";

const HandelSignUp = () => {
  const signupBtn = document.querySelector("#signup");
  console.log(signupBtn);

  signupBtn.addEventListener("click", submitSignup);
};

async function submitSignup() {
  try {
    const email = document.querySelector("#email").value;
    const username = document.querySelector("#username").value;
    const pass = document.querySelector("#pass").value;
    const repass = document.querySelector("#repass").value;

    const user = {
      username,
      email,
      pass,
    };
    if (ValiSignUp({ ...user, repass })) {
      const res = await api.post("/signup", user);
      console.log(res);
    }
  } catch (error){
    console.log(error);
  }
}

export default HandelSignUp;
