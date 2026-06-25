import { useState } from 'react'
import WebImg from './images/websoft.png'
import SSCImg from './images/SSC-logo.png'
import HonestImg from  './images/Honest.png'
import WebDesign from './Aboutimg/skill-img.png'
import NkImg from './Aboutimg/nikhil1.png'


function Index(){
    return(
    <div>
      {/* 
    <div>Hello World</div>
<table>
    <dl><dt>who</dt>
    <dd>world health organization</dd></dl>
</table>

<h3 title=' Defency research development Organization '>DRDO</h3> 
*/}

        <div>
            <nav className='main'>
                <div className='header'>Nikhil</div>
                <div className='header1'>
                    <ul className='list'>
                        <li><a href=".header">Home</a></li>
                        <li><a href="#AboutUS">About US</a></li>
                        <li><a href="#MySkills">My Skills</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>

{/* page 01 */}
 <div className='home'>
 <div className='name'>
     Hi, <br /> i'am <b className='btag'> Nikhil</b> <br />Web desinger <br />
     {/* <input type="button" name='Contact' value={Contact} /> */}
     <a href=""><button className='button'>Contact</button></a>
    <p className='social'> 
    <a href="https://www.linkedin.com/in/Karne-Nikhil" id='anchor'><i class="fa-brands fa-linkedin-in"></i></a> &nbsp;
     <a href="https://wa.me/919640211462" target='_blank' id='anchor'><i class="fa-brands fa-whatsapp"></i></a> &nbsp;
     <a href="https://github.com/NikhilKarneNK" target="_blank" id='anchor'><i class="fa-brands fa-github"></i></a> &nbsp;
    </p>
     

 </div>
 <div className='img'>
       

    <img src={NkImg} alt=" nikhil img"  className='nk'/>
 </div>
 </div>

 {/* page 02 */}
  <div className='About'  id='AboutUS'>
    <h2> About</h2>
  </div>
  
  <div className='Aboutcontent'>

        <div className='cont-img'>
            <img src={NkImg} alt="Nikhil img" className='content'/>
        </div>

   <div className='content1'>
     <b className='num'> I'am Nikhil</b>
    <p>I am a passionate web designer dedicated to creating clean, modern,
         and user‑friendly websites. My focus lies in blending creativity
         with functionality to deliver designs that not only look visually 
         appealing but also provide seamless user experiences.</p>
    {/* <p>With a strong foundation in HTML, CSS, and responsive design,
         I specialize in building websites that adapt beautifully across all devices.</p>      */}
   </div>
    
    </div>

    <div className='skill' id='MySkills'>
        <h2>Skills</h2>
       
       <div className='skill-1'>
        <div className='Abtskill'>
        <p className='num'> proffessional Skill</p>
        <p className='num1'>"Proficient in designing responsive, user‑centric websites 
            with expertise in HTML, CSS, and modern design principles."
            {/* "Skilled at transforming concepts into visually engaging 
            layouts that balance creativity with functionality."*/}</p> 

<div className='skill1'>
        <span className='skill-name'> <i class="fa-brands fa-html5"></i> Html</span>
        <span className='sklogo'>95%</span>
</div>
 <div className='skill1' >
        <span className='skill-name'  id='skill2'><i class="fa-brands fa-css3-alt"></i> Css</span>
        <span className='sklogo'>85%</span>
</div>

<div className='skill1'>
        <span className='skill-name' id='skill3'><i class="fa-brands fa-js"></i>Java Script</span>
        <span className='sklogo'>  75%</span>
</div>


<div className='skill1'>
        <span className='skill-name' id='skill4'><i class="fa-brands fa-react"></i> React</span>
        <span className='sklogo'> 80%</span>
</div> 
    </div>

        <div className='Abtimg'> 
            <img src={WebDesign} alt="laptop img"  className='webimg' height={200} width={400}/>
        </div>
 </div>

 </div>   
       
    <div className='work'>
        <h2>Work</h2>

            
        <div className='workimg'>
            <a href="https://www.wstdigitalmedia.in"> <img src={WebImg} alt="" className='img1' /></a> 
            <a href="https://aptgssc.com">  <img src={SSCImg} alt="" className='img1' /></a>
            <a href="https://honestservices.in/"><img src={HonestImg} alt="" className='img1' /> </a>
                
        </div>

          <div className='workimg1'>
            {/* <img src="" alt="" className='img1' />
            <img src="" alt="" className='img1' />
            <img src="" alt="" className='img1' /> */}
            
        </div> 
      
        </div>  
           
           <div className='contact' id='Contact'>
                    <h2>Contact</h2>

           <label htmlFor="" id='detail'>Name : </label>
           <input type="text"  size={20}  placeholder=' name'/> <br /> <br />
           <label htmlFor=""  id='detail'>Email : </label> 
           <input type="email" size={20} placeholder='e-mail'/> <br />  <br />
           <label htmlFor=""  id='detail'>Text  : </label> 
           <textarea name="message" rows={3} cols={20} placeholder='Message'></textarea> <br /> <br />
           <a href="https://wa.me/919640211462 "  id='detail'> <button className='button'>Submit</button></a>     
           </div>


                 <footer > <br />
                    Nikhil Karne<br />
                    
    <a href="https://www.linkedin.com/in/Karne-Nikhil" id='anch'><i class="fa-brands fa-linkedin-in"></i></a> &nbsp;
     <a href="https://wa.me/919640211462" target='_blank' id='anch'><i class="fa-brands fa-whatsapp"></i></a> &nbsp;
     <a href="https://github.com/NikhilKarneNK" target="_blank" id='anch'><i class="fa-brands fa-github"></i></a> &nbsp;
     <a href="https://www.instagram.com/nikhil_karne09" target="_blank" id='anch'><i class="fa-brands fa-instagram"></i></a> 
   <h5>  © websoft All rights resoved</h5>
                </footer>   
      
    </div>
 )
}
export default Index 