import React, { Component } from 'react';
import {BrowserRouter as Router,  Route,  Link,Switch} from 'react-router-dom';
import { Button,form,FormControl,Table,responsive } from 'react-bootstrap';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import Pagination from "react-js-pagination";
import '../style/home.css';

class Home extends Component {
	 constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
  render() {

  	
 
    return (
      <div className="Home">
      <div className="wrap">
		<header>
	       	<span>악하게 살지 말자</span>
	       	<span className="welcome">
	       	<span>누군가님 환영합니다.</span>
	       	<Button ><Link to="/sign-in">로그아웃</Link></Button>
	       	</span>
	    </header>
       	<br/>

	    <section>
	       	<span className="float-clear"></span>
	    	<h1>These Days</h1>
			<Tabs onSelect={(index, label) => console.log(label + ' selected')}>
   				 <Tab label=" 공개 일기  ">
   				 	 <Button className="open-diary-write-btn">공개일기작성</Button>
   				 	 <Table responsive striped bordered condensed hover>
	                  <thead>
	                    <tr>
	                      <th className="index-num"></th>
	                      <th>제목</th>
	                      <th>작성자</th>
	                      <th className="hit">조회수</th>
	                      <th className="date">날짜</th>
	                    </tr>
	                  </thead>
	                  <tbody>
	                    <tr>
	                      <td>1</td>
	                      <td><p className="table-title"><Link to="/read-open-diary">홍삼...</Link></p></td>
	                      <td><p className="thisp">누군가</p></td>
	                      <td></td>
	                      <td>Table cell</td>
	                    </tr>
	                    <tr>
	                      <td>2</td>
	                      <td><p className="table-title">sssss</p></td>
	                      <td><p className="thisp">누군가</p></td>
	                      <td></td>
	                      <td>Table cell</td>
	                    </tr>
	                    <tr>
	                      <td>3</td>
	                      <td><p className="table-title">onetwothrseven eight nine</p></td>
	                      <td><p className="thisp">누군가</p></td>
	                      <td></td>
	                      <td>Table cell</td>                    
	                    </tr>
	                    <tr>
	                      <td>4</td>
	                      <td><p className="table-title">onetwothreefouht nine</p></td>
	                      <td><p className="thisp">누군가</p></td>
	                      <td></td>
	                      <td>Table cell</td>                    
	                    </tr>
	                    <tr>
	                      <td>5</td>
	                      <td><p className="table-title">onetwothreefourfivesixseven eight nine</p></td>
	                      <td><p className="thisp">누군가2</p></td>
	                      <td>111</td>
	                      <td>Table cell</td>                    
	                    </tr>
	                    <tr>
	                      <td>6</td>
	                      <td><p className="table-title">onetwothreefourfivesixseven eight nine</p></td>
	                      <td><p className="thisp">누군가</p></td>
	                      <td></td>
	                      <td>Table cell</td>                    
	                    </tr>
	                    <tr>
	                      <td>7</td>
	                      <td><p className="table-title">onetwothre44even eight nine</p></td>
	                      <td><p className="thisp">yourcss</p></td>
	                      <td></td>
	                      <td>Table cell</td>                    
	                    </tr>
	                      <tr>
	                      <td>8</td>
	                      <td><p className="table-title">onetwothree1ight nine</p></td>
	                      <td><p className="thisp">누군가</p></td>
	                      <td></td>
	                      <td>Table cell</td>                    
	                    </tr>
	                    <tr>
	                      <td>9</td>
	                      <td><p className="table-title">onetwothreefourfivesixseven eight nine</p></td>
	                      <td><p className="thisp">누군가</p></td>
	                      <td></td>
	                      <td>Table cell</td>                    
	                    </tr>
	                    <tr>
	                      <td>10</td>
	                      <td><p className="table-title">onetwothreefourfivesixseven eight nine</p></td>
	                      <td><p className="thisp">누군가가가</p></td>
	                      <td>33</td>
	                      <td>2018.10.10</td>                    
	                    </tr>
	                  </tbody>
                </Table>
                 
                 <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={350}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
   				 </Tab>
   				 <Tab label=" 개인 일기 ">
   				 	 <Button className="my-diary-write-btn"><Link to="/write-my-diary">개인 일기 작성</Link></Button>	
   				 	 <Table responsive striped bordered condensed hover>
	                  <thead>
	                    <tr>
	                      <th className="index-num"></th>
	                      <th>제목</th>
	                      <th>작성자</th>
	                      <th className="hit">조회수</th>
	                      <th className="date">날짜</th>
	                    </tr>
	                  </thead>
	                  <tbody>
	                    <tr>
	                      <td>1</td>
	                      <td><p className="table-title"><Link to="/read-my-diary">제목</Link></p></td>
	                      <td><p className="thisp">누군가</p></td>
	                      <td></td>
	                      <td>Table cell</td>
	                    </tr>
	                    <tr>
	                      <td>2</td>
	                      <td><p className="table-title">onenine</p></td>
	                      <td><p className="thisp">누군가</p></td>
	                      <td></td>
	                      <td>Table cell</td>
	                    </tr>
	                    <tr>
	                      <td>3</td>
	                      <td><p className="table-title">onene</p></td>
	                      <td><p className="thisp">누군가</p></td>
	                      <td></td>
	                      <td>Table cell</td>                    
	                    </tr>
	                    <tr>
	                      <td>4</td>
	                      <td><p className="table-title">onnine</p></td>
	                      <td><p className="thisp">누군가</p></td>
	                      <td></td>
	                      <td>Table cell</td>                    
	                    </tr>
	                    <tr>
	                      <td>5</td>
	                      <td><p className="table-title">on nine</p></td>
	                      <td><p className="thisp">누군가2</p></td>
	                      <td>111</td>
	                      <td>Table cell</td>                    
	                    </tr>
	                    <tr>
	                      <td>6</td>
	                      <td><p className="table-title">onete</p></td>
	                      <td><p className="thisp">skskskskyourdfdf</p></td>
	                      <td></td>
	                      <td>Table cell</td>                    
	                    </tr>
	                    <tr>
	                      <td>7</td>
	                      <td><p className="table-title">oe</p></td>
	                      <td><p className="thisp">yourchikoritassss</p></td>
	                      <td></td>
	                      <td>Table cell</td>                    
	                    </tr>
	                      <tr>
	                      <td>8</td>
	                      <td><p className="table-title">onetwothree123123123123123123123123xseven eight nine</p></td>
	                      <td><p className="thisp">누군가</p></td>
	                      <td></td>
	                      <td>Table cell</td>                    
	                    </tr>
	                    <tr>
	                      <td>9</td>
	                      <td><p className="table-title">onine</p></td>
	                      <td><p className="thisp">누군가</p></td>
	                      <td></td>
	                      <td>Table cell</td>                    
	                    </tr>
	                    <tr>
	                      <td>10</td>
	                      <td><p className="table-title">onetwothreefourfivesixseven eight nine</p></td>
	                      <td><p className="thisp">누군가가가</p></td>
	                      <td>33</td>
	                      <td>2018.10.10</td>                    
	                    </tr>
	                  </tbody>
                </Table>
                </Tab>
			</Tabs>
		</section>

      </div>
      </div>
    );
  }
}

export default Home;
