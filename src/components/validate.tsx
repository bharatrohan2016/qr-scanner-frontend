
const validate = (values:any) => {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const errors:any = {};
    if(values.name === ""){
        errors.name = "Name is required";
    }
    if(values.email === ""){
        errors.email = "Email is required";
    }
    else if(expression.test(values.email) === false){
        errors.email = "Email is invalid";
    }
    if(values.barcode === ""){
        errors.barcode = "Barcode is required";
    }
    console.log(errors);
    
    return errors;
}

export default validate;