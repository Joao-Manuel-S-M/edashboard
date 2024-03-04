import React from "react";
import * as S from "./style.js";
import Up from "../../assets/icons/up.svg";
import Down from "../../assets/icons/down.svg";

const CardValor = ({ title, price, percent }) => {
	return (
		<S.Card>
			<span className="title">{title}</span>
			<span className="price">{price}</span>
			<S.Percent isRed={percent.includes("+")}>
				<img src={percent.includes("-") ? Down : Up} alt="Up icon" />
				{percent} 
			</S.Percent>
		</S.Card>
	);
};

export default CardValor;

