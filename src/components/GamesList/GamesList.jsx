import React from "react";
import PropTypes from "prop-types";

import {
  MuiList,
  MuiListItem,
  MuiListItemButton,
  MuiListItemIcon,
  MuiListItemText,
} from "./GamesList.styled";

export default function GamesList({ items, children, onClick }) {
  return (
    <MuiList>
      {items.map((item, i) => {
        const { name, icon, style } = item;
        return (
          <MuiListItem
            key={i}
            onClick={() => onClick(name)}
            disablePadding
            sx={style}
          >
            <MuiListItemButton>
              <MuiListItemText primary={name} />
              {icon ? <MuiListItemIcon>{icon}</MuiListItemIcon> : null}
              {children}
            </MuiListItemButton>
          </MuiListItem>
        );
      })}
    </MuiList>
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
