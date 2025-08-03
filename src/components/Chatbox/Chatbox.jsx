import React from "react";
import "./Chatbox.css";
import assets from "../../assets/assets";

const Chatbox = () => {
  return (
    <div className="chatbox">
      <div className="chat-user">
        <img src={assets.profile_img} alt="Profile image" />
        <p>
          User name Sanford <img src={assets.green_dot} className="dot" />{" "}
        </p>
        <img src={assets.help_icon} className="help" alt="" />
      </div>

      <div className="chat-message">
        <div className="s-message">
          <p className="msg">Alguma coisa bla bla bla bla bla</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>
        <div className="s-message">
          <img className="message-img" src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>

        <div className="r-message">
          <p className="msg">Alguma outra coisa bla bla bla bla bla</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>5:40 PM</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Send a message" />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  );
};

export default Chatbox;
