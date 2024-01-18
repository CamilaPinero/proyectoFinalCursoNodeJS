import "../styles/logIn.css";
import logo from "../assets/logo.png";
import { AppContext } from "./AppContext";

export const LogIn = () => {
	async function handleLogIn(e) {
		try {
			e.preventDefault();

			//const payload = await logIn;

			AppContext.dispatch({
				type: "setIsLoggedIn",
				payload: true,
			});
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			<div className="container container-log-in">
				<div className="log-in-image">
					<img src={logo} alt="catinstagram" className="logo" />
				</div>
				<div className="card-log-in">
					<div className="card-header header-log-in">
						<h3>Iniciá sesión para continuar</h3>
					</div>
					<div className="card-body body-log-in">
						<form action="submit" onSubmit={(e) => handleLogIn(e)}>
							<div className="mb-3">
								<label
									htmlFor="user-name"
									className="form-label"
								>
									Nombre de usuario
								</label>
								<input
									type="user-name"
									className="form-control"
									id="user-name"
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
								<a href="/sign-in"> registrarte acá</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
