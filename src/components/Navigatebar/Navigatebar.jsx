import React from "react";
import { FiBriefcase } from "react-icons/fi";
import { BsHouseDoor } from "react-icons/bs";
import { MdAirplanemodeActive } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";
import { Link } from "react-scroll";
import { Wrapper, MenuItem, Item } from "./Navigatebar.styled";
const navList = [
  { id: 1, name: "TOURS ", icon: <FiBriefcase />, link: "TOURS" },
  { id: 2, name: "HOUSING ", icon: <BsHouseDoor />, link: "HOUSING" },
  // eslint-disable-next-line prettier/prettier
  { id: 3, name: "AIR TISCRT ", icon: <MdAirplanemodeActive />, link: "AIR TISCRT"},
  { id: 4, name: "CAR RENTAL ", icon: <AiOutlineCar />, link: "CAR RENTAL" },
];
export const Navigatebar = () => {
  return (
    <>
      <Wrapper>
        {navList.map(({ id, name, icon, link }) => (
          <MenuItem key={id}>
            <Link activeClass="active" smooth spy to={link}>
              <Item src="#">{name} </Item>
              <Item> {icon} </Item>
            </Link>
          </MenuItem>
        ))}
      </Wrapper>
    </>
  );
};
