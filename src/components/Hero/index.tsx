import { BsSoundwave } from 'react-icons/bs'
import { Container } from '@/components/container'
import { count as soundCount } from '@/lib/sounds'
import styles from './styles.module.css'

export function Hero() {
  const count = soundCount()

  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.wrapper}>
          <img
            alt='Faded Moodist Logo'
            aria-hidden='true'
            className={styles.logo}
            height={45}
            src='/logo.svg'
            width={45}
          />

          <div className={styles.title}>
            <div className={styles.left}></div>
            <h2>Moodist</h2>
            <div className={styles.right}></div>
          </div>

          <h1 className={styles.desc}>Ambient sounds for focus and calm.</h1>

          <p className={styles.sounds}>
            <span aria-hidden='true' className={styles.icon}>
              <BsSoundwave />
            </span>
            <span>{count} Sounds</span>
          </p>
        </div>
      </Container>
    </div>
  )
}
