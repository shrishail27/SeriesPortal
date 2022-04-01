import './starbuck.css'
import starbuck from './images/starbuck.png'
import asu from './images/asu.png'
import calendar from './images/calendar.png'

const Starbuck = () => {
    return ( 
        <div className='container'>
            <div className='navlinks'>
                <ul>
                    <li><img className='img2' src={starbuck} alt="" /></li>
                    <li><img className='img1' src={asu} alt="" /></li>
                    <li>Home</li>
                    <li>Student Support</li>
                    <li>Degree Search</li>
                    <li>FAQ</li>
                    <li>Work for Starbucks</li>
                </ul>
                    <button className='btn1'>Get info</button>
                    <button className='btn2'>Apply now</button>
            </div>
            <div className='div1'>
                <p> <b>Work for Starbucks?</b> Chat with current scholars and ASU representatives at our next Virtual Open House on <img className='img3' src={calendar} alt="" /> <b>March 23rd from 9:30 to 11 a.m. PST. </b></p>
                </div>



        </div>
        
     );
}
 
export default Starbuck;