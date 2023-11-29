import "./Transition-A.css";
import logo from './CBX_white.png';

function TransitionA() {
  return (
    <div class="md:w-5/6 lg:w-4/6 px-5 py-24 mx-auto h-screen flex bg-black">
      <div class="m-auto transitionA flex justify-center w-3/4"  alt="logo">
          <img src={logo} class="inline p-0" alt="logo" />
      </div>
    </div>
  );
}

export default TransitionA;
