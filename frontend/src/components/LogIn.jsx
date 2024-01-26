import "../styles/logIn.css";
import logo from "../assets/logo.png";
import { logIn } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

export const LogIn = () => {
	const navigate = useNavigate();

	async function handleLogIn(e) {
		try {
			e.preventDefault();
			const response = await logIn({
				user: e.target.username.value,
				password: e.target.password.value,
			});

			if (response.token) {
				localStorage.setItem("token", response.token);
				navigate(0);
			}
		} catch (error) {
			toast.error(error.message);
		}
	}

	return (
		<>
			<div className="container container-log-in">
				<div className="log-in-image">
					<img
						src={logo}
						alt="catinstagram"
						className="logo sign-up"
					/>
				</div>
				<div className="card-log-in">
					<div className="card-header header-log-in">
						<h3>Iniciá sesión para continuar</h3>
					</div>
					<div className="card-body body-log-in">
						<form action="submit" onSubmit={(e) => handleLogIn(e)}>
							<div className="mb-3">
								<label
									htmlFor="username"
									className="form-label"
								>
									Nombre de usuario
								</label>
								<input
									type="username"
									className="form-control"
									id="username"
									placeholder="Ingresa un nombre de usuario"
								></input>
							</div>
							<div className="mb-3">
								<label
									htmlFor="password"
									className="form-label"
								>
									Contraseña
								</label>
								<input
									type="password"
									id="password"
									className="form-control"
									placeholder="Ingresa una contraseña"
								></input>
							</div>

							<button
								type="submit"
								className="btn btn-primary btn-sign-in"
							>
								Iniciar sesión
							</button>
							<p>
								Si todavía no tenés una cuenta podés
								<a href="/sign-up"> registrarte acá</a>
							</p>
						</form>
					</div>
				</div>
			</div>
			<Toaster />
		</>
	);
};
