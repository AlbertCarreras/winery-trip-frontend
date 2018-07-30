import React from 'react';

const RegionFilter = (props) => {

  return (
    <div className="region-filter">
      <label htmlFor="region-filter">Region: </label>
      <select name="region-filter" onChange={props.handleRegionSelect}>
        {props.renderRegions()}
      </select>
    </div>
  )

}

export default RegionFilter;
