import { useEffect, useState, useReducer } from "react";
import "./App.css";
import Navigation from "../features/navigation/Navigation";
import PhoneList from "../features/phones/PhoneList";
import { Route, Routes } from "react-router-dom";
import { State } from "../features/phones/types/State";
import reducer from "../reducers/phonesReducer";
import StateContext from "../context";
import FormAddPhone from "../features/phones/FormAddPhone";
import Registration from "../features/auth/Registration";
import Login from "../features/auth/Login";
import PhonePage from "../features/phones/PhonePage";
import FormEditPhone from "../features/phones/FormEditPhone";

const initialState: State = {
	phones: [],
};

function App(): JSX.Element {

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		(async () => {
			try {
				const res = await fetch('/api/phones');
				const data = await res.json();
				dispatch({ type: 'get_phones', payload: data });
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return (
		<StateContext.Provider value={{ state, dispatch }}>

			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route path="/phones" element={<PhoneList />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/login" element={<Login />} />
					<Route path="/phones/:phoneId" element={<PhonePage />} />
					<Route path="/form-edit-phone/:phoneId" element={<FormEditPhone />} />
				</Route>
			</Routes>

		</StateContext.Provider >
	);
}

export default App;


