import React from "react";
import { Link } from "react-router-dom";
import home from "../home.svg";
import Title from "./Title";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <Title name="shefata" title="clothing" />
        <div className="col s6">
          <img src={home} alt="store" className="responsive-img" />
        </div>
        <div className="col s6">
          <h2 className="flow-text text-title">we care about how you look</h2>
          <div className="divider"></div>
          <p className="flow-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            molestiae eaque rem? Iure, recusandae tempora dolores est.
          </p>
          <p>
            <Link to="/store">
              <button
                className="btn green waves-effect waves-light"
                type="button"
              >
                our shop
                <i className="material-icons right">store</i>
              </button>
            </Link>
          </p>
        </div>
      </div>
      <div className="row">
        <Title name="latest" title="Designs" />
        <div className="col s12 m6 l4">
          <div className="card large">
            <div className="card-image">
              <img
                src="img/dress-9.jpg"
                alt="latest design"
                className="responsive-img"
              />
              <span className="text-blue card-title">Ladies Coat - Brown</span>
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                laborum, qui non sit accusantium sunt cum ad eligendi nisi ex
                quod expedita dignissimos odio ea recusandae
              </p>
            </div>
            <div className="card-action">
              <Link to="/store">View it in our store</Link>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="card large">
            <div className="card-image">
              <img
                src="img/dress-3.jpg"
                alt="latest design"
                className="responsive-img"
              />
              <span className="card-title">Johdpuri Suit - Brown</span>
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                laborum, qui non sit accusantium sunt cum ad eligendi nisi ex
                quod expedita dignissimos odio ea recusandae
              </p>
            </div>
            <div className="card-action">
              <Link to="/store">View it in our store</Link>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="card large">
            <div className="card-image">
              <img
                src="img/dress-8.jpg"
                alt="latest design"
                className="responsive-img"
              />
              <span className="card-title text-blue">
                white and Purple -sleeveless Dress
              </span>
            </div>
            <div className="card-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                laborum, qui non sit accusantium sunt cum ad eligendi nisi ex
                quod expedita dignissimos odio ea recusandae
              </p>
            </div>
            <div className="card-action">
              <Link to="/store">View it in our store</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
