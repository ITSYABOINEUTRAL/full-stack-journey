const UserItem = (props) => {
  const { avatar_url, login, html_url } = props.user

  return (
    <div className="card user-card">
      <img src={avatar_url} alt={login} className="round-img" />
      <h3>{login}</h3>
      <a href={html_url} className="btn btn-dark btn-sm">
        View Profile
      </a>
      <a href={`${html_url}?tab=repositories`} className="btn btn-dark btn-sm">
        Repositories
      </a>
    </div>
  )
}

export default UserItem