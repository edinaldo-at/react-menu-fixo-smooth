import styles from '../../../styles/Home.module.css'

const ListHome = () => {
  return (
    <>
      <div id={"home"} className={`${styles.sections} ${styles.home}`}>
        <h1>Home</h1>
        <img src="/aranha.jpg" alt="home" />
      </div>

      <div id="services" className={`${styles.sections} ${styles.services}`}>
        <h1>Serviços</h1>
      </div>

      <div id="partnes" className={`${styles.sections} ${styles.partnes}`}>
        <h1>Parceiros</h1>
      </div>
    </>
  )
}

export default ListHome