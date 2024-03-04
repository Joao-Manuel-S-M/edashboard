import React from "react";
import * as S from "./style.js";

const Table = () => {
	const dados = [
		{
			id: 1,
			data: "01/01/2022",
			nome: "João",
			localizacao: "São Paulo",
			valor: 100,
			situacao: "Ativo",
		},
		{
			id: 2,
			data: "02/01/2022",
			nome: "Maria",
			localizacao: "Rio de Janeiro",
			valor: 200,
			situacao: "Inativo",
		},
		{
			id: 3,
			data: "03/01/2022",
			nome: "Pedro",
			localizacao: "Belo Horizonte",
			valor: 150,
			situacao: "Ativo",
		},
		// Adicione mais dados conforme necessário
	];

	return (
		<S.Container>
			<S.Table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Data</th>
						<th>Nome</th>
						<th>Localização</th>
						<th>Valor</th>
						<th>Situação</th>
					</tr>
				</thead>
				<tbody>
					{dados.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.data}</td>
							<td>{item.nome}</td>
							<td>{item.localizacao}</td>
							<td>{item.valor}</td>
							<td>{item.situacao}</td>
						</tr>
					))}
				</tbody>
			</S.Table>
		</S.Container>
	);
};

export default Table;
