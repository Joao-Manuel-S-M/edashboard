import { useEffect, useState } from "react";
import * as S from "./style.js";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Header from "./components/Header/Header.jsx";
import CardValor from "./components/cardValor/CardValor.jsx";
import Receitas from "./components/Receitas/Receitas.jsx";
import Historico from "./components/Historico/Historico.jsx";
import Table from "./components/Table/Table.jsx";

function App() {
	const [mobile, setMobile] = useState(window.innerWidth <= 1255);

	const [open, setOpen] = useState(false);

	
	
	
	

	useEffect(() => {
		const handleResize = () => {
			setMobile(window.innerWidth <= 1255);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<S.Container>
			<Sidebar isMobile={mobile} isOpen={open} onClose={() => setOpen(false)} />
			<S.Main isMobile={mobile}>
				<Header isMobile={mobile} isOpen={open} setOpen={setOpen} />
				<S.Wrapper>
					<Receitas />
					<Historico />
				</S.Wrapper>
				<S.Wrapper>
					<CardValor
						title={"Total de vendas"}
						price={"R$ 3.265,21"}
						percent={"+11%"}
					/>
					<CardValor
						title={"Total líquido"}
						price={"R$ 2.825,58"}
						percent={"+15%"}
					/>
					<CardValor
						title={"Compras canceladas"}
						price={"R$ 130,00"}
						percent={"-80%"}
					/>

					<CardValor
						title={"Reembolsos"}
						price={"R$ 345,00"}
						percent={"+11%"}
					/>
				</S.Wrapper>
				<Table />
			</S.Main>
		</S.Container>
	);
}

export default App;
