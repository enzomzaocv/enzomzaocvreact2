import React,{useState} from 'react';

const SignIn = ({onRouteChange,loadUser})=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onEmailChange=(event)=>{
    setEmail(event.target.value);
  }
  const onPasswordChange=(event)=>{
    setPassword(event.target.value)
  }
  const onSubmitForm=(event)=>{
    setError("response")
    var url = 'https://enzochaconreactapp.herokuapp.com/signin';
    var data = {email:email, password:password };
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res =>res.json())
    .catch(error => console.log('error:', error))
    .then(user =>{
      if(user.id){
        loadUser(user);
        onRouteChange('home');
      }else{
        setError(String(user));
      }
    }
    );
  }

	return(
    <article className="center mw6 ba b--black-10 mv4 shadow-5">
		<div className="pa4 black-80 ">
  <div  className="measure center">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
      <span className="red">{error}</span>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input
         className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          type="email" name="email-address" 
          id="email-address"
          onChange={onEmailChange}
        />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input 
         className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
         type="password" 
         name="password"  
         id="password"
         onChange={onPasswordChange}
        />
      </div>
      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
    </fieldset>
    <div className="">
      <input
         
         className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
         type="submit"
         value="Sign in"
         onClick={onSubmitForm}
        />
    </div>
    <div className="lh-copy mt3">
      <p className="f6 link dim black db pointer" onClick={()=>onRouteChange('signup')}>Sign up</p>
    </div>
  </div>
</div>
</article>
		)
}

export default SignIn;