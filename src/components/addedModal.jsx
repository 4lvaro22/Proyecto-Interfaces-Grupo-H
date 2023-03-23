import { matchPath, resolvePath } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const AddedModal = (props) => {
  return (
    <div className='modal fade modal-show' id='exampleModal' role='dialog' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'><i className='bi bi-check' /> {props.alert}</h5>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
          </div>
          <div className='modal-footer mx-auto'>
            {((props.value === '0') ? <button type='button' className='btn btn-secondary float-start me-5' data-bs-dismiss='modal'>Seguir comprando</button> : '')}

            <button
              type='button' className='btn btn-success float-end'
              onClick={() => {
                $('#exampleModal').modal('hide');
                setTimeout(() => {
                  window.location.href = ((props.value === '0') ? '/Proyecto-Interfaces-Grupo-H/#/Cart' : (((props.value === '1') ? '/Proyecto-Interfaces-Grupo-H/#/LogIn' : '/Proyecto-Interfaces-Grupo-H/#/Contact')));
                }, 500);
              }}
            >{props.out}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedModal;
