import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    state={
        searchData:""
    }
    render(){
        return <div>App</div>
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'))