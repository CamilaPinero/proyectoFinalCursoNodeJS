import { useEffect, useState } from "react";
import { Publication } from "./Publication";

export const Container = () => {
	const [publications, setPublications] = useState([]);

	const fetchPublications = async function () {
		try {
			const response = await fetch("http://localhost:3000/publications", {
				method: "GET",
			});

			if (!response.ok) {
				throw new Error("error");
			}

			const data = await response.json();
			setPublications(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchPublications();
	}, []);

	return (
		<div className="container">
			{publications.map((pub) => (
				<Publication key={pub._id} pub={pub} />
			))}
		</div>
	);
};
