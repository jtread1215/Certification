import React from 'react' 
import FbDisplay from '../FeedbackComp/FbDisplay'; 
import FbDoneBtn from '../FeedbackComp/FbDoneBtn';
import FbRestartBtn from '../FeedbackComp/FbRestartBtn'; 
import '../FeedbackComp/index'; 

function FeedbackPage(props) {
  
  return(
    <div>
    <FbDisplay />
    <FbDoneBtn />
    <FbRestartBtn />
    </div>
  )
}