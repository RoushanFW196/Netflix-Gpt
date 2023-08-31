
export const validatefields=({full_name,email,password})=>{
    let validdateobj={
        emailerror:'',
        passworderror:'',
        nameerror:'',
    }
  const isEmailvalid =email?/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email):null;

  const ispasswordvalid =password? /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password):null;

 const isnamevalid =full_name? /^[a-zA-Z ]{2,30}$/.test(full_name):null;


  if(!ispasswordvalid && password){
    validdateobj.passworderror='Password is not valid.It should be min 8 letter, with at least a symbol, upper and lower case letters and a number.';
  }

  
  if(!isEmailvalid && email){
    validdateobj.emailerror='Email ID is not valid';
  }

 
  if(!isnamevalid && full_name){
    validdateobj.nameerror='name is not valid';
  }

 
  return validdateobj;


}