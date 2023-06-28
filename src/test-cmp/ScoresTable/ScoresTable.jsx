import React from "react";
import PropTypes from "prop-types";

import "./ScoresTable.scss";

function ScoresTable({ dataList }) {
  return (
    <div className="table-container">
      <table>
        <tr>
          <th>Name:</th>
          <th>Algo score:</th>
          <th>Front score:</th>
          <th>Total score:</th>
        </tr>
        {dataList?.map(({ name, algo, front }) => {
          return (
            <tr key={name}>
              <td>{name}</td>
              <td>{algo}</td>
              <td>{front}</td>
              <td>{+algo + +front}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

ScoresTable.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      algo: PropTypes.number,
      front: PropTypes.number,
    })
  ),
};

ScoresTable.defaultProps = {
  dataList: undefined,
};

export default ScoresTable;
