import React from "react";
import PropTypes from "prop-types";

import {
  MuiCard,
  MuiCardActionArea,
  MuiCardContent,
  MuiCardMedia,
  MuiTypography,
} from "./Card.styled";

export default function Card({
  title,
  information,
  imageUrl,
  onClick,
  children,
}) {
  return (
    <MuiCard onClick={onClick}>
      <MuiCardActionArea>
        {imageUrl ? (
          <MuiCardMedia component="img" image={imageUrl} alt={title} />
        ) : null}
        <MuiCardContent>
          {title ? (
            <MuiTypography gutterBottom variant="h5" component="div">
              {title}
            </MuiTypography>
          ) : null}
          {information ? (
            <MuiTypography variant="body2" color="text.secondary">
              {information}
            </MuiTypography>
          ) : null}
          {children}
        </MuiCardContent>
      </MuiCardActionArea>
    </MuiCard>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  information: PropTypes.string,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  title: undefined,
  information: undefined,
  imageUrl: undefined,
  onClick: undefined,
};
