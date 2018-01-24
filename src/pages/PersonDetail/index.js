import React, { Component } from 'react';
import * as githubApi from '../../utils/github';
import Loading from '../../components/Loading'
import PersonInfo from '../../components/PersonInfo'

class PersonDetail extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    console.log(this.props)
    const { match } = this.props
    const userName = match.params.userName

    githubApi.getUserInfo(userName).then(userInfo => {
      this.setState({
        userInfo,
        loading: false
      });
    })
  }
  
  render() {
    if (this.state.loading) return <Loading />;

    return (
      <div>
        <PersonInfo {...this.state.userInfo}/>
      </div>
    );
  }
}

export default PersonDetail;