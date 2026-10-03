import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = (props) => {
  const submit = (e) => {
    e.preventDefault()
    props.searchUsers(e.target.text.value)
    e.target.text.value = ''
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="search-container">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" name="text" placeholder="Search users..." />
      </div>

      {!props.searched && (
        <input type="submit" className="btn btn-dark btn-block" value="Search" />
      )}
    </form>
  )
}

export default SearchBar