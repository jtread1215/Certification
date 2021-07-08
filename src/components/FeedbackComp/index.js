import React from "react"; 
import "./style.css"
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

function FeedbackComp() {
    return(
        //success or error 
        <div className="msg-container">
            <div class="logo">
            
        </div>

        <div class="marquee">
            Certificate of Achievement

        </div>

        <div class="assignment">
            This certificate is presented to
        </div>

        <div class="person">
            Roy Sizemore
        </div>

        {/* <div class="date">
            On this <span>{{day}}</span> day of the month {{month}} of the year {{year}}
            {{getDate()}}
        </div> */}

        <div class="reason">
            Title: FullStack Developer
        </div>

        {/* <div class="witness">
            witnessed by {{getWitnessFullName()}}
            <div class="signed"></div>
        </div> */}
    <p>Generated by I Was There!</p>
    <Link  href="/upload" ><Button variant="contained" color="primary" type="submit">Add Attendee</Button></Link>
        </div>

        
    ); 
}
export default FeedbackComp; 