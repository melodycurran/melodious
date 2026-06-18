import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function Logout() {
	const { logout } = useAuth();
	const [message, setMessage] = useState('');

	const handleLogout = async () => {

		try {
			const response = await fetch('http://localhost:3001/account/logout', {
				method: 'POST',
				credentials: 'include'
			});

			const data = await response.json();

			if (response.ok) {
				logout();
				setMessage(data.message);
			}


		} catch (error) {
			console.error("Network error: ", error);
			setMessage("Failed to connect to the server.")
		}
	}

	return (
		<>
			<li onClick={handleLogout}>Logout</li>
			<p>{message}</p>
		</>
		
	)
}

export default Logout;