import React from "react";
import PropTypes from "prop-types";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

export default function GamesList({ items, children, onClick }) {
  return (
    <List>
      {items.map((item, i) => {
        const { itemName, icon } = item;
        return (
          // eslint-disable-next-line react/no-array-index-key
          <ListItem key={i} onClick={() => onClick(itemName)} disablePadding>
            <ListItemButton>
              {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
              <ListItemText primary={itemName} />
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
