interface Props extends React.ComponentProps<'div'> {}
import styles from '@/styles/FooterDown.module.css';

export const FooterDown = (props: Props) => {
  return (
    <footer id={styles.footerDown} {...props}>
      <h4>© 2022 Embrace, Inc. - All Rights Reserved</h4>
      <div className={styles.links}>
        <p>Terms of use</p>
        <p>Privacy policy</p>
      </div>
    </footer>
  );
};
