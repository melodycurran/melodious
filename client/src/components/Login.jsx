import { useState } from "react";
import { useAuth } from '../context/AuthContext';


function Login() {
	const [formData, setFormData] = useState({ user_name: '', password: '' })
	const { user, login } = useAuth();
	const [message, setMessage] = useState('');

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('http://localhost:3001/account/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify(formData),
				
			});
			const data = await response.json();

			if (response.ok) {
				login(data.user);
				setMessage(`Success: ${data.message}`);
			} else {
				setMessage(`Error: ${data.message}`)
			}

		} catch (error) {
			console.error("Network error: ", error);
			setMessage("Failed to connect to the server.")
		}
	}


	return (
		<>
			<p>Log in to access your playlist</p>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col justify-center p-3">
					<label htmlFor="username">Username: <input type="text" name="user_name" id="username" value={formData.user_name} onChange={handleChange} className="m-2 p-1"/></label>
					<label htmlFor="password">Password: <input type="text" name="password" id="password" value={formData.password} onChange={handleChange} className="m-2 p-1"/></label>
				</div>
				<input type="submit" value="Log In" className="bg-cyan-500 p-2 text-white font-bold rounded-md"/>
			</form>
		</>
		
	)
}

export default Login;