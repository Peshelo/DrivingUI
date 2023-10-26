export default defineNuxtRouteMiddleware((to, from) => {
   

    // console.log(token)
    if(to.path !== '/auth/login'){
        const token = localStorage.getItem('token');
        if(token === null){
            console.log("Not authorised");
            return navigateTo('/auth/login');
        } 
    }
   

})