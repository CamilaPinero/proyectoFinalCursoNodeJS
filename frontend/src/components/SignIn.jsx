import "../styles/signIn.css";
import logo from "../assets/logo.png";

export const SignIn = () => {
	return (
		<>
			<div className="container container-sign-in">
				<div className="sign-in-image">
					<h1>Bienvenid@ a</h1>
					<img src={logo} alt="catinstagram" className="logo" />
				</div>
				<div className="card-sign-in">
					<div className="card-header header-sign-in">
						<h3>Registrate para continuar</h3>
					</div>
					<div className="card-body body-sign-in">
						<form action="submit">
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
							<div className="mb-3">
								<label
									htmlFor="confirm-password"
									className="form-label"
								>
									Confirmá tu contraseña
								</label>
								<input
									type="password"
									id="confirm-password"
									className="form-control"
									placeholder="Ingresa la contraseña nuevamente"
								></input>
							</div>
							<button
								type="submit"
								className="btn btn-primary btn-sign-in"
							>
								Registrarte
							</button>
							<p>
								Si ya tenés una cuenta podés
								<a href="/log-in"> iniciar sesión acá</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
