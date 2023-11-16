export const validationUserData = (values)=>{
    let errors={};
    
    if(values.name.trim()==''){
        errors.name="UserName is required";
    }
    else if(values.name.trim().length < 3){
        errors.name = 'userName must be at least 3 characters'
    }

    if(values.email.trim()==''){
        errors.email="Email is required";
    }
    else if(values.email.trim().length < 13){
        errors.email = 'Email must be at least 10 characters'
    }

    if(values.password.trim()==''){
        errors.password="Password is required";
    }
    else if(values.password.trim().length < 5){
        errors.password = 'Password must be at least 5 characters'
    }
    else if(values.password.trim().length > 13){
        errors.password = 'Password must be at most 13 characters'
    }

    return errors;
} 