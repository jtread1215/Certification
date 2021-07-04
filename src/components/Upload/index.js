import React from 'react'; 

function Upload() {
    return(
        <div id="upload-form-wrapper">
        <div id="header-upload">
            <h2 class="header-upload">Upload File</h2>
        </div>
    <form action="/" enctype="multipart/form-data" method="POST" class="choose-file">
        <input type="file" name="file-to-upload"></input>
        <input type="submit" value="Upload" class="upload-btn"></input>
    </form>
        </div> 
    );
};
export default Upload; 