import styles from "./Profile.module.css";

const Profile = ({ img, username, bio }) => {
    return (
        <div className={styles.profile}>
            <div className={styles.profile__img}>
                <img src={img} alt="Profile" />
            </div>
            <h1 className={styles.profile__username}>{username}</h1>
            <p className={styles.profile__bio}>{bio}</p>
        </div>
    );
};

export default Profile;
