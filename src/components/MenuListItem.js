import React from "react";
import { MenuItem } from "./styles";
import { Link } from "react-router-dom";

export default function MenuListItem({ item }) {
  return (
    <MenuItem key={item.name}>
      {item.link.length > 0 ? (
        <Link to={item.link}>
          <div className={"Selected-Menu"}>
            <span>
              <i className={item.icon} />
            </span>
            <span>{item.name}</span>
          </div>
        </Link>
      ) : (
        <div>
          <span>
            <i className={item.icon} />
          </span>
          <span>{item.name}</span>
        </div>
      )}
    </MenuItem>
  );
}
