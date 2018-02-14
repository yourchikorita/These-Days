import React, { Component } from 'react';
import { Button,Table,responsive,condensed } from 'react-bootstrap';
import '../style/SignIn.css';

export default class OpenBoard extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td><p className="table-title">this is open</p></td>
        <td><p className="thisp">누군가</p></td>
        <td></td>
        <td>Table cell</td>
       </tr>
    );
  }
}

