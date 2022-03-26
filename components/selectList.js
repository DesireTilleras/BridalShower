import  {useState}  from "react";
import React from 'react';
import Arrow from "../public/chevron_icon.svg"
import Button from '../components/button.js'

import {
  StyledSelectList,
  StyledDropdownMenu,
  StyledDropdownItem,
} from "./styled/StyledSelectList";



const SelectList = () => {
  const [hidden, setHidden] = useState(true);
    let props = {
      text: "En Dropdown",
      path: "/",
      onClick: ()=>{setHidden(!hidden)}
    };

  return (
    <StyledSelectList>
      <Button {...props}>
        <div>
          { <Arrow width={10} height={10} className={hidden ? "down" : "up"} /> }
         </div>
      </Button>
      <StyledDropdownMenu
        className={hidden ? "hidden" : "visible"}
        hidden={hidden}
        toggle={() => setHidden(!hidden)}
      >
        <StyledDropdownItem>Organization Name</StyledDropdownItem>
        <StyledDropdownItem>Organization Name 1</StyledDropdownItem>
        <StyledDropdownItem>Organization Name 2</StyledDropdownItem>
      </StyledDropdownMenu>
    </StyledSelectList>
  );
};
export default SelectList;
