import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/vivek-yadav-21489123a/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media.licdn.com/dms/image/D4D03AQFQLQVfgjOTQQ/profile-displayphoto-shrink_400_400/0/1697123117716?e=1706140800&v=beta&t=WDZAA8hzhlmzQBk8V6xIpY_G8_OH_KBHoLRbJuU4xfY"
              alt="Vivek Yadav"
            />
            <Typography>Vivek Yadav</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit Linkedin
            </Button>
            <span>web developer</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Account</Typography>
            <a
              href="https://www.linkedin.com/in/vivek-yadav-21489123a/"
              target="blank"
            >
              <LinkedInIcon className="LinkedInSvgIcon" />
            </a>

            <a href="#" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://github.com/VivekYadav193" target="blank">
              <GitHubIcon className="githubSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
