import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	margin-top: 40px;
	margin-bottom: 40px;

	
	.wrapper-text {

		button {
			margin-bottom: 80px;
			display: none;
			background: none;
			border: none;

			@media (max-width: 1255px) {
				display: block;
			}
		}

		.title {
			color: #272727;
			font-family: Poppins;
			font-size: 30px;
			font-style: normal;
			font-weight: 500;
			line-height: 150%; /* 45px */
		}
		.infs {
			color: #6a6969;
			font-family: Poppins;
			font-size: 18px;
			font-style: normal;
			font-weight: 500;
			line-height: 150%; /* 27px */
		}
	}


	.wrapper-profile {
		display: flex;
		gap: 32px;
		align-items: center;

		.icon {
			background: var(--dark--40);
			color: var(--dark--20);
			padding: 7px;
			border-radius: 50%;
            cursor: pointer;
		}

		.user {
            display: flex;
            align-items: center;
            gap: 15px;
            cursor: pointer;
			.username {
				color: #272727;
				font-size: 16px;
				font-style: normal;
				font-weight: 500;
				line-height: 150%;
			}
		}
	}
`;
