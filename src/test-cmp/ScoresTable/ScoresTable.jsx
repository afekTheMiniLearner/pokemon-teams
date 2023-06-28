/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";

import "./ScoresTable.scss";

function ScoresTable({ dataList, setSortType }) {
  return (
    <div className="table-container">
      <table>
        <tr>
          <th>Name:</th>
          <th>
            Algo score:
            <div>
              <p
                className="arrow up"
                onClick={() =>
                  setSortType?.({ param: "algo", isLowerFirst: true })
                }
              >
                &gt;
              </p>
              <p
                className="arrow down"
                onClick={() =>
                  setSortType?.({ param: "algo", isLowerFirst: false })
                }
              >
                &gt;
              </p>
            </div>
          </th>
          <th>
            Front score:
            <div>
              <p
                className="arrow up"
                onClick={() =>
                  setSortType?.({ param: "front", isLowerFirst: true })
                }
              >
                &gt;
              </p>
              <p
                className="arrow down"
                onClick={() =>
                  setSortType?.({ param: "front", isLowerFirst: false })
                }
              >
                &gt;
              </p>
            </div>
          </th>
          <th>
            Total score:
            <div>
              <p
                className="arrow up"
                onClick={() =>
                  setSortType?.({ param: "total", isLowerFirst: true })
                }
              >
                &gt;
              </p>
              <p
                className="arrow down"
                onClick={() =>
                  setSortType?.({ param: "total", isLowerFirst: false })
                }
              >
                &gt;
              </p>
            </div>
          </th>
        </tr>
        {dataList?.map(({ name, algo, front, total }) => {
          return (
            <tr key={name}>
              <td>{name}</td>
              <td>{algo}</td>
              <td>{front}</td>
              <td>{total}</td>
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
  setSortType: PropTypes.func,
};

ScoresTable.defaultProps = {
  dataList: undefined,
  setSortType: undefined,
};

export default ScoresTable;
