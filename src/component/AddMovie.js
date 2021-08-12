import React, { useState } from 'react'
import Modal from 'react-modal';
const AddMovie = ({handleadd}) => {
    const [form,setForm] = useState(
        {name:"",
        date:"",
        image:"",
        rating:1,

        }
    )
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');
      const handlsubmit=(e) => {
          let newmovie = {
         ...form, id:Math.random()
        }
         handleadd(newmovie) 
         
     }
     const handlechage = (e) => {
     setForm({...form,[e.target.name]:e.target.value })}
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div>
            <button className="btn add-movie-btn" onClick={openModal}>add movie</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form onSubmit={handlsubmit } >
         <label for="" >name movies </label>
         <input type ="text" name="name"onChange={ handlechage } />
         <label for="" >image </label>
         <input type ="url" name="image" />
         <label for="" >Date </label>
         <input type ="date" name="date" />
         <label for="" >rate </label>
         <p> rate </p>
          <button className="btn btn-primary" >add</button>
          <button className="btn btn-danger" onClick={openModal}>cancel</button>
        </form>
      </Modal>
        </div>
    )
}

export default AddMovie
