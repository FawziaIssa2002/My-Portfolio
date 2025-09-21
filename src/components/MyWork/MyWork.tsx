import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import project1_img from '../../assets/01/final.png';
import project2_img from '../../assets/02/11.png'
import project3_img from '../../assets/03/weather.png'
import project4_img from '../../assets/04/mokup.png'
import project5_img from '../../assets/05/lap.png'

const mywork_data = [
    {
        w_no:1,
        w_name:"Web design",
        w_img:project1_img
    },
    {
        w_no:2,
        w_name:"Web design",
        w_img:project2_img
    },
    {
        w_no:3,
        w_name:"Web design",
        w_img:project3_img
    },
    {
        w_no:4,
        w_name:"Web design",
        w_img:project4_img
    },
    {
        w_no:5,
        w_name:"Web design",
        w_img:project5_img
    }
]

const MyWork =() => {
      return(
            <div id="work" className="mywork">
                <div className="mywork-titile">
                    <h1>My latest work</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="mywork-container">
                    {mywork_data.map((work,index)=>{
                          return <img key={index} src={work.w_img} alt=" " />
                      })}
                  </div>
              </div>
          )
      }
      export default MyWork
      
      

//  export default  MyWork = () => {
//   return (
//     <div id="work" className="mywork">
//       <div className="mywork-titile">
//         <h1>My latest work</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//       <div className="mywork-container">
//         {mywork_data.map((work: WorkItem, index: number) => (
//           <img key={index} src={work.w_img} alt="" />
//         ))}
//       </div>
//     </div>
//   );
// };
