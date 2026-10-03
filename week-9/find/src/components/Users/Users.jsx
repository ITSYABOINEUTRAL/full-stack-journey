import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

const Users = ({ users, loading, searched, clearUsers }) => {
  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      <div className="users-grid">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>

      {searched && (
        <button className="btn btn-dark btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  )
}

export default Users