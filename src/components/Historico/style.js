import styled from "styled-components";

export const Container = styled.div`
	max-width: 604px;
	width: 100%;
	height: 363px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	border-radius: 12px;
	padding: 0 18px;

	h1 {
		color: rgb(39, 39, 39);
		font-size: 20px;
		font-weight: 500;
		line-height: 30px;
		letter-spacing: -2%;
		width: 100%;
		max-width: 560px;
	}

	.daysWrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 560px;
		gap: 20px;

		.day {
			width: calc(100% - 28px);
			display: flex;
			justify-content: space-between;
			padding: 17px 14px;
			border-radius: 8px;
			background-color: var(--brand-color--30);

			color: var(--brand-color--10);
			font-weight: 600;
			font-size: 17px;
		}
	}
`;
