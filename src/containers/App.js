import React, {Component} from 'react';
import './App.css';
import NavBar from '../components/shared/navbar'
import Input from '../components/main/input'
import Logo from '../components/main/logo'
import Image from '../components/main/image'
import Rank from '../components/main/rank'
import Particles from 'react-particles-js';
import particulasConfig from './particlesjs-config.json';
import SignIn from '../components/signin/signin'
import SignUp from '../components/signup/signup'

const voidUser={
  "id":0,
  "nombre": "",
  "email": "",
  "joined": "",
  "entries": 0
}

class App extends Component{
  constructor(){
    super();
    this.state= {
      input:'',
      imageurl:'',
      bbox:{},
      route: 'signin',
      issignedin: false,
      currentUser:voidUser
    }
  }

  onInputChange=(event)=>{
    this.setState({bbox:{}})
    this.setState({imageurl: event.target.value});
  }

  onSubmit=(imageurl)=>{
    this.setState({imageurl:this.state.imageurl});

    fetch('https://enzochaconreactapp.herokuapp.com/imageurl', {
      method: 'POST', // or 'PUT'
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({imageurl:this.state.imageurl})
    })
    .then(apiresponse => apiresponse.json())
    .then(apiresponse=>{
      if(apiresponse){
        fetch('https://enzochaconreactapp.herokuapp.com/image', {
          method: 'PUT', // or 'PUT'
          body: JSON.stringify({id:this.state.currentUser.id}), // data can be `string` or {object}!
          headers:{'Content-Type': 'application/json'}
        })
        .then(countresponse => countresponse.json())
        .then(countresponse =>{
          this.setState(Object.assign(this.state.currentUser, { entries: countresponse}));
        })
      }
      this.displayFaceBox(this.definirBox(apiresponse))
    })
    .catch(error => console.log(error))
  }

  definirBox=(data)=>{
    const coordenadas = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('imagen');
    const width = Number(image.width);
    const height= Number(image.height);
    console.log('ancho',width);
    console.log('largo',height);
    return {
      bottom_row: height - (height * coordenadas.bottom_row),
      left_col: (width * coordenadas.left_col),
      right_col: width - (width * coordenadas.right_col),
      top_row:(height * coordenadas.top_row)
    }
  }
  displayFaceBox=(box)=>{
    this.setState({bbox:box});
  }
  onRouteChange=(route)=>{
    if(route === 'signout'){
      this.setState({issignedin: false})
    }else if(route === 'home'){
      this.setState({issignedin:true})
    }
    this.setState({route:route});
  }
  loadUser=(user)=>{
    this.logout();
    this.setState({currentUser:{...user}});
  }
  logout=()=>{
    this.setState({issignedin:false});
    this.setState({currentUser:this.voidUser});
  }

  render(){
    return(
      <div>
        <Particles  className='particles'
                  params={JSON.parse(JSON.stringify(particulasConfig))}
                  />
        <NavBar onRouteChange={this.onRouteChange} issignedin={this.state.issignedin} logout={this.logout}/>
        { this.state.route === 'home'
            ?
              <div>
                <Logo/>
                <Rank user={this.state.currentUser}/>
                <Input onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
                <Image imageDetect={this.state.imageurl} bbox={this.state.bbox}/>
              </div>
            : 
              (this.state.route === 'signin'
            ?
              <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
            :
              <SignUp onRouteChange={this.onRouteChange}/>
              )
          }
        
      </div>
      )
  }
}

export default App;
