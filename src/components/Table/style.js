import styled from "styled-components";

export const Container = styled.div`
	max-width: 1440px;
	/* width: 100%; */
	overflow-x: auto;

	display: flex;
	flex-direction: column;
	gap: 24px;
	background-color: var(--dark--40);
	padding: 24px;
	border-radius: 12px;
`;

export const Table = styled.table`
	max-width: 1200px;
	border-collapse: collapse;

	@media (max-width: 905px){
		width: 900px;
	}

	th,
	td {
		padding: 8px;
		text-align: left;
	}

	th {
		color: var(--dark--10);
	}

	td {
		color: rgb(106, 105, 105);
		font-family: Poppins;
		font-size: 14px;
		font-weight: 500;
		border-bottom: 2px solid rgb(242, 246, 255);
	}

	tr:last-child td {
		border-bottom: none;
	}
`;
