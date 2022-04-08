import styles from '../../../styles/Home.module.css';
import Navbar from '../Navbar'
const Layout = ({children}) => {

  return (
    <main className={styles.main}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        {children}
      </main>
  )
}

export default Layout