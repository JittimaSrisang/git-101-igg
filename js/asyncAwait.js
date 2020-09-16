const { resolve } = require("path")

myFirstAsync = () => {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve('Success');
        }, 250);
    })
}
msg = async () =>{
    const successMessage = await myFirstAsync();
    console.log ('yay!', successMessage);
}
msg()