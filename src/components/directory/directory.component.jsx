import React, { Component } from "react";
import { sections } from "../../data/directory.data";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections,
    };
  }
  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
