
import './App.css'
import NavBar from './component/NavBar';
import RouletteComponent from './component/Roulette';
import styles from './app.module.css'

function App() {

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        formulário
        <RouletteComponent />

      </div>
    </div>
  )
}

export default App
