import React from "react";
import PropTypes from "prop-types";

import {
  MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grow,
} from "./Card.styled";

export default function Card({
  title,
  information,
  imageUrl,
  onClick,
  children,
}) {
  return (
    <Grow in>
      <MuiCard onClick={onClick}>
        <CardActionArea>
          {imageUrl ? (
            <CardMedia component="img" image={imageUrl} alt={title} />
          ) : null}
          <CardContent>
            {title ? (
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            ) : null}
            {information ? (
              <Typography variant="body6" color="text.secondary">
                {information}
              </Typography>
            ) : null}
            {children}
          </CardContent>
        </CardActionArea>
      </MuiCard>
    </Grow>
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
