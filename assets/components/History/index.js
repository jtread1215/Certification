import React from 'react'; 
import '../History/style.css'; 

function History(){
    //onLoad || onChange= alert(Hello {User.name})
    return(
        <div className="hx-container">
            <div className="hx-nav-container">
                <button>View History</button>
                <button>Close History</button>
                <button>Logout</button>
            </div>
            <div className="hx-table">
                <table>
                    <colgroup>
                    <col span="5"></col></colgroup>

                    <thead>
                        <tr>
                            <th>Reg Last Name</th>
                            <th>Reg First Name</th>
                            <th>Email</th>
                            <th>Success</th>
                            <th>Error</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>{name.last}</tr>
                    <tr>{name.first}, {name.title}</tr>
                    <tr>{email}</tr>
                    <tr>{msg.ok}</tr>
                    <tr>{msg.error}</tr>
                    </tbody>
                </table>
            </div>
        </div>
    ); 
}
