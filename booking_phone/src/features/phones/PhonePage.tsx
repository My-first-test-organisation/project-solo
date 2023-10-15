import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import StateContext from '../../context'
import { Phone, PhoneId } from './types/Phone'

const PhonePage = (): JSX.Element => {

 const { phoneId } = useParams();

 const { state } = useContext(StateContext);
 let phone;
 if (phoneId) {
  phone = state.phones.find((item) => item.id === Number(phoneId))
 }
 return (
  <>
   <div className='container-phone'>
    <div className='phone-item'>
     <div className="card" style={{ width: '18rem' }}>
      <img src={phone?.img} className="card-img-top" alt="Phone" />
      <div className="card-body">
       <h5 className="card-title">{phone?.name}</h5>
       <Link to={`/form-edit-phone/${phoneId}`} className="btn btn-primary btn-delete">Edit</Link>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

export default PhonePage


