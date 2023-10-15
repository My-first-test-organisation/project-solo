import React, { useState, useContext } from 'react'
import StateContext from '../../context';

const FormAddPhone = (): JSX.Element => {
 const [name, setName] = useState('');
 const [img, setImg] = useState('');
 const { dispatch } = useContext(StateContext)


 const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
  event.preventDefault();
  const res = await fetch('/api/phones/', {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({ name, img }),
  })
  const data = await res.json();
  dispatch({ type: 'post_phone', payload: data })
 }

 return (
  <div>
   <form onSubmit={onHandleSubmit}>
    <input placeholder='Phone name' required type="text" value={name} onChange={(event) => setName(event.target.value)} /><br />
    <input placeholder='Image URL' required type="text" value={img} onChange={(event) => setImg(event.target.value)} /> <br />
    <button type='submit'>Add phone</button>
   </form>
  </div>
 )
}

export default FormAddPhone