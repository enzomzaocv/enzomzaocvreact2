import React,{useState} from 'react';

const SignUp= ({onRouteChange}) =>{
  const [form,setForm] = useState({nombre:"", email:"", password:""});
  const [classes,setClasses] = useState({nombre:"", email:"", password:""});
  const [validField,setValidField] = useState({nombre:false, email:false, password:false});
  const [error, setError] = useState("");
  const onFormChange=(event)=>{
    const value =event.target.value;
    switch(event.target.name){
      case 'username':
        if(changeClasses(event.target.name,value)){
          setValidField({...validField,nombre:true});
        }else{
          setValidField({...validField,nombre:false});
        }
        setForm({...form,nombre:value})
        break;
      case 'email':
        if(changeClasses(event.target.name,value)){
          setValidField({...validField,email:true});
        }else{
          setValidField({...validField,email:false});
        }
        setForm({...form,email:value})
        break;
      case 'password':
        if(changeClasses(event.target.name,value)){
          setValidField({...validField,password:true});
        }else{
          setValidField({...validField,password:false});
        }
        setForm({...form,password:value})
        break;
        default:
       return false;

    }
  }
  const changeClasses=(controlName,value)=>{
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegEx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    const usernameRegEx =/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    const error = "b--red";
    const match = "b--green";
    switch(controlName){
      case 'password':
        if(passwordRegEx.test(String(value))){
          setClasses({...classes,password:match})
          return true;
        }else{
          setClasses({...classes,password:error})
          return false;
        }

      case 'email':
        if(emailRegEx.test(String(value))){
          setClasses({...classes, email:match})
          return true;
        }else{
          setClasses({...classes, email:error})
          return false;
        }

      case 'username':
        if(usernameRegEx.test(String(value))){
          setClasses({...classes, nombre:match})
          return true;
        }else{
          setClasses({...classes, nombre:error})
          return false;
        }

      default:
       return false;

    }
  }
  const validateForm=()=>{
    return !(validField.nombre && validField.email && validField.password);
  }
  const submitForm=()=>{
    setError("response")
    var url = 'https://enzochaconreactapp.herokuapp.com/signup';
    var data = form;
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res =>res.json())
    .catch(error => console.log('error:', error))
    .then(response =>{
      console.log(response)
      if(response> 0){
        onRouteChange('signin');
      }else{
        setError(String(response));
      }
    }
    );
  }

	return(
		<main className="pa4 black-80">
  <div className="measure center">
  <form onChange={onFormChange}>
    <div id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
  	  {/*Nombre*/}
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="nombre">Nombre de Usuario</label>
        <input className={`pa2 input-reset ba ${classes.nombre} bg-transparent hover-bg-black hover-white w-100`}
         type="text" 
         name="username" 
         id="nombre"
         required
        />
      </div>
      {/*email*/}
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className={`pa2 input-reset ba ${classes.email} bg-transparent hover-bg-black hover-white w-100`}
         type="email" 
         name="email" 
         id="email-address"
         required
        />
      </div>
      {/*password*/}
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className={`pa2 input-reset ba ${classes.password} bg-transparent hover-bg-black hover-white w-100`}
          type="password"
          name="password"
          id="password"
          required
        />
      </div>
    </div>
    <span className="red">{error}</span>
    <div className="">
      <input 
      onClick={submitForm}
      className="b ph3 pv2  ba b--black bg-transparent grow pointer f6 dib"
      type="button" 
      value="Sign up"
      disabled={validateForm()}
      /> 
    </div>
  </form>
  </div>
</main>
		)
}


export default SignUp;