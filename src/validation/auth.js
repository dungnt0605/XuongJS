import { router } from "../utils";

export function ValiSignUp(user) {
  if (!user.email || !user.pass || !user.repass ||!user.username) {
    return false;
  }
  if (user.pass !== user.repass) {
    return false;
  }
  return true;
}
export function ValiSignIn(user) {
  if (!user.email || !user.pass ) {
    return false;
  }
  return true;
}


export function checkLoginStatus ()  {
 
  const userJson = sessionStorage.getItem("user");
  if (userJson) {
      const user = JSON.parse(userJson);
      return `
      
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      ${user.username}
          </a>      
        <ul class="dropdown-menu">
        ${user.role === "admin" ? "<li><a class='dropdown-item' href='/admin'>Quản lý</a></li>" : ""} 
          <li><a class="dropdown-item" href="/logout">Đăng Xuất</a></li>
        </ul>
    `;
      // console.log(user.username);
    } else {
      return `<a href='/signup' class='text-dark'>Đăng ký</a> /<a href='/signin' class='text-dark'>Đăng nhập</a>`;
    }
  
}



export  function logout() {
  sessionStorage.removeItem("user"); 
  router.navigate("/");
  checkLoginStatus();
}