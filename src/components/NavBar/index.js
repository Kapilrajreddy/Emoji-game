// Write your code here.
import './index.css'

const Navbar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="navbar-container">
      <div className="navbar-main-container">
        <div className="navbar-left-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="emoji-heading">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-card-container">
            <p className="score-card-text">Score : {currentScore}</p>
            <p className="score-card-text">Top Score : {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

/*
    const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="nav-bar-container">
      <div className="title-with-score-container">
        <div className="logo-and-title-container">
          <img
            className="emoji-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
*/
