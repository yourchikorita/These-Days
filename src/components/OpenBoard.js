import React, { Component } from 'react';
import '../style/SignIn.css';

export default class OpenBoard extends Component {
  render() {
    console.log(this.props);
    return (
      <tr>
        <td>{this.props.boardNum}</td>
        <td><p className="table-title">{this.props.item.title}</p></td>
        <td><p className="thisp">{this.props.item.user_name}</p></td>
        <td></td>
        <td>Table cell</td>
       </tr>
    );
  }
}

