import React, { Component } from "react";
import "./style.css";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

export default class CreateAttendee extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCert = this.onChangeCert.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      first_name: '',
      last_name: '',
      title: '',
      email: '',
      cert: ''
    }
  }

    sendMessage() {
    alert(`The certificate has been sent to `+ this.state.email);
  }

  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value
    })
  }

  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value
    })
  }
  
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeCert(e) {
    this.setState({
      cert: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const attendee = {
      firstName: this.state.first_name,
      lastName: this.state.last_name,
      title: this.state.title,
      email: this.state.email,
      cert: this.state.cert,
    }

    console.log(attendee);

    this.sendMessage();
    window.location = '/feedback';
  }


 render() {
    return(

    <div id="manual-wrapper">
        <div id="header-manual">
            <h2 class="header-manual">Enter the information into the form</h2>
            <form id="manual-entry-form" onSubmit={this.onSubmit}>
                
                <div>
                    <label for="certificate-type-manual"><h3>Certificate of</h3></label>
                    <select
                      ref="selections"
                      required
                      className="form-control"
                      value={this.state.cert}
                      onChange={this.onChangeCert}
                    >
                      <option value="Attendance">Attendance</option>
                      <option value="Acheivement">Achievement</option>
                      <option value="Completion">Completion</option>
                      <option value="Excellence">Excellence</option>
                    </select>
                </div>
                  <br></br>

                <div className="form-group">
                <label for="registrant-first-name-input-manual" />
                <Input type="text"
                  required
                  className="form-control"
                  id="registrant-first-name-input-manual" 
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={this.onChangeFirstName}
                  />
                </div>

                <div className="form-group">
                <label for="registrant-first-name-input-manual" />
                <Input type="text"
                  required
                  className="form-control"
                  id="registrant-first-name-input-manual" 
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={this.onChangeLastName}
                  />
                </div>

                <div className="form-group">
                <label for="registrant-first-name-input-manual" />
                <Input type="text"
                  required
                  className="form-control"
                  id="registrant-first-name-input-manual"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  />
                </div>

                <div className="form-group">
                <label for="registrant-first-name-input-manual" />
                <Input type="text"
                  required
                  className="form-control"
                  id="registrant-first-name-input-manual"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  />
                </div>

                <br></br>
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
        </div>
    </div>
    );
  }
}
