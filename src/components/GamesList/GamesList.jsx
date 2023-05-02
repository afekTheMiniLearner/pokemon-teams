import React from "react";
import PropTypes from "prop-types";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "./GamesList.styled";

export default function GamesList({ items, children, onClick }) {
  return (
    <List>
      {items.map((item, i) => {
        const { name, icon, style } = item;
        return (
          <ListItem
            key={i}
            onClick={() => onClick(name)}
            disablePadding
            sx={style}
          >
            <ListItemButton>
              <ListItemText primary={name} />
              {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
              {children}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

GamesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      itemName: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
};

GamesList.defaultProps = {
  items: [{}],
  onClick: undefined,
};
