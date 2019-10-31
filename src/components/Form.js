import React from 'react';

// Redux
import { mirror } from '../js/actions/index';
import { connect } from 'react-redux';

function Form({mirrorEvent}) {
  return (
    <form action="/">
      <input name="title" type="text" onChange={mirrorEvent} placeholder="Copia un titulo" />
      <br />
      <textarea name="description" rows="5" onChange={mirrorEvent} placeholder="Copia una descripcion" />
      <br />
    </form>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    mirrorEvent: event => dispatch(mirror({name: event.target.name, val: event.target.value}))
  };
};

export default connect(null, mapDispatchToProps)(Form);
