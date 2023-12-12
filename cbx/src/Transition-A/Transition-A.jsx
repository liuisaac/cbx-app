import "./Transition-A.css";
import logo from './CBX_white.png';
import background from "./Home_Page_Background.jpg";

function TransitionA() {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }} class="bg-black">
      <div class="md:w-5/6 lg:w-4/6 px-5 py-24 mx-auto h-screen flex">
        <div class="m-auto transitionA flex justify-center w-3/4"  alt="logo">
            <img src={logo} class="inline p-0" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default TransitionA;
