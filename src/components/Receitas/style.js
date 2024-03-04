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
    gap: 24px;
    border-radius: 12px;
	padding: 0 18px;
	/* padding: 0 8px; */
	

	h1 {
		color: -var(--dark--10);
		font-family: Poppins;
		font-size: 20px;
		font-weight: 500;
		line-height: 30px;
		letter-spacing: -2%;
        width: 100%;
        max-width: 505px;
	}
`;
