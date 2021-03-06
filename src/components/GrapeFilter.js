import React from 'react';

const GrapeFilter = (props) => {

  return (
    <div className="grape-filter">
      <label htmlFor="grape-filter">Varietal: </label>
      <select 
        name="grape-filter"
        value={props.selectedGrape}
        onChange={props.handleGrapeSelect}
      >
        {props.renderGrapes()}
      </select>
    </div>
  )

}

export default GrapeFilter;
