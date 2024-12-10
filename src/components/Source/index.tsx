import { FaGithub } from 'react-icons/fa'
import { Container } from '@/components/container'
import { SpecialButton } from '../special-button'
import styles from './styles.module.css'

export function Source() {
  return (
    <div className={styles.source}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.iconContainer}>
            <div className={styles.tail}></div>
            <div className={styles.icon}>
              <FaGithub />
            </div>
          </div>

          <h2 className={styles.title}>Open Source</h2>
          <p className={styles.desc}>Moodist is free and open-source!</p>

          <div className={styles.button}>
            <SpecialButton href='https://github.com/remvze/moodist'>
              Source Code
            </SpecialButton>
          </div>
        </div>
      </Container>
    </div>
  )
}
