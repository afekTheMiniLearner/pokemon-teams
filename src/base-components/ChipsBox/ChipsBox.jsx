import React from "react";
import PropTypes from "prop-types";

import Chip from "@base-components/Chip/Chip";
import { Grid, Zoom } from "./ChipsBox.styled";

export default function ChipsBox({
  boxStyle,
  chipsContent,
  isClickAble,
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
  boxStyle: PropTypes.shape({}),
  chipsContent: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, icon: PropTypes.node })
  ),
  isClickAble: PropTypes.bool,
};

ChipsBox.defaultProps = {
  boxStyle: {},
  chipsContent: [],
  isClickAble: false,
};
