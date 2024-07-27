import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum incidunt
          dicta, deleniti at doloribus sit nesciunt enim facere quasi a, modi
          neque soluta quas nam nemo veritatis qui odio ex assumenda! Fugit
          dolor earum dignissimos ut expedita excepturi quod repellendus
          reiciendis voluptatibus sequi error alias, pariatur nisi deleniti cum
          a aspernatur optio doloremque nihil quas totam blanditiis itaque
          magnam? Quibusdam rerum reprehenderit provident dolorum atque tempora
          optio officiis praesentium illo, explicabo autem earum magnam cum
          voluptate quidem rem ut similique deleniti ipsam voluptatem, velit
          nemo! Delectus aperiam odio rerum temporibus illum iusto dolorem
          assumenda? Aspernatur in eius dignissimos maxime nisi? Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Cum incidunt dicta,
          deleniti at doloribus sit nesciunt enim facere quasi a, modi neque
          soluta quas nam nemo veritatis qui odio ex assumenda! Fugit dolor
          earum dignissimos ut expedita excepturi quod repellendus reiciendis
          voluptatibus sequi error alias, pariatur nisi deleniti cum a
          aspernatur optio doloremque nihil quas totam blanditiis itaque magnam?
          Quibusdam rerum reprehenderit provident dolorum atque tempora optio
          officiis praesentium illo, explicabo autem earum magnam cum voluptate
          quidem rem ut similique deleniti ipsam voluptatem, velit nemo!
          Delectus aperiam odio rerum temporibus illum iusto dolorem assumenda?
          Aspernatur in eius dignissimos maxime nisi?
        </p>
      </div>
    </div>
  );
}

export default About;
