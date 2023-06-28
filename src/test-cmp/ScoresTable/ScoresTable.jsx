import React from "react";
import PropTypes from "prop-types";

function Table({ dataList }) {
  return (
    <div className="table-container">
      <table>
        <tr>
          <th>Name</th>
          <th>Algo score</th>
          <th>Front score</th>
          <th>Total score</th>
        </tr>
        <tr>
         
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  );
}

Table.propTypes = {
  dataList: PropTypes.shape({
    name: PropTypes.string,
    algo: PropTypes.number,
    front: PropTypes.number,
  }),
};

Table.defaultProps = {
  dataList: undefined,
};

export default Table;
