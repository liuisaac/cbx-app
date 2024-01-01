
function ShowCompanies(props){
    const data= props.data

    return (
         <div className="company-details-container">
<div className="company-details">
  <div className="logo-container">
    <img src={data.logo} alt="Company Logo" className="logo-image" />
  </div>
  <div className="details">
    <p className="intro">{data.intro}</p>
    <p className="bio">{data.bio}</p>
    <p>Status: {data.status}</p>
    <p>Sector: {data.sector}</p>
    <p>Investment Year: {data.investmentYear}</p>
    <p>Region: {data.region}</p>
  </div>
</div>
</div> 
    )
}

export default ShowCompanies;