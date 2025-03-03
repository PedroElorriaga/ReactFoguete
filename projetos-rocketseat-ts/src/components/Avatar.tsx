import styles from './Avatar.module.css'

interface AvatarProps {
    feed?: boolean, // ? Defino que o valor pode ser opcional
    avatar: string
}

export function Avatar({ feed = true, avatar }: AvatarProps) {
    return (
        <img className={feed ? styles.avatarFeed : styles.avatarSidebar} src={avatar} />
    )
}