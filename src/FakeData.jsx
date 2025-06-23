import axios from 'axios';
import React, { Component } from 'react'

export default class FakeData extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],
            errorMsg:''
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/100')
        .then(response => {
            console.log(response)
            this.setState({
                data:response.data
            })
        })
        .catch(res => {console.log(res)
            this.setState({
                errorMsg:'error in Fetching the Fake Data'
            })
        }
        )
    }

  render() {
    const{data,errorMsg} = this.state
    return (
      <div>
        <h1>List Of Fake Data</h1>
        {data.length? data.map(data => <h1>{data.id + " : " + data.title}</h1>):null}
        {data? <h1>{data.id + " : " + data.title}</h1>:null}
        {errorMsg?<h1>{errorMsg}</h1>:null}
      </div>
    )
  }
}
