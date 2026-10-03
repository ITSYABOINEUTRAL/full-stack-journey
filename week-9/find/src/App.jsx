import { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Users from './components/Users/Users';
import {
  getUsers,
  searchUsers as searchGithubUsers
} from './components/Utils';
import SearchBar from './components/Users/SearchBar';

class App extends Component {
  state = {
    users: [],
    initialUsers: [],
    loading: false,
    searched: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const users = await getUsers();

    if (users) {
      this.setState({
        users: users,
        initialUsers: users,
        loading: false
      });
    } else {
      this.setState({
        loading: false
      });
    }
  }

  // Search GitHub Users
  searchUsers = async (text) => {
    this.setState({ loading: true });

    const users = await searchGithubUsers(text);

    if (users) {
      this.setState({
        users: users,
        loading: false,
        searched: true
      });
    } else {
      this.setState({
        loading: false
      });
    }
  };

  // Clear GitHub Users
  clearUsers = () => {
    this.setState({
      users: this.state.initialUsers,
      searched: false
    });
  };

  render() {
    return (
      <>
        <Navbar
          icon={faGithub}
          title="GitHub Finder"
        />

        <div className="container">
          <SearchBar
            searchUsers={this.searchUsers}
            searched={this.state.searched}
          />

          <Users
            loading={this.state.loading}
            users={this.state.users}
            searched={this.state.searched}
            clearUsers={this.clearUsers}
          />
        </div>
      </>
    );
  }
}

export default App;