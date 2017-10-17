import React from "react";
import axios from 'axios';
import {
  DetailsList,
  IColumn
} from 'office-ui-fabric-react/lib/DetailsList';

let ListColumns = [{
  key: 'name',
  name: 'Repo Name',
  fieldName: 'name',
}, {
  key: 'open_issues',
  name: 'Open Issues',
  fieldName: 'open_issues'
}, {
  key: 'default_branch',
  name: 'Default Branch',
  fieldName: 'default_branch'
}]

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }
  componentDidMount() {
    axios.get(`https://api.github.com/user/repos?affiliation=collaborator,owner&access_token=${sessionStorage.getItem("git-oauth-token")}`).then((resp)=> {
      this.setState({repos: resp.data})
    }, (err)=> {
      console.log(err);
    });
  }
  render() {
    return (
      <div>
        <div className="pageTitle">
          <h3>User Repositories</h3>
        </div>
        <DetailsList className="ms-font-m" items={ this.state.repos } columns={ ListColumns } selection={ false }/> 
      </div>
    );
  }
}
