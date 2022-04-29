import styles from './Field.module.scss'

export default function Field() {
    return (
        <div>
            <h1>This is a H1</h1>
            <p className={styles.base}>base text</p>
            <p className={styles.base_banana}> banana text </p>
        </div>
    )
}