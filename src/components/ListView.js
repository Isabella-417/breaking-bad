import React from "react";
import CardCharacter from "./CardCharacter";
import Loader from "react-loader-spinner";

import "./styles/ListView.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: {
        info: [],
        results: [],
      },
      nextPage: 0,
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://www.breakingbadapi.com/api/characters?limit=12&offset=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          results: [].concat(this.state.data.results, data),
        },
        nextPage: this.state.nextPage + 12,
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.error) {
      return "An error occurred";
    }

    return (
      <div className="container">
        <div className="headerTitle">
          <h1>Breaking Bad</h1>
        </div>
        <ul>
          {this.state.data.results.map((character) => (
            <li key={character.char_id}>
              <CardCharacter character={character} />
            </li>
          ))}
        </ul>

        {this.state.loading && (
          <div className="container">
            <Loader type="Circles" color="white" height={80} width={80} />
          </div>
        )}

        {!this.state.loading && (
          <button
            className="loadingButton"
            onClick={() => this.fetchCharacters()}
          >
            Load More
          </button>
        )}
      </div>
    );
  }
}

export default ListView;
