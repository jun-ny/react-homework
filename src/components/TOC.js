import React, { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState){    // return false -> render 출력 안 함, return true -> render 출력
      if(this.props.data === newProps.data) {     //이전 값과 이후 값을 비교해서, 값이 바뀔 때만 render를 수정한다.
        return false;
      }
      return true;
    }
    render() {
      console.log('TOC render');
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while( i < data.length) {
        lists.push(
        <li key={data[i].id}>
          <a
           href={"/content/"+data[i].id}
           data-id={data[i].id}
           onClick={function(e){
            e.preventDefault();
            this.props.onChangePage(e.target.dataset.id);
           }.bind(this)}
          >{data[i].title}</a>
          </li>)
        
        i = i + 1;
      }
      return (
        <nav>
        <ul>
                {lists}
        </ul>
        </nav>
      );
    }
  }

export default TOC; // 이 코드를 사용할 수 있게 해줌
