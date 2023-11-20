import styles from './styles.module.css'
const FromComponent = () => {
    return (
        <div className={styles.form}>
            <form>
                <h2 className={styles.text}>Bw Experience</h2>
                <p className={styles.text}>Escolha o nome dos participantes</p>

                <div className="">
                    <label htmlFor="">
                        Nome
                    </label>
                    <input />
                </div>
            </form>
        </div>
    )
}

export default FromComponent