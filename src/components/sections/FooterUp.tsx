interface Props extends React.ComponentProps<'div'> {}
import { footerData, footerIcons } from '@/data';
import styles from '@/styles/FooterUp.module.css';
import { Button, LogoFull } from '../global';

export const FooterUp = (props: Props) => {
  return (
    <div {...props} id={styles.footerUp}>
      <div id={styles.into}>
        <LogoFull id={styles.logo} />
        <div className={styles.iconContainer}>
          {footerIcons.map((item, index) => (
            <img
              key={index}
              src={item.icon}
              alt={item.alt}
              className={styles.socialIcon}
            />
          ))}
        </div>

        <Button className={styles.contactButton}>Contact Us </Button>
      </div>
      <div id={styles.linkList}>
        {footerData.map((item, index) => (
          <p className={styles.links} key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
