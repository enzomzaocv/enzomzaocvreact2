import React from 'react';

const SignUp= (onRouteChange) =>{
	return(
		<main className="pa4 black-80">
  <div className="measure center">
    <div id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
  	  {/*Nombre*/}
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="nombre">Nombre</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="nombre"  id="nombre"/>
      </div>
  	  {/*Apellido*/}
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="apellido">Apellido</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="apellido"  id="apellido"/>
      </div>
      {/*email*/}
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      {/*password*/}
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    </div>
    <div className="">
      <input 
      onClick={()=>onRouteChange('signin')}
      className="b ph3 pv2  ba b--black bg-transparent grow pointer f6 dib"
      type="button" 
      value="Sign up"
      /> 
    </div>
  </div>
</main>
		)
}


export default SignUp;