import Link from 'next/link';
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './styles.module.scss'

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d, MMMM', {
    locale: ptBR,
  })
  return (
    <header className={styles.headerContainer} >
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="logo podcastr" />
        </a>
      </Link>
      <p>O melhor para voce ouvir, sempre.</p>

      <span>{currentDate}</span>
    </header>
  )
}