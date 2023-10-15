import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import StateContext from '../../context';

const FormEditPhone = (): JSX.Element => {
 const { phoneId } = useParams();

 const { state } = useContext(StateContext);

 let phone;
 if (phoneId) {
  phone = state.phones.find((item) => item.id === Number(phoneId))
 }

 let [name, setName] = useState(phone?.name);
 let [img, setImg] = useState(phone?.img);

 const { dispatch } = useContext(StateContext)

 const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
  event.preventDefault();
  const res = await fetch(`/api/phones/${phoneId}`, {
   method: 'PUT',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({ name, img }),
  })
  const data = await res.json();

  dispatch({ type: 'put_phone', payload: data })
 }

 return (
  <>
   <div className="container h-100">

    <div className="row h-100 justify-content-center align-items-center">
     <div className="col-10 col-md-8 col-lg-6">
      <h3>Edit phone</h3>
      {/* Form */}
      <form name="signup-form" className="signup-form" onSubmit={onHandleSubmit} method="post">

       <div className="form-group mt-5">
        <input placeholder='Phone name'
         required type="text"
         className="form-control"
         value={name}
         onChange={event => setName(event.target.value)} /><br />
       </div>
       <div className="form-group mt-5">
        <input placeholder='Image URL'
         required type="text"
         className="form-control"
         value={img}
         onChange={(event) => setImg(event.target.value)} /> <br />
       </div>
       <div className="text-center mt-5">
        <button type="submit" className="btn btn-secondary">&nbsp; Sign in &nbsp;</button>
       </div>
      </form>
      {/* Form end */}
     </div>
    </div>
   </div>
  </>
 )
}

export default FormEditPhone;