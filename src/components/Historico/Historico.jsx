import React from "react";
import * as S from "./style.js";

const Historico = () => {
	return (
		<S.Container>
			<h1>Histórico de transações</h1>

			<div className="daysWrapper">
				<div className="day">
					<p>Ontem</p>
					<p>R$ -540,32</p>
				</div>
				<div className="day">
					<p>Quinta-Feira</p>
					<p>R$ -273,90</p>
				</div>
				<div className="day">
					<p>Segunda-Feira</p>
					<p>R$ -1.456,20</p>
				</div>
			</div>
		</S.Container>
	);
};

export default Historico;
