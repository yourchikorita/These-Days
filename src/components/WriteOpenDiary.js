import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button,FormControl } from 'react-bootstrap';
import '../style/write-open-diary.css';
import firebase from 'firebase';

class WriteOpenDiary extends Component {
	saveData(ev){
    const database = firebase.database();
    const diaryRef = database.ref('/diary');
	   
	    diaryRef.push({
	     title:this.title.value,
	      text:this.text.value
	    });
		
  }
  render() {
    return (
      <div className="Write-open-diary">
      <div className="wrap">
		<header>
	       
	       	<span className="welcome">
	       	<Button ><Link to="/home">홈</Link></Button>
	       	<Button ><Link to="/sign-in">로그아웃</Link></Button>
	       	</span>
	    </header>
       	<br/>

	    <section>
	       	<span className="float-clear"></span>
	    	<h1>These Days</h1>
	    	<p>	오픈 일기 작성 중... </p>
	    	<br/>
	    	<form>
		    	 <input ref={ref=>this.title =ref } className="diary-title"
	                type="text"
	                placeholder="제목"
	             />
		    	 <br />
			     <textarea ref={ref=>this.text =ref } className="diary-contents" componentClass="textarea" placeholder="내용 입력" />
		     	
		     </form>
		     <br/>
		     <div className='btn-box'>
		    <Button onClick={this.saveData.bind(this)} className="diary-write-finish-btn"><Link to="/home">완료</Link></Button>
		    <Button className="diary-write-cancel-btn"><Link to="/home">취소</Link></Button>
		    </div>
		</section>
 
      </div>
      </div>
    );
  }
}

export default WriteOpenDiary;
