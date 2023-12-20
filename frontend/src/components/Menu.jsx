import "../styles/menu.css";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
	const navigate = useNavigate();
	const options = [
		{ title: "Inicio", route: "/" },
		{ title: "Crear publicación", route: "/create-new-publication" },
		{ title: "Configuración", route: "/" },
	];

	return (
		<ul className="menuList">
			{options.map((option) => (
				<li
					onClick={() => navigate(option.route)}
					key={option.title}
					style={{ marginLeft: "10px" }}
				>
					{option.title}
				</li>
			))}
		</ul>
	);
};
