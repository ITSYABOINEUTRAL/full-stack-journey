import { Component } from 'react'
import Navbar from './components/layout/Navbar'
import './App.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Users from './components/Users/Users'
import axios from 'axios'

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({loading: true})
    const response = await axios.get('https://api.github.com/users')
    this.setState({users: response.data, loading: false})
    console.log(response.data)
  }

  render() {
    return (
      <>
        <Navbar icon={ faGithub } title="GitHub Finder" />
        <Users loading = {this.state.loading} users = {this.state.users}/>
      </>
    )
  }
}

export default App