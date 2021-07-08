import React from 'react';
import Manual from '../Manual'
import './style.css'
// function handleSubmit() {
//   const url = "localhost"
// }
//  function onChange(){

//  };

function Upload() {
    return (
      <div id="upload-form-wrapper">
        <div id="header-upload">
            <h2 class="header-upload">Upload File</h2>
        </div>
        <form action="/" enctype="multipart/form-data" method="POST" class="choose-file">
            <input type="file" accept="*.csv" id="file-to-upload" />
            <input type="submit" value="Upload" class="upload-btn" />
        </form>

        <br></br>
        <Manual />
      </div> 
    );
};
export default Upload; 