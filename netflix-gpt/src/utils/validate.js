
export const validatefields=(name,email,password)=>{
    let validdateobj={
        emailerror:'',
        passworderror:'',
        nameerror:'',
    }
  const isEmailvalid =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

  const ispasswordvalid = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(password);

 const isnamevalid = /^[a-zA-Z ]{2,30}$/.test(name);


  if(!ispasswordvalid){
    validdateobj.passworderror='Password is not valid';
  }

  
  if(!isEmailvalid){
    validdateobj.emailerror='Email ID is not valid';
  }

 
  if(!isnamevalid){
    validdateobj.nameerror='name is not valid';
  }

 
  return validdateobj;


}