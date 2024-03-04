import styled from "styled-components";

export const Sidebar = styled.div`
	background-color: var(--dark--40);
	padding: 40px 70px 40px 40px;
	/* height: 100vh; */
	height: 100vh;

	position: fixed;
	z-index: 200;
	left: 0;
	display: ${(props) => (props.isMobile && !props.isOpen ? "none" : "block")};

	button {
		background: none;
		border: none;
		font-size: 15px;
		position: absolute;
		top: 20px;
		right: 20px;

		display: ${(props) => (props.isMobile && props.isOpen ? "block" : "none")};
	}

	.logo {
		margin-bottom: 60px;
		font-size: 32px;
		font-weight: 600;
		color: var(--dark--10);
		margin-left: 18px;

		span {
			color: var(--brand-color--10);
		}
	}

	.menu {
		display: flex !important;
		flex-direction: column;
		gap: 16px;
		height: 100%;

		.menu-item {
			color: var(--dark--10);
			font-size: 18px;
			display: flex;
			align-items: center;
			gap: 10px;
			text-decoration: none;
			font-weight: 500;
			max-width: calc(224px - 32px);
			width: 100%;
			padding: 16px;
			border-radius: 6px;

			&:hover {
				background: var(--brand-color--smoke);
				color: var(--brand-color--10);
			}
		}

		.active {
			background: var(--brand-color--smoke);
			color: var(--brand-color--10);
		}

		.disconnect--color {
			color: var(--red);

			&:hover {
				background: var(--red--smoke);
				color: var(--red);
			}
		}
	}
`;
