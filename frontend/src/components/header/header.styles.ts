import Link from "next/link";
import styled from "styled-components";
import { IoIosSync } from 'react-icons/io';

interface Props {
  open: boolean
}

export const HeaderWrap = styled.header`
  height: 100px;
  width: 100%;
  
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;

  & * {  
    transition: var(--transition-basic);
  }
`

export const HeaderSect = styled.section<Props>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 30px 40px;
  
  & * {
    color: ${props => props.open ? "var(--dark)" : "var(--secondary-color)"}
  }
  &:hover * {
    transform: scale(1.2);
    filter: blur(4px);
  }
`

export const HeaderLi = styled(Link)`
  text-transform: uppercase;
  padding: 0 50px;
  cursor: pointer;
  font-size: 28px;
  &:hover {
    background-color: var(--secondary-color);
    color: var(--light);
    transform: scale(1.5);
    filter: blur(0);
  }
`

export const ColorSwitcher = styled(IoIosSync)<Props>`
  position: absolute;
  top: 35px;
  right: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  fill: var(--light);
  stroke: var(--light);
  transform: ${props => props.open ? "rotate(180deg)" : "rotate(0)"};
`
