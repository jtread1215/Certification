// export * from './FbDisplay'; 
// export * from './FbDoneBtn'; 
// export * from './FbRestartBtn';   

import FbDisplay from './FbDisplay'; 
import FbStartBtn from './FbRestartBtn'; 
import FbDoneBtn from './FbDoneBtn';
import './style.css';  

function FeedBackComponent(props) {

    return(
        <div className='feedback-container'>
        <FbDisplay >

        </FbDisplay>
        <FbDoneBtn />
        <FbStartBtn />
        </div>
    ); 
}
export default FeedBackComponent; 

