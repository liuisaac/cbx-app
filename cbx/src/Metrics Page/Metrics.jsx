import NavBar from "../Transition-B/Transition-B"
export default function Metrics(){
    return(
        <div style={{width: "100vw", height: "100vh"}}>
           <NavBar/>
        
        <div style={{ display: 'flex', textAlign: 'center', color:'white',justifyContent: 'center', flexDirection: 'row' }}>
      <div style={{fontWeight: "bold",marginRight: '20%',marginTop:'5%', fontSize: "1.5rem"}}>
        <p>Metric 1</p>
        <p>Metric 1 Name</p>
        <p>Metric 2</p>
        <p>Metric 2 Name</p>
        <p>Metric 3</p>
        <p>Metric 3 Name</p>
      </div>
      <div style={{ display: 'inline-block',  color:'white',fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "3rem" }}>
        <p>Founded in 2023, CBX Capital Partners LP is</p>
        <p>Columbia’s first student-run private equity firm</p>
        <p>that seeks to co-invest with partner private</p>
        <p>investment firms on a minority basis. With the</p>
        <p>highest committed capital of any Columbia</p>
        <p>student-run investment vehicle, the firm is</p>
        <p>actively seeking additional investors for our first</p>
        <p>fund — CBX Partners I.</p>
      </div>
    </div>
    </div>
    )
}