import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import arrow_icon from '../../assets/arrow_icon.svg'
const Services_Data = [
    {
        s_no:"01",
        s_name:"Web design",
        s_desc:"A website for managing charitable donations, where ..."
    },
    
    {
        s_no:"02",
        s_name:"Web design",
        s_desc:"This online platform offers features for storing notes ..."
    },
    {
        s_no:"03",
        s_name:"Web design",
        s_desc:"A site that authenticates between two e-mails to ensure that ..."
    },
    {
        s_no:"04",
        s_name:"Graphics design",
        s_desc:"I have designed many designs using Photoshop,canva,... such as: cards, covers......"
    },
    {
        s_no:"05",
        s_name:"Dashboard admin",
        s_desc:"I have designed many dashboards using PowerBI to control......"
    },
]
const Services =() => {
    return(
        <div id="services" className="services">
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
                {Services_Data.map((service,index)=>{
                    return <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            {/* <p>Read More</p> */}
                            {/* <img src={arrow_icon} alt="" /> */}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Services