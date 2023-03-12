import React from "react";
import { Link } from "react-router-dom";
import OtherPosts from "../componentsTest/OtherPosts";

const Single = () => {
  return (
    <div>
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7143920/pexels-photo-7143920.jpeg?cs=srgb&dl=pexels-jakub-novacek-7143920.jpg"
          alt=""
          width={1000}
        />
      </div>
      <Link to={`/write?edit=2`}>Edytuj</Link>
      <span>Usuń</span>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, commodi
        dolorem ex est quis reprehenderit deserunt eos distinctio ea dicta
        aliquam sit, fuga consequuntur! In minus iste fugiat. Quibusdam, nisi.
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat et
        modi nihil unde. Id odit quis, molestias ipsa incidunt iusto, minus
        suscipit veritatis consequatur, ullam alias velit aliquid? Mollitia,
        nobis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
        magnam ratione voluptas earum repellat. Et accusamus impedit ipsam modi,
        ex unde doloribus fugiat numquam iure. Nulla maiores commodi
        voluptatibus nemo.
      </p>
      <div className="menu">
        <OtherPosts/>
      </div>
    </div>
  );
};

export default Single;
