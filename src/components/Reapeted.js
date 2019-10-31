import React from 'react';

// Redux
import { connect } from 'react-redux';

function Reapeter({title, description}) {
  return (
    <div className="container">
      <span><b>Titulo</b></span>
      <p className="repeater">{title}</p>
      <span><b>Descripcion</b></span>
      <p className="repeater">{description}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    title: state.title,
    description: state.description
  };
};


export default connect(mapStateToProps)(Reapeter);
