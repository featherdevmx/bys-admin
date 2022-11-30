import cx from 'classnames';
import {NextPage} from 'next';
import styles from './Signin.module.css';

const Signin:NextPage = () => {
  return (
    <>
      <main className={cx(styles["form-signin"],"text-center","mt-5")}>
        <form>
          <h1 className="h3 mb-3 fw-normal">Iniciar Sesión</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Correo Electrónico</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>

          <div className={cx(styles.checkbox,"mb-3")}>
            <label>
              <input type="checkbox" value="remember-me" /> Recuerdame
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Iniciar Sesión</button>
        </form>
      </main>
    </>
  )
};

export default Signin;

