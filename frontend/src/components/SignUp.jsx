import "../styles/signUp.css";
import logo from "../assets/logo.png";
import { signUp } from "../api/auth";
import toast, { Toaster } from "react-hot-toast";

export const SignUp = () => {
	async function handleSignUp(e) {
		try {
			e.preventDefault();

			if (e.target.password.value === e.target.confirmPassword.value) {
				const response = await signUp({
					user: e.target.username.value,
					password: e.target.password.value,
				});
				console.log(response);
				if (response.ok) {
					toast.success(
						<div>
							Usuario creado! <a href="/log-in">Iniciar sesión</a>
						</div>
					);
				}
			} else {
				toast.error("Las contraseñas no coinciden");
			}
		} catch (response) {
			toast.error(response);
		}
	}

	return (
		<>
			<div className="container container-sign-in">
				<div className="sign-in-image">
					<h1>Bienvenid@ a</h1>
					<img
						src={logo}
						alt="catinstagram"
						className="logo sign-up"
					/>
				</div>
				<div className="card-sign-in">
					<div className="card-header header-sign-in">
						<h3>Registrate para continuar</h3>
					</div>
					<div className="card-body body-sign-in">
						<form action="submit" onSubmit={(e) => handleSignUp(e)}>
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
									required
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
									minLength="3"
									maxLength="8"
									required
								></input>
							</div>
							<div className="mb-3">
								<label
									htmlFor="confirmPassword"
									className="form-label"
								>
									Confirmá tu contraseña
								</label>
								<input
									type="password"
									id="confirmPassword"
									className="form-control"
									placeholder="Ingresa la contraseña nuevamente"
									required
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
								<a className="log-in-link" href="/log-in">
									{" "}
									iniciar sesión acá
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
			<Toaster />
		</>
	);
};
