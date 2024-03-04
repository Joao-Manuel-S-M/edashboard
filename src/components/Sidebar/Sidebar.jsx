import React, { useEffect, useState } from "react";
import * as S from "./style.js";
import { IoGridOutline } from "react-icons/io5";
import { HiOutlineSave } from "react-icons/hi";
import { CgShoppingCart } from "react-icons/cg";
import { LuUsers } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { FaPowerOff } from "react-icons/fa6";

const Sidebar = ({ isMobile, isOpen, onClose }) => {
	const [close, setClose] = useState();
	useEffect(() => {
		setClose(isOpen);
	}, [isOpen]);

	useEffect(() => {
		console.log("isMobile", isMobile);
	} , [isMobile]);


	return (
		<S.Sidebar isMobile={isMobile} isOpen={isOpen}>
			<button onClick={onClose}>✖</button>
			<p className="logo">
				<span>e</span>Front
			</p>
			<div className="menu" >
				<a id="home" className="menu-item active" href="/">
					<IoGridOutline size={24} />
					Dashboard
				</a>
				<a id="about" className="menu-item" href="/about">
					<HiOutlineSave size={24} />
					Carteira
				</a>
				<a id="contact" className="menu-item" href="/contact">
					<CgShoppingCart size={24} />
					Transações
				</a>
				<a id="contact" className="menu-item" href="/contact">
					<LuUsers size={24} />
					Suporte
				</a>
				<a id="contact" className="menu-item" href="/contact">
					<FiSettings size={24} />
					Ajustes
				</a>
				<a id="contact" className="menu-item disconnect--color" href="/contact">
					<FaPowerOff size={24} />
					Desconectar
				</a>
			</div>
		</S.Sidebar>
	);
};

export default Sidebar;
