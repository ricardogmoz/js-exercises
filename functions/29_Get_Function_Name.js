function named(){
    console.log(arguments.callee.name);
}

named();