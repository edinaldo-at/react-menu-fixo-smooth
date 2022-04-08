import styles from '../styles/Home.module.css'
import Layout from '../src/components/Layout';
import ListHome from '../src/components/ListHome';

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <ListHome />
      </Layout>
    </div>
  )
}
