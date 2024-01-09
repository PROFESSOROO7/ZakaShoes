import React from 'react'
import './Account.css'
const Account = () => {
  return (
    <div>
      
      <div className="wrapper">
    <div className="left">
        <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100" />
        <h4>Noman</h4>
         <p>React Developer</p>
    </div>
    <div className="right">
        <div className="info">
            <h3>Information</h3>
            <div className="info_data">
                 <div className="data">
                    <h4>Email</h4>
                    <p>Noman@gmail.com</p>
                 </div>
                 <div className="data">
                   <h4>Phone</h4>
                    <p>03107223133</p>
              </div>
            </div>
        </div>
      
      <div className="projects">
            <h3>Projects</h3>
            <div className="projects_data">
                 <div className="data">
                    <h4>Recent</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                 </div>
                 <div className="data">
                   <h4>Most Viewed</h4>
                    <p>dolor sit amet.</p>
              </div>
            </div>
        </div>
      
        <div className="social_media">
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
      </div>
    </div>
</div>
      
    </div>
  )
}

export default Account
