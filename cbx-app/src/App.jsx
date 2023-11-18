import styles from './style'
import { Navbar, Transition_h } from './components'

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-black w-screen h-screen text-white`}> 
        <div className={`w-full h-full flex flex-row justify-center items-center`}>
          <Transition_h />
        </div>
      </div>
    </div>
  )
}

export default App