import React from "react";
import seedMenu from "../seedMenu";
import MenuListItem from "./MenuListItem";
import { MenuContainer, MenuGroup, MenuTitle } from "./styles";

export default function Menu() {
  let menus = seedMenu.menu.map((menuGroup) => (
    <MenuContainer key={menuGroup.title}>
      <MenuTitle>{menuGroup.title}</MenuTitle>
      <MenuGroup>
        {menuGroup.items.map((item) => (
          <MenuListItem key={item.name} item={item} />
        ))}
      </MenuGroup>
    </MenuContainer>
  ));

  return <>{menus}</>;
}
