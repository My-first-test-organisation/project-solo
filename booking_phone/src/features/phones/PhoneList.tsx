
import React, { useContext } from 'react'
import { PhoneId } from './types/Phone'
import PhoneItem from './PhoneItem'
import './styles/Phone.css'
import StateContext from '../../context'
import FormAddPhone from './FormAddPhone'

const PhoneList = (): JSX.Element => {

 const { state } = useContext(StateContext);

 return (
  <>

   <div className='container-phone'>
    <FormAddPhone />
    <div className='phone-item'>
     {state.phones.map((phone) => <PhoneItem key={phone.id} phone={phone} />)}
    </div>
   </div>
  </>
 )
}

export default PhoneList