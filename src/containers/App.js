import React, {Component} from 'react';
import './App.css';
import NavBar from '../components/shared/navbar'
import Input from '../components/main/input'
import Logo from '../components/main/logo'
import Image from '../components/main/image'
import Rank from '../components/main/rank'
import Particles from 'react-particles-js';
import particulasConfig from './particlesjs-config.json';
import Clarifai from 'clarifai';
import SignIn from '../components/signin/signin'
import SignUp from '../components/signup/signup'
const app = new Clarifai.App({apiKey: '0ec2241b9ef442e9aefc036b79dc1d39'});

class App extends Component{
  constructor(){
    super();
    this.state= {
      input:'',
      imageurl:'',
      bbox:{},
      route: 'signin',
      issignedin: false
    }
  }

  onInputChange=(event)=>{
    this.setState({input: event.target.value});
    console.log(this.state);
  }

  onSubmit=()=>{
    console.log('click submit');
    this.setState({imageurl:this.state.input})
    //Respuesta Clarifai
    // En {id: Clarifai.GENERAL_MODEL... reemplazamos GENERAL_MODEL por el model que realmente vamos a utilizar
    app.models.predict('a403429f2ddf4b49b307e318f00e528b', this.state.input)
      .then(response => {
        // There was a successful response
        this.displayFaceBox(this.definirBox(response));

      })
      .catch(error => {
        // There was an error
        console.log(error)
      });
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
    console.log(box);
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

  render(){
    return(
      <div>
        <Particles  className='particles'
                  params={JSON.parse(JSON.stringify(particulasConfig))}
                  />
        <NavBar onRouteChange={this.onRouteChange} issignedin={this.state.issignedin}/>
        { this.state.route === 'home'
            ?
              <div>
                <Logo/>
                <Rank/>
                <Input onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
                <Image imageDetect={this.state.imageurl} bbox={this.state.bbox}/>
              </div>
            : (this.state.route === 'signin'
            ?
              <SignIn onRouteChange={this.onRouteChange}/>
            :
              <SignUp onRouteChange={this.onRouteChange}/>
              )
          }
        }
      </div>
      )
  }
}

export default App;
