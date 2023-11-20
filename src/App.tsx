
import './App.css'
import NavBar from './component/NavBar';
import RouletteComponent from './component/Roulette';
import styles from './app.module.css'
import FromComponent from './component/Form';

function App() {

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <FromComponent />
        <RouletteComponent />

      </div>
    </div>
  )
}

export default App
