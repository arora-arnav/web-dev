import profilePic from './assets/passport.png'

function Card(){
    return(
        <div className = "card">
            <img className = "card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className = "card-title">Arnav</h2>
            <p className = "card-text">Computer Engineering Student; Rookie Web Dev</p>
        </div>
    );
}
export default Card