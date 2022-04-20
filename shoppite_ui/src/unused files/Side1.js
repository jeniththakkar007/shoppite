import './Side.css';
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FaHome} from 'react-icons/fa';
import {CgToggleOff , CgHomeAlt} from 'react-icons/cg';
import {BsFillPeopleFill} from 'react-icons/bs';
import{GoHome} from 'react-icons/go';
import{GrServices} from 'react-icons/gr';
import {AiOutlineSolution} from 'react-icons/ai';
import {MdContactPage} from 'react-icons/md';
import Nav from './Nav';
import Sidebar from '../Sidebar';
 function b1() {
    console.log("clicked!!!");
     
 }
const Side1=()=>{
    return(
        <>
{/*     
       <CgToggleOff onClick={b1()} size="40"/> */}
        <div  className=" col-2 col-md-2 col-lg-2 col-xl-2" id="c1">
        
           {/* <Sidebar/> */}

           
              
                
                
            {/* </div>
            <div className="row" id='r2'>
                <div class=" col-2 col-md-2 col-lg-2 col-xl-2"  id="r1"><GrServices size="35%" className="cr1"/></div>
             
            </div>
            <div className="row"id='r2' >
                <div className=" col-2 col-md-2 col-lg-2 col-xl-2" id="r1"><AiOutlineSolution size="35%" className="cr1"/></div>
            </div>
            <div className="row" id='r2'>
                <div className=" col-2 col-md-2 col-lg-2 col-xl-2" id="r1"><BsFillPeopleFill size="35%" className="cr1"/></div>
            </div>
            <div className="row"id='r2' >
                <div className=" col-2 col-md-2 col-lg-2 col-xl-2" id="r1"><MdContactPage size="35%" className="cr1"/></div>*/}
            </div> 

        
        
        
        </>
    );
}
export default Side1;
