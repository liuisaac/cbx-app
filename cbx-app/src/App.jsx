import styles from './style'
<<<<<<< HEAD
import { Navbar, Logo } from './components'
=======
import { Navbar, Transition_h } from './components'
>>>>>>> remotes/origin/transition_h

const App = () => {
  return (
    <div className="bg-black w-full h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Logo />
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