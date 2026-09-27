import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
        <h1><FontAwesomeIcon icon={faGithub} size="lg" /> GitHub Finder</h1>
    </nav>
  )
}

export default Navbar