import React, { Component } from "react";
import axios from "axios";

//**COMPONENT  EDIT CLIENTS REGISTERED  */

export default class EditClients extends Component {
  constructor(props) {
    super(props);

    this.onChangeClientName = this.onChangeClientName.bind(this);
    this.onChangeClientPhone = this.onChangeClientPhone.bind(this);
    this.onChangeClientEmail = this.onChangeClientEmail.bind(this);
    this.onChangeClientCompany = this.onChangeClientCompany.bind(this);
    this.onChangeClientRole = this.onChangeClientRole.bind(this);
    this.onChangeClientDescription = this.onChangeClientDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: "",
      phone: "",
      email: "",
      company: "",
      role: "",
      description: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/update/" +this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          phone: response.data.phone,
          email: response.data.email,
          company: response.data.company,
          role: response.data.role,
          description: response.data.description,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  

  onChangeClientName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeClientPhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangeClientEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeClientCompany(e) {
    this.setState({
      company: e.target.value,
    });
  }

  onChangeClientRole(e) {
    this.setState({
      role: e.target.value,
    });
  }

  onChangeClientDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      company: this.state.company,
      role: this.state.role,
      description: this.state.description,
    };

    axios
      .post(
        "http://localhost:5000/users/update/" + this.props.match.params.id,
        user
      )
      .then((res) => {
        console.log(res.data)
        if(res.data.isPhoneNumber === true){
          alert(res.data.msg);
          this.props.history.push("/");
        }else{
          alert(res.data.msg);
        }
      }); 
  }

  render() {
    return (
      <div>
        <h3>Edit Profile</h3>
        <div style={{ marginLeft: '10%', marginRight: '10%' }}>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeClientName}
            />
          </div>
          <div className="form-group">
            <label>Phone: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangeClientPhone}
            />
          </div>

          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeClientEmail}
            />
          </div>
          <div className="form-group">
            <label>Company: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.company}
              onChange={this.onChangeClientCompany}
            />
          </div>
          <div className="form-group">
            <label>Role: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.role}
              onChange={this.onChangeClientRole}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeClientDescription}
            />
          </div>
          <div className="button floatLeft">
            <button type="submit" onClick={this.handleSubmit} className="btn btn-primary" > SUBMIT </button>
          </div>         
        </form>
        </div>
      </div>
    );
  }
}
