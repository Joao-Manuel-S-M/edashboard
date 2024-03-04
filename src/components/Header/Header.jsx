import React, { useEffect, useState } from "react";
import * as S from "./style.js";
import { FiBell, FiSearch } from "react-icons/fi";
import image from "../../assets/images/iuricode.png";
import iconOpen from "../../assets/icons/menuOpen.svg";

const Header = ({isOpen, setOpen}) => {
    const handleClick = () => {
        setOpen(!isOpen);
    }

    return (
        <S.Header>
            <div className="wrapper-text">
                <button onClick={handleClick}>
                    <img src={iconOpen} />
                </button>
                <h1 className="title">Olá, Iuri</h1>
                <p className="infs">Aqui estão as informações sobre suas vendas.</p>
            </div>

            <div className="wrapper-profile">
                <FiSearch size={24} className="icon" />
                <FiBell size={24} className="icon" />

                <div className="user">
                    <img src={image} alt="Profile Image" />
                    <h1 className="username">Iuri Silva</h1>
                </div>
            </div>
        </S.Header>
    );
};

export default Header;