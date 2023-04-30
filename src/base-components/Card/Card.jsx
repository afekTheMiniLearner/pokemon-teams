import React from "react";
import PropTypes from "prop-types";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

import { StyledCard } from "./Card.styled";

export default function Card({
  title,
  information,
  imageUrl,
  onClick,
  children,
}) {
  return (
    <StyledCard onClick={onClick}>
      <CardActionArea>
        {imageUrl ? (
          <CardMedia
            component="img"
            height="150"
            image={imageUrl}
            alt={title}
          />
        ) : null}
        <CardContent>
          {title ? (
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          ) : null}
          {information ? (
            <Typography variant="body2" color="text.secondary">
              {information}
            </Typography>
          ) : null}
          {children}
        </CardContent>
      </CardActionArea>
    </StyledCard>
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
