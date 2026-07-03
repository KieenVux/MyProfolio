import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import TopButton from "../../components/topButton/TopButton";
import { contactPageData, greeting } from "../../portfolio.js";
import AddressImg from "./AddressImg";
import "./ContactComponent.css";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    const language = localStorage.getItem("language") || "en";
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div
              className="contact-heading-div"
              style={{ alignItems: "center", gap: "20px" }}
            >
              <div className="contact-heading-img-div">
                <img
                  src={
                    new URL(
                      `../../assests/images/${ContactData["profile_image_path"]}`,
                      import.meta.url
                    ).href
                  }
                  alt="Vu Trung Kien"
                  style={{
                    width: "100%",
                    maxWidth: "220px", // Reduced size as requested
                    borderRadius: "40px",
                    boxShadow: `0px 15px 35px -5px ${theme.imageHighlight}60`,
                    border: `4px solid ${theme.imageHighlight}`,
                    margin: "0 auto",
                    display: "block",
                  }}
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text={language === "ja" ? "履歴書を見る" : "See My Resume"}
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                {/* <img
											src={new URL(`../../assests/images/${addressSection["avatar_image_path"]}`, import.meta.url).href}
											alt=""
										/> */}
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {phoneSection["subtitle"]}
                </p>
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
