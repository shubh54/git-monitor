import React from "react";
import {Link, Route, Redirect} from "react-router";
import {PrimaryButton, IButtonProps} from 'office-ui-fabric-react/lib/Button';
import {Label} from 'office-ui-fabric-react/lib/Label';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    let {code} = this.props.location.query;
    this.state = {
      code
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:9999/authenticate/' + this.state.code)
      .then((resp) => {
        sessionStorage.setItem("git-oauth-token", resp.data.token)
        if (Boolean(resp.data.token)) {
          this.setState({token: resp.data.token})
        } else {
          this.setState({token: 0})
        }
      }, (err) => {
        console.log(err);
      });
  }

  render() {
    const iconStyle = {
      marginRight: "10px"
    };
    if (Boolean(this.state.token)) {
      window.location.href = "/home"
    } else {
      return (
        <div className="loginDiv">
          <PrimaryButton
            onClick={() => {
            location.href = "https://github.com/login/oauth/authorize?client_id=cf9c97ea862ef7028aa8&scope=us" +
                "er,repo"
          }}>
            <i class="ms-Icon ms-Icon--GitGraph" aria-hidden="true" style={iconStyle}></i>
            Sign in with Github
          </PrimaryButton>
        </div>
      );
    }
  }
}
