"use client"

import React from 'react';
import { HeaderLi, HeaderSect, HeaderWrap, ColorSwitcher } from './header.styles';

import { useContext } from "react";
import { OpenContext } from "../../context/OpenContext";

const Header = () => {
  const { open, toggleOpenState } = useContext(OpenContext);

  return (
    <HeaderWrap>
      <HeaderSect open={open}>
        <HeaderLi href="/blog">services</HeaderLi>
        <HeaderLi href="/blog">portfolio</HeaderLi>
        <HeaderLi href="/blog">contact</HeaderLi>
        <HeaderLi href="/blog">blog</HeaderLi>
        <HeaderLi href="/blog">about</HeaderLi>
      </HeaderSect>
      <ColorSwitcher open={open} onClick={toggleOpenState} />
    </HeaderWrap>
  )
}

export default Header