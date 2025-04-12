import styles from "@/styles/404.module.css"
const Custom404 = () => {
    return (
        <div className={styles.custom_errors}>
            <img src="/images/page-not-found.png" alt="error image" className={styles.error__image} />
            <h2>404 | Page Not Found</h2>
        </div>
    )
};

export default Custom404;