import React from "react";
import {
  TabsItem,
  TabsList,
  NavbarContainer,
} from "./NavLink.component";
import { categoryData } from "../../Api/Data";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavLinkList() {
  const dispatch = useDispatch();
  // let { category } = useSelector((state) => state.categoryReducer);
  const [ value, setValue ] = React.useState("All");
  const handleChange = (e, newValue) => {
    dispatch({ type: "CATEGORY_START" });
    setValue(newValue)
    dispatch({ type: "CATEGORY_SUCCESS", category: newValue })
  };
  let search = useSelector((state) => state.searchReducer.search);
  return (
    <>
      <NavbarContainer searchOpen={search}>
        <TabsList
          value={value}
          variant="scrollable"
          scrollButtons="auto"
          onChange={handleChange}
          aria-label="scrollable auto tabs example"
        >
          {categoryData?.map((item, index) => (
              <TabsItem 
                smooth
                component={Link}
                value={item.value}
                label={item.label}
                key={index} to={`#${item.value}`}
              />
          ))}
        </TabsList>
      </NavbarContainer>
    </>
  )
}

export default NavLinkList;
