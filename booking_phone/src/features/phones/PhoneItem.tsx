import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StateContext from "../../context";
import { Phone, PhoneId } from "./types/Phone";

const PhoneItem = ({ phone }: { phone: Phone }) => {

	const { dispatch } = useContext(StateContext)

	const onHandleRemove = async (value: PhoneId): Promise<void> => {
		try {
			const res = await fetch(`api/phones/${value}`, {
				method: "DELETE",
			});
			const data = await res.json();
			if (data.message === 'success') {
				dispatch({ type: 'delete_phone', payload: value })
			}
		} catch (err) {
			console.error(err);
		}
	};


	return (
		<div data-id={phone.id} className="card" style={{ width: '18rem' }}>
			<img src={phone.img} className="card-img-top" alt="Phone" />
			<div className="card-body">
				<h5 className="card-title">{phone.name}</h5>
				<Link className="btn btn-primary btn-delete" to={`/phones/${phone.id}`}>Look at</Link>

				<button type="button" onClick={() => onHandleRemove(phone.id)} className="btn btn-primary btn-delete">Remove</button>
			</div>
		</div>
	);
};

export default PhoneItem;
