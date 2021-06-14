import React from "react";
import { Link } from "react-router-dom";
import seedMenu from "../seedMenu";
import { MenuGroup, MenuTitle, MenuItem } from "./styles";

export default function Menu(props) {
  let menus = seedMenu.menu.map((menuGroup) => (
    <MenuGroup key={menuGroup.title}>
      <MenuTitle>{menuGroup.title}</MenuTitle>
      <MenuGroup>
        {menuGroup.items.map((item) => (
          <MenuItem key={item.name}>
            {item.link.length > 0 ? (
              <Link to={item.link}>
                <div>
                  <i className={item.icon} />
                  <span>{item.name}</span>
                </div>
              </Link>
            ) : (
              <div>
                <i className={item.icon} />
                <span>{item.name}</span>
              </div>
            )}
          </MenuItem>
        ))}
      </MenuGroup>
    </MenuGroup>
  ));

  return <div>{menus}</div>;
}
