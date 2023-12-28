import "./Transition-A.css";
// import logo from './CBX_white.png';
import logoCbx from './CBX_white_cbx.png';
import logoPartners from './CBX_white_partners.png';
import background from "./Home_Page_Background.jpg";

function TransitionA() {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      
    }} className="bg-black">
      <div className="md:w-5/6 lg:w-4/6 px-5 py-24 m-auto h-screen flex">
        <div className="m-auto transitionACbx flex justify-center"  alt="logo">
            <img src={logoCbx} className="inline p-0 h-24  object-scale-down" alt="logo" />
        </div>
        <div className="m-auto p-5 flex justify-center display-inline"  alt="logo">
          <div className="transitionASlash"></div>
        </div>
        <div className="m-auto transitionAPartners flex justify-center w-3/4"  alt="logo">
            <img src={logoPartners} className="inline p-0 h-24 object-scale-down" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default TransitionA;
