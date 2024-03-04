import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	gap: 80px;
	align-items: flex-start;
	height: 100vh;
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	max-width: 1312px;
	width: 100%;
	margin-left: ${(props) => (props.isMobile ? "0" : "335px")};

	
`;

export const Wrapper = styled.div`
	display: flex;
	gap: 24px;
	justify-content: space-between;
	margin-bottom: 40px;

	@media (max-width: 905px) {
		flex-wrap: wrap;
		justify-content: center;
	}
`;
