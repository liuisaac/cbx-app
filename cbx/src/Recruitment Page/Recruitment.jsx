
// import '../../dist/output.css'; // Import Tailwind CSS
import NavBar from "../Transition-B/Transition-B";
import { Link } from 'react-router-dom'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
const Recruitment = () => {




    return (
        <div className='h-screen w-screen flex flex-col'>
            <NavBar />
            <div id="recruitment" className="flex flex-col justify-center items-center font-bold text-4xl text-white h-full w-full mb-56">
                <div>
                    Applications for 2024 are now open
                    {/* application open fall 2024 */}
                    <br />
                    <span className="text-xl font-bold">
                        {/* Use ScrollLink instead of Link */}
                        <ScrollLink style={{
                            textDecoration: "underline",
                            cursor: "pointer",
                            transition: "color 0.3s ease", // Adding a transition for a smooth effect
                            color: "lightblue", // Default color
                        }} to="applicationForm" smooth={true} duration={500}>
                            Investment team application
                            {/* Investment team resume*/}
                        </ScrollLink>{' '}
                         open: August 2, 2024
                    </span> <br />
                    <span style={{fontSize:"15px"}}>
                    Operations team application open: January 29, 2024
                    
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Recruitment;