import React from "react";
import PropTypes from "prop-types";

import Chip from "@base-components/Chip/Chip";
import { Grid, Zoom } from "./ChipsBox.styled";

export default function ChipsBox({
  chipsContent,
  isClickAble,
  boxStyle,
  ...props
}) {
  return (
    <Zoom in>
      <Grid container spacing={1} sx={boxStyle}>
        {chipsContent.map((data, i) => {
          const { label, icon } = data;
          return (
            <Grid key={i} item xs={4}>
              <Chip
                label={label || undefined}
                icon={icon || undefined}
                onClick={isClickAble ? () => {} : undefined}
                {...props}
              />
            </Grid>
          );
        })}
      </Grid>
    </Zoom>
  );
}

ChipsBox.propTypes = {
  chipsContent: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, icon: PropTypes.node })
  ),
  isClickAble: PropTypes.bool,
  boxStyle: PropTypes.shape({}),
};

ChipsBox.defaultProps = {
  chipsContent: [],
  isClickAble: false,
  boxStyle: {},
};
