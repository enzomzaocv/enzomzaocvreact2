import React, {Component} from 'react';
import './App.css';
import NavBar from '../components/shared/navbar'
import Input from '../components/main/input'
import Logo from '../components/main/logo'
import Image from '../components/main/image'
import Rank from '../components/main/rank'
import Particles from 'react-particles-js';
import particulasConfig from './particlesjs-config.json';



class App extends Component{
  constructor(){
    super();
    this.state= {
      input:''
    }
  }

onInputChange= (event)=>{
  console.log(event.target.value)
}
onSubmit= () =>{
  console.log('click submit');
}
  componentDidMount(){


  }

  render(){
    return(
      <div>
      <Particles  className='particles'
                params={JSON.parse(JSON.stringify(particulasConfig))}
                />
      <NavBar/>
      <Logo/>
      <Rank/>
      <Input onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
      <Image/>
      </div>
      )
  }
}

export default App;
