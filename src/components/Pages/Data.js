import React from 'react';
import Upload from '../Upload/index';
import Org from '../Org/index'; 
 
import { DateComp, FullName, Select, Witness } from '../components/Manual'; 


<div className='upload-container'>
    <Upload />
    <div className='org-container'>
        <Org />
    </div>
    <div className='manual-container'>
    <h2 className="header-manual">Enter the information into the form</h2>
    <form id='manual-form' className='manual-form'>
        <Select />
        <FullName />
        <DateComp />
        <Witness />
    </form>
        
    </div>
</div>