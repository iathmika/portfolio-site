import React, { Component } from "react";
import { Icon } from "@iconify/react";
import pythonIcon from "@iconify/icons-logos/python";
import reactIcon from "@iconify/icons-logos/react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
       
      
          
          <div>
         <div>
          <br/> <br/>
         <span className="section-title">Send me an email </span>
        
         </div>
         <span> athmikah@gmail.com </span>
        </div>

       <div>
         
       
          <div className="social-links">
            <span className="section-title"> FIND ME ON </span>
            <br/>
            {networks}
        
          </div>
        </div>
          <div className="copyright py-4 text-center">
            <div className="container">
              {/* <small> 
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small> */}
            </div>
          </div>
   
      </footer>
    );
  }
}

export default Footer;
