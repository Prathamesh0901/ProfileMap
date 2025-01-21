const Card = ({ id, photo, name, description, handleClick }) => {
    return (
        <div class="profile-card" key={id}>
            <img src={photo} alt="Profile Picture" class="profile-photo" />
            <div class="profile-info">
                <h3 class="profile-name">{name}</h3>
                <p class="profile-description">{description}</p>
                <button class="summary-button" onClick={handleClick} id={id}>Summary</button>
            </div>
        </div>

    )
}

export default Card;