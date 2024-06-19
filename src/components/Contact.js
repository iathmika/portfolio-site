import React, { Component } from "react";

import emailjs from "@emailjs/browser";

class Contact extends Component {

    render () {
    
        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs
              .sendForm('service_yhtetvb', 'template_1ovpd64', e.target, "ogV0Qltbmgm8nzdwR")
              
              .then(
                (result) => {
                  console.log(result);
                  alert("Message Sent Succesfully");
                },
                (error) => {
                  console.log(error.text);
                  // alert(error.text);
                  //alert("Can't send message right now, try again later");
                }
              );
          };
          return (  
            <section id="skills">
            
            <h1 className="section-title">
              <span className="text-white">Email me at</span>
            </h1>
           
      
            </section>
          );
    }

}
export default Contact;
