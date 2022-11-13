import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className='nav'>
   
   <div className='nav-logo'>
    <svg  xmlns="http://www.w3.org/2000/svg" width="370" height="100" fill="#E50914" data-arp-injected="true"><path d="M50.833 93.542V0H35.208v56.77L14.896 0H0v100c5.313-.833 10.313-1.563 15.938-2.188V43.23L33.75 95.625c5.938-.833 11.563-1.146 17.083-2.083zm30.834-56.875V15.625h27.604V0h-43.23v92.292l43.23-3.438v-15c-9.271.313-18.438 1.042-27.604 1.667V52.29c5.833-.312 13.958-.312 20.833-.312V36.354c-5.52 0-14.792.313-20.833.313zm85.729-21.042V0h-48.021v15.625h16.146v72.083c5.104-.208 10.416-.208 15.625-.208V15.625h16.25zm25.416 19.896V15.625h28.334V0h-43.75v86.667h15.416V51.146h21.355V35.52h-21.355zm53.646 37.396V0h-15.625v87.708c14.271.313 28.229 1.146 42.188 2.084V74.27c-8.646-.417-17.604-1.146-26.563-1.354zm39.792 17.916c5 .313 10.208.521 15.312 1.146V0H286.25v90.833zM370 0h-17.083l-10.938 26.25L331.771 0h-16.875l18.229 46.98-20.104 45.833c5.625.729 11.146 1.041 16.771 1.979l11.458-26.563 11.146 28.959c5.937.937 11.771 1.979 17.604 2.812l-19.792-52.396L370 0z"/></svg>
    </div>
    
    <img 
    src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" 
    alt="nav-avatar" 
    className="nav-avatar" />
    
    </div>

    
  )
}

export default Nav;