export function ValiSignUp ( user ){
    if( !user.email || !user.password || !user.repass){
        return false;
    }
    if(user.pass !== user.repass){
        return false;
    }
    return true;
}
export function ValiSignIn ( user ){
    if( !user.email || !user.password || !user.repass){
        return false;
    }
    return true;
}