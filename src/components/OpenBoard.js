import React, { Component } from 'react';
import '../style/SignIn.css';

export default class OpenBoard extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.boardNum+1}</td>
        <td><p className="table-title">{this.props.item.title}</p></td>
        <td><p className="thisp">{this.props.item.user_name}</p></td>
        <td></td>
        <td>{this.props.item.edit_date}</td>
       </tr>
    );
  }
}

