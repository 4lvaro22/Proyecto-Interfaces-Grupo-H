import logoFunko from '../../assets/images/funkoIcono.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PasswordStrengthBar from 'react-password-strength-bar';
import './signup.css';
import { useState, useEffect, useRef } from 'react';
import validator from 'validator';
import { useModal } from '../../components/Modal';
import { useSession } from '../../hooks/useSession';
import { Link, useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const [passwordEye, setValuePasswordEye] = useState(true);
  const [confirmPasswordEye, setValueConfirmPasswordEye] = useState(true);
  const [registeredModal, showRegisteredModal] = useModal({ type: 'registro' });

  const emailRef = useRef();
  const passwordRef = useRef();
  const nombreRef = useRef();
  const apellidosRef = useRef();
  const direccionRef = useRef();
  const confirmPasswordRef = useRef();
  const { register } = useSession();
  const navigate = useNavigate();

  const validatePassword = () => {
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      console.log(passwordRef.current.value);
      console.log(confirmPasswordRef.current.value);
      confirmPasswordRef.current.setCustomValidity('Las contraseñas no coinciden');
      return false;
    } else {
      confirmPasswordRef.current.setCustomValidity('');
      return true;
    }
  };

  function enterKeyEvent1 () {
    if (window.event.keyCode === 13) {
      document.getElementById('eye1').click();
    }
  }

  function enterKeyEvent2 () {
    if (window.event.keyCode === 13) {
      document.getElementById('eye2').click();
    }
  }

  useEffect(() => {
    document.title = 'Registro | FunkoShop';
  }, []);

  return (
    <>
      {registeredModal}
      {/* <AddedModal alert='Usted se ha registrado correctamente' out='Ir a la para Iniciar Sesión' value='1' /> */}
      <div className='container mb-3' title='Registrarme' aria-label='Registrarme'>
        <div className='row justify-content-md-center'>
          <div className='col d-none d-sm-block col-sm-4 col-lg-5'>
            <span className='align-middle'><img className='w-100' src={logoFunko} alt='icono Funkoshop' /></span>
          </div>
          <div className='ms-5 ms-sm-0 col col-12 col-sm-8 col-lg-6 align-self-center'>
            <div className='container my-5'>
              <div className='row justify-content-center'>
                <form
                  className='col col-lg-7 justify-content-center' onSubmit={(event) => {
                    if (validatePassword()) {
                      if (nombreRef.current.checkValidity() && apellidosRef.current.checkValidity() &&
                      direccionRef.current.checkValidity() && passwordRef.current.checkValidity() &&
                       emailRef.current.checkValidity() && confirmPasswordRef.current.checkValidity()) {
                        event.preventDefault();

                        register({
                          name: nombreRef.current.value,
                          surname: apellidosRef.current.value,
                          direccion: direccionRef.current.value,
                          email: emailRef.current.value,
                          password: passwordRef.current.value
                        });

                        setTimeout(() => {
                          navigate('/');
                        }, 500);
                      }
                    }
                  }}
                >
                  <h2 className=''>Registrarme</h2>
                  <p className='fs-6 fst-italic'>(<span style={{ color: '#cd2026' }}>*</span>) Los campos marcados con un asterisco en rojo son obligatorios.</p>
                  {/* NOMBRE */}
                  <div className='row g-3 align-items-center '>
                    <div className='col-auto'>
                      <label aria-label='Nombre' htmlFor='txtNombre' className='col-form-label'>Nombre <span style={{ color: '#D90000' }}>*</span></label>
                      <div className='input-group d-flex flex-row'>
                        <span className='input-group-text'><i className='bi bi-person' /></span>
                        <input
                          ref={nombreRef}
                          aria-required='true' id='txtNombre' className='form-control' type='text'
                          autofocus='' autocapitalize='none'
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* APELLIDOS */}
                  <div className='row g-3 align-items-center '>
                    <div className='col-auto'>
                      <label aria-label='Apellidos' htmlFor='txtApellidos' className='col-form-label'>Apellidos <span style={{ color: '#D90000' }}>*</span></label>
                      <div className='input-group d-flex flex-row'>
                        <span className='input-group-text'><i className='bi bi-person' /></span>
                        <input
                          ref={apellidosRef}
                          aria-required='true' id='txtApellidos' className='form-control' type='text'
                          autofocus='' autocapitalize='none'
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* DIRECCIÓN */}
                  <div className='row g-3 align-items-center '>
                    <div className='col-auto'>
                      <label aria-label='Direccion' htmlFor='txtDireccion' className='col-form-label'>Direccion <span style={{ color: '#D90000' }}>*</span></label>
                      <div className='input-group d-flex flex-row'>
                        <span className='input-group-text'><i className='bi bi-signpost' /></span>
                        <input
                          ref={direccionRef}
                          aria-required='true' id='txtDireccion' className='form-control' type='text'
                          autofocus='' autocapitalize='none'
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* CORREO ELECTRONICO */}
                  <div className='row g-3 align-items-center '>
                    <div className='col-auto'>
                      <label aria-label='Correo electrónico' htmlFor='txtEmail' className='col-form-label'>Correo Electrónico <span style={{ color: '#D90000' }}>*</span></label>
                      <div className='input-group d-flex flex-row'>
                        <span className='input-group-text'><i className='bi bi-envelope-at' /></span>
                        <input
                          ref={emailRef}
                          aria-required='true' id='txtEmail' className='form-control' type='email'
                          autofocus='' autocapitalize='none' autocomplete='username'
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* CONTRASEÑA */}
                  <div className='row g-3 align-items-center'>
                    <div className='col-auto'>
                      <label aria-label='Contraseña' htmlFor='txtPassword' className='col-form-label'>Contraseña <span style={{ color: '#D90000' }}>*</span></label>
                      <div className='input-group d-flex flex-row'>
                        <span className='input-group-text'>
                          <i className='bi bi-lock' />
                        </span>
                        <input
                          ref={passwordRef}
                          aria-required='true' id='txtPassword' className='form-control'
                          type={(!passwordEye ? 'text' : 'password')}
                          autocomplete='current-password'
                          required
                          onChange={() => validatePassword()}
                        />
                        <span role='button' aria-label={passwordEye ? 'Mostrar Contraseña' : 'Ocultar Contraseña'} id='eye1' tabIndex='0' onKeyDown={() => enterKeyEvent1()} onClick={() => setValuePasswordEye(!passwordEye)} className='input-group-text'>
                          <i className={'bi bi-eye' + (passwordEye ? '-slash' : '')} />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* CONFIRMAR CONTRASEÑA */}
                  <div className='row g-3 align-items-center'>
                    <div className='col-auto'>
                      <label aria-label='Confirmar contraseña' htmlFor='txtConfirmPassword' className='col-form-label'>Confirmar contraseña <span style={{ color: '#D90000' }}>*</span></label>
                      <div className='input-group d-flex flex-row'>
                        <span className='input-group-text'>
                          <i className='bi bi-lock' />
                        </span>
                        <input
                          ref={confirmPasswordRef}
                          aria-required='true' id='txtConfirmPassword' className='form-control'
                          type={(!confirmPasswordEye ? 'text' : 'password')}
                          autocomplete='current-password'
                          required
                          onKeyUp={() => validatePassword()}
                        />
                        <span role='button' aria-label={confirmPasswordEye ? 'Mostrar Contraseña' : 'Ocultar Contraseña'} id='eye2' tabIndex='0' onKeyDown={() => enterKeyEvent2()} onClick={() => setValueConfirmPasswordEye(!confirmPasswordEye)} className='input-group-text'>
                          <i className={'bi bi-eye' + (confirmPasswordEye ? '-slash' : '')} />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* BOTON ENVIAR */}
                  <div className='d-flex flex-row mt-4 justify-content-center'>
                    <button
                        // tabIndex={!validate() ? '-1' : 0} role='button' aria-disabled={!validate()}
                        // disabled={!validate()}
                      type='submit' className='btn col-auto btn-primary'
                    >
                      Registrarme
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default SignUp;
