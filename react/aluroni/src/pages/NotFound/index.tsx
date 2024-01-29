import classNames from 'classnames';

import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';

import styles from './NotFound.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const naigate = useNavigate();

  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true
    })}>
      <div className={styles.voltar}>
        <button onClick={() => naigate(-1)} >
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImage />
    </div >
  );
}

export default NotFound;