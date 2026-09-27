const UserItem = (props) => {

  const { avatar_url, login, html_url } = props.user;

  return (
    <div className="card text-center">
      <img src={avatar_url} alt={login} className="round-img" style={{ width: "60px" }} />
      <h3>{login}</h3>
      <a href={html_url} className="btn btn-dark btn-sm my-1" style={{ margin: "5px" }}>
        View Profile
      </a>
      <a href={`${html_url}?tab=repositories`} className="btn btn-dark btn-sm my-1" style={{ margin: "5px" }}>
        View Repositories
      </a>
    </div>
  );
};

export default UserItem;