import React, { Component } from "react";

export class TransformTxt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      index: 0,
    };
    this.getInputValue = this.getInputValue.bind(this);
  }

  getInputValue(event) {
    if (event.target.value !== undefined) {
      let wordsArray = event.target.value.toLowerCase().split(" ");
      this.setState({ index: wordsArray.findIndex((el) => el === ".") });
      let capsArray = wordsArray.map((word) => {
      console.log("TransformTxt -> getInputValue -> word", word)
        return word.replace(word[0], word[0]?.toUpperCase());
      });
      this.setState({ value: capsArray.join(" ") });
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={this.getInputValue}
        />
      </div>
    );
  }
}

export default TransformTxt;
