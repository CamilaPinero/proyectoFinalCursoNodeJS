import { useNavigate } from "react-router-dom";

export const Menu = () => {
	const navigate = useNavigate();
	const options = [
		{ title: "Inicio", route: "/" },
		{ title: "Mensajes", route: "/" },
		{ title: "Configuración", route: "/" },
	];

	return (
		<ul className="menuList">
			{options.map((option) => (
				<li onClick={() => navigate(option.route)} key={option.title}>
					{option.title}
				</li>
			))}
		</ul>
	);
};
