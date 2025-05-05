import { store } from "configStore.js"

import validacao from './util/validacoes';

function serialize(resource={}) {
  return JSON.stringify(resource);
}




  //pego o usuario a partir do token
  export const getUserFromToken = async ()=>{
    
      // 
      // verifico se tem token
      var token = getToken();
      // token = "ldb4xLTuKWjuIoZLkWI1RiGAq8t1QQEiJ9QkIHTG8OtsfDrT6QyHpreMmzMBcuKS";
      

      if(token){
        // 
          //se tenho pego o usuario
        var usuario = await getMeUser(token);
        // 
        store.dispatch({type:'USER_LOGIN', payload:usuario})
        return usuario;
      
      }else{
        return false;
      }
  }


  

  export const getToken = ()=>{
    return localStorage.token
  }

  export const saveToken = (token)=>{
    localStorage.token = token
  }


  export const logout = async(cb)=>{

    // 

    var logout = window.SI3CONFIG.logout;
    
    const token = localStorage.token;

    var response = await fetch(logout, {
                method:'POST',
                body: null,  //e sem credenciais para funcionar
                credentials: 'include',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': 'Token '+token
                }
              });
    
    // 
    if(!response.ok){
      return response;
    }

    var resFinal = await response.json();

    delete localStorage.token;
    store.dispatch({type:'USER_LOGOUT', payload:{}})
    if (cb) cb()
  }



  const loggedIn = ()=>{
    return !!localStorage.token
  }



//pego o usuario com a token atual
 const getMeUser = async (token) => {
    
    var login = window.SI3CONFIG.meUser;
    //LETODO - vazer pegar real so subdominio
    var response = await fetch(login, {
                method:'GET',
                body: undefined,
                credentials: 'include',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': 'Token '+token
                }
              });

    if (!response.ok) {
        return false;
    }

    var usuario = await response.json();
    // 
    
    //salvo o token
    return usuario;
}
//ldb4xLTuKWjuIoZLkWI1RiGAq8t1QQEiJ9QkIHTG8OtsfDrT6QyHpreMmzMBcuKS


export const loginRequest = async ({email, password})=> {
    // 
    var login = window.SI3CONFIG.login;
    var resources = {password:password};

    //verifico se estou logando com email ou usuario
    if(validacao.isEmail(email)){
        resources.email = email;
    }else{
        resources.username = email;
    } 

    var body = JSON.stringify(resources);
    const token = localStorage.token;
    var response = await fetch(login, {
                method:'POST',
                body: body,
                // credentials: 'include',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  // 'Authorization': 'Token '+token,
              }
              });
    
    // 
    if(!response.ok){
      return response;
    }

    var resFinal = await response.json();
    
    //salvo o token
    saveToken(resFinal.key);

    return response;

}




