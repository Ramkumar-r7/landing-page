import React from "react";
import "./style.scss";
import { Space } from "antd";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
function App() {
  return (
    <>
      <div className="page">
        <span className="axel">Axel</span>
        <span className="coming">Coming soon</span>
        <img
          className="img"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1616,h=1888,fit=crop/axelbugnt/clarissa-carbungco-dMLItqkE8b8-unsplash.jpg"
          alt="person"
        />
        <div className="contact-container">
        <span className="contact">
          My new website will be live soon. In the meantime, contact me via the
          links below.
        </span>
        <div className="logos">
                <Space>
                  <BsFacebook size={20} color="white"className="m-4"/>
                  <AiOutlineInstagram color="white" size={23} className="m-4" />
                  <AiOutlineTwitter color="white" size={22} className="m-3" />
                </Space>
              </div>
        </div>
      </div>
    </>
  );
}

export default App;
