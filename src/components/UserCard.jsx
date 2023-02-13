import React from 'react'
import "./styles/UserCard.css"

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {

const handleClickEdit = () => {
  setUpdatingUser(user)
  handleClickShowModal()
}

  return (
    <article className='userCard__container' key={user.id}>
    <h3 className='userCard__name' >{user.first_name} {user.last_name}</h3>
    <hr className='userCard__hr' />
    <ul className='userCard__list' >
      <li className='userCard__item'><span>EMAIL </span>{user.email}</li>
      <li className='userCard__item'><span>BIRTHDAY </span><i className='bx bx-gift'></i>{user.birthday}</li>
    </ul>
    <hr className='userCard__hr' />
    <footer className='userCard__footer' >
      <button className='userCard__btn__trash' onClick={() => deleteUser(user.id)}><i className= 'bx bx-trash'></i></button>
      <button className='userCard__btn__pencil' onClick={handleClickEdit} ><i className='bx bx-pencil'></i></button>
    </footer>
  </article>
  )
}

export default UserCard