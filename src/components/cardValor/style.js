import styled from "styled-components";

export const Card = styled.div`
	max-width: 304px;
	min-width: 182px;
	width: 100%;
	display: flex;
	flex: 1;
	padding: 20px;
	flex-direction: column;
	gap: 12px;
	background-color: var(--dark--40);
	border-radius: 12px;
	color: var(--dark--10);

	.title {
		font-size: 16px;
		font-weight: 500;
	}

	.price {
		color: -var(--dark--10);
		font-family: Poppins;
		font-size: 24px;
		font-weight: 600;
		line-height: 36px;
		letter-spacing: 0%;
		text-align: left;
	}
`;

export const Percent = styled.span`
	width: fit-content;
	display: flex;
	align-items: center;
	gap: 5px;
	font-size: 14px;
	font-weight: 600;
	background-color: red;
	padding: 5px 10px;
	border-radius: 30px;
	background-color: ${(props) =>
		props.isRed ? "var(--green--smoke)" : "var(--red--smoke)"};
	color: ${(props) =>
		props.isRed ? "var(--green)" : "var(--red)"};
`;
