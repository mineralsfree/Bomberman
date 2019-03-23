import React, {Component} from 'react';
import './App.css';
import Field from './Components/Field/Field'
import pos from './Components/Field/default_position'
class App extends Component {
    constructor(props) {
        super(props);
        this.escFunction = this.escFunction.bind(this);
        this.update = this.update.bind(this);
        this.position = pos;
        this.delta = {x: 0, y: 0};
        this.field = [];
        this.name='';
        this.registred = false;
        this.bomb = false;
        this.socket = new WebSocket('ws://localhost:5000/');
    }

    escFunction(event) {
      if (!this.registred){
        let name = 'Nikita';
        let obj = {};
        obj.registration = 1;
        obj.name = name;
        this.socket.send(JSON.stringify(obj));
        this.registred = true;
      }

      this.delta = {x: 0, y: 0};
        switch (event.keyCode) {
            case 39:
                this.delta = {x: 0, y: 1};
                break;
            case 38:
                this.delta = {x: -1, y: 0};
                break;
            case 37:
                this.delta = {x: 0, y: -1};
                break;
            case 40:
                this.delta = {x: 1, y: 0};
                break;
            case 32:
                this.bomb= true;
                break;
          default: return;
        }
        let socketRequest = {
          delta: this.delta,
          position: this.position,
          name: this.name,
          time: new Date().getTime()
        };
        let delta = JSON.stringify(socketRequest);
      this.socket.send(delta);
        this.forceUpdate(()=> this.bomb = false);
        this.delta = {x: 0, y: 0};
    }
    update = function() {
        this.forceUpdate();
    };
    componentDidMount() {
      //this.socket.onopen = () => this.socket.send(JSON.stringify({type: 'greet', payload: 'F2AgataF'}));
      this.socket.onmessage = ({data}) => {
        console.log(data);
        this.field = JSON.parse(data).field;
        this.forceUpdate();
      };
        document.addEventListener("keydown", this.escFunction, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.escFunction, false);
    }

    render() {
        const {value} = this.props;
        return (
            <div className="App">
                <Field
                    position={this.position}
                    field={this.field}
                    delta={this.delta}
                    bomb = {this.bomb}
                    callback = {this.update}
                    socket = {this.socket}
                />

            </div>
        );
    }
}

export default App;
