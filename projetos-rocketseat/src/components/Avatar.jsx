import styles from './Avatar.module.css'

export function AvatarSidebar(props) {
    return (
        <img className={styles.avatarSidebar} src={props.avatar} />
    )
}

export function AvatarFeed(props) {
    return (
        <img className={styles.avatarFeed} src={props.avatar} />
    )
}
