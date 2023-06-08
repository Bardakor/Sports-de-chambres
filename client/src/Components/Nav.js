import colorLogo from '../images/Logo.png';
import whiteLogo from '../images/LogoW.png';


const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
      setShowModal(true);
      setIsSignUp(false);
    };
  
    return (
      <nav>
        <div className="logo-container">
          <img
            className="logo"
            src={minimal ? whiteLogo : whiteLogo}
            alt="logo"
          />
        </div>
        {!authToken && !minimal && (
          <button
            className="nav-button"
            onClick={handleClick}
            disabled={showModal}
          >
            Log in
          </button>
        )}
      </nav>
    );
  };
  export default Nav;