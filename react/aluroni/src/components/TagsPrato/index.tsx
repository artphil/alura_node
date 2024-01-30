import classNames from 'classnames';
import styles from './TagsPrato.module.scss';
import { PratoType } from 'types/CardapioTypes';

function TagsPrato(props: PratoType) {
  const { category, size, serving, price } = props;
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags__tipo]: true,
          [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true
        })}>{category.label}</div>
      <div className={styles.tags__porcao}>{size}g</div>
      <div className={styles.tags__qtdpessoas}>Serve {serving} pessoa{serving === 1 ? '' : 's'}</div>
      <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
}

export default TagsPrato;