import React, { Component } from 'react';
import {BrowserRouter as Router,  Route,  Link,Switch} from 'react-router-dom';
import { Button,form,FormControl,Table,responsive,FormGroup,ControlLabel } from 'react-bootstrap';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import '../style/write-my-diary.css';

class WriteMyDiary extends Component {
  render() {
    return (
      <div className="Write-my-diary">
      <div className="wrap">
		<header>
	       	<span>악하게 살지 말자</span>
	       	<span className="welcome">
	       	<Button ><Link to="/home">홈</Link></Button>
	       	<Button ><Link to="/sign-in">로그아웃</Link></Button>
	       	</span>
	    </header>
       	<br/>

	    <section>
	       	<span className="float-clear"></span>
	    	<h1>These Days</h1>
	    	<p>	개인 일기 작성 중... </p>
	    	<br/>
	    	<form>
		    	 <FormControl  className="diary-title"
	                type="text"
	                placeholder="제목"
	             />
		    	 <br />
			     <FormControl className="diary-contents" componentClass="textarea" placeholder="내용 입력" />
		     </form>
		     <br/>
		     <div className='btn-box'>
		    <Button className="diary-write-finish-btn"><Link to="/home">완료</Link></Button>
		    <Button className="diary-write-cancel-btn"><Link to="/home">취소</Link></Button>
		    </div>
		</section>
 
      </div>
      </div>
    );
  }
}

export default WriteMyDiary;
