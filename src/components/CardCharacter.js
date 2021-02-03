import React from "react";

import "./styles/CardCharacter.css";
import "../global.css";

class CardCharacter extends React.Component {
  render() {
    return (
      <section className="CharacterCard">
        <figure>
          <img src={this.props.character.img} alt="profile character" />
          <div className="NameContainer">
            <h2>{this.props.character.name}</h2>
            <p>Alias : {this.props.character.nickname}</p>
          </div>
        </figure>
      </section>
    );
  }
}

export default CardCharacter;
