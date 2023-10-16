import {useState}from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props){
  const[modalIsOpen, setModalIsOpen]=useState(false);

  function deleteHandler(){ 
   setModalIsOpen(true);
   }

   function closeModalHandler(){
    setModalIsOpen(false);
   }


    return(
      
    <div className='card'>
    <h2>{props.text}</h2>
    {/* "props" nesnesinden alınan "text" özelliği başlık olarak gösterilir */}
    <div className='actions'>
      <button className='btn' onClick={deleteHandler}>Delete</button>
    </div>
    { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
    { modalIsOpen && <Backdrop onCancel={closeModalHandler} /> }
    {/* kullanıcının silme işlemine devam etmek veya vazgeçmek isteyip istemediğini sormak için kullanılır. Bu tür bir doğrulama işlemi, kullanıcının yanlışlıkla verilerini silmesini önlemek için yaygın olarak kullanılır. */}
   </div>
);
}

export default Todo;
