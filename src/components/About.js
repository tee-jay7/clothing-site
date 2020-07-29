import React from "react";
import Title from "./Title";

function About() {
  return (
    <div className="container">
      <div className="row">
        <Title name="About" title="Us" />
      </div>
      <div className="row">
        <p className="text-flow">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum vel
          eum, consequatur sapiente molestias nam id assumenda repellat modi sit
          eligendi? Explicabo recusandae vitae, est voluptatem alias atque
          quaerat optio. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Aliquid tempora laudantium voluptatem est dolore nulla dolor
          incidunt enim in labore?
        </p>
        <blockquote>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis,
          quidem dignissimos reprehenderit amet harum suscipit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Facilis, porro?
        </blockquote>
      </div>
      <div className="row">
        <Title name="contact" title="us" />
      </div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label className="active" for="first_name">
                First Name
              </label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label className="active" for="last_name">
                Last Name
              </label>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea
                  id="icon_prefix2"
                  className="materialize-textarea"
                ></textarea>
                <label className="active" for="icon_prefix2">
                  Message
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="email" type="email" class="validate" />
                <label className="active" for="email">
                  Email
                </label>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light green"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default About;
