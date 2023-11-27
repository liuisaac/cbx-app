import styles from './style'
import { Navbar, Logo } from './components'

const App = () => {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Logo />
        </div>
      </div>
    </div>
  )
}

export default App