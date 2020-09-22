import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...rest }) => (
        <MenuItem key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
