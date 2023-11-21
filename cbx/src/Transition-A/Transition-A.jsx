import "./Transition-A.css";
import logo from '../logo.svg';

function TransitionA() {
  return (
    <div class="md:w-5/6 lg:w-4/6 px-5 py-24 mx-auto h-screen flex ">
      <div class="m-auto transitionA flex justify-center"  alt="logo">
          <img src={logo} class="h-40 inline p-0" alt="logo" />
          <span class="text-9xl py-4" >logo text</span>
      </div>
    </div>
  );
}

export default TransitionA;
