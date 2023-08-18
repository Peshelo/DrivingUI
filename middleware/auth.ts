export default defineNuxtRouteMiddleware((to, from) => {
    // if (to.params.id === '1') {
    //   return abortNavigation()
    // }
    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
    // if (to.path !== '/') {
    //   return navigateTo('/')
    // }
    // abortNavigation(
    //     createError({
    //       statusCode: 404,
    //       message: 'Page could not be found :(',
    //     })
    //   );

    console.log(to);
    console.log(from);

})