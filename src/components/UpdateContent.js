import React, { Component } from 'react';
class UpdateContent extends Component{
    constructor(props) {     // props는 read only이기 때문에 가변적으로 사용할 수 있는 state를 사용한다
      super(props);
      this.state = {
        title:this.props.data.title,
        desc:this.props.data.desc
      }
      this.inputFormHandler = this.inputFormHandler.bind(this); // .bind(this)를 주입시켜줌
    }
    inputFormHandler(e) {
      this.setState({[e.target.name]:e.target.value});
    }
    render(){
      console.log(this.props.data);
      console.log('UpdateContent render');
      return (
        <article>
      <h2>Update</h2>
      <form action="/create_process" method="post"
       onSubmit={function(e){
         e.preventDefault();
         
         this.props.onSubmit(e.target.title.value, e.target.desc.value);
       
       }.bind(this)}
      >
        <p><input 
        type="text" 
        name="title"
        placeholder="title" 
        value={this.state.title} 
        onChange={this.inputFormHandler}>
          </input></p>
        <p><textarea 
        name="desc" 
        placeholder="description"
        value={this.state.desc}
        onChange={this.inputFormHandler}
        ></textarea></p>
        <p><input type="submit"></input></p>
      </form>
        </article>
      )
    }
  }

  export default UpdateContent;