import { PropsWithChildren } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';

type Props = PropsWithChildren<{}>;

export const siteTitle = 'Next.js Sample Website';

export const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>OMDB</title>
      <meta name="description" content="OMDB project" />
      <meta name="og:title" content={siteTitle} />
    </Head>
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <>
              <Image
                priority
                src="/images/logo.svg"
                width={31}
                height={31}
                alt="omdb logo"
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontSize: '0.8125rem',
                  ml: 1.125,
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 700,
                }}
              >
                omdb
              </Typography>
            </>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
    <Box component="main">
      <Container maxWidth="xl">{children}</Container>
    </Box>
  </>
);
