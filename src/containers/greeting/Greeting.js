import React from "react";
import { Fade } from "react-reveal";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
// import FeelingProud from "./FeelingProud";

import "./Greeting.css";
import Button from "../../components/button/Button";

export default function Greeting(props) {
  const theme = props.theme;
  const language = localStorage.getItem("language") || "en";

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                ( {greeting.nickname} )
              </h2>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText, fontSize: 26 }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              {/* <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div> */}
              <div className="button-greeting-div">
                <Button 
                  text={language === "ja" ? "お問い合わせ" : "Contact me"} 
                  href="#contact" 
                  theme={theme} 
                />
                <Button
                  text={language === "ja" ? "履歴書を見る" : "See my resume"}
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="Vu Trung Kien"
              src={require("../../assests/images/animated_ashutosh.png")}
              style={{
                width: "100%",
                maxWidth: "220px",
                borderRadius: "30px", // Rounded rectangle instead of full circle
                boxShadow: `0px 15px 35px -5px ${theme.imageHighlight}60`, // Nice colorful glow
                border: `4px solid ${theme.imageHighlight}`, // Framing it so it doesn't blend into the white background
                margin: "30px auto",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
