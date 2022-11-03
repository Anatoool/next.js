import { PropsWithChildren } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import styles from './layout.module.scss';

type Props = PropsWithChildren<{}>;

export const siteTitle = 'Next.js Sample Website';

export const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>OMDB</title>
      <meta name="description" content="OMDB project" />
      <meta name="og:title" content={siteTitle} />
    </Head>
    <header className={styles.header}>
      <div className={styles['left-container']}>
        <Link href="/">
          <a className={styles.logo}>
            <Image
              priority
              src="/images/logo.svg"
              width={31}
              height={31}
              alt="omdb logo"
            />
            <div className={styles['logo__title']}>omdb</div>
          </a>
        </Link>
      </div>
    </header>
    <main className={styles.content}>{children}</main>
  </>
);
