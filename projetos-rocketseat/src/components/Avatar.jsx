import styles from './Avatar.module.css'

export function Avatar({ feed = true, avatar }) {
    return (
        <img className={feed ? styles.avatarFeed : styles.avatarSidebar} src={avatar} />
    )
}