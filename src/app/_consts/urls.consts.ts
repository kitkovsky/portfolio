type Url = {
  live: string
  github: string
}

export const urls = {
  ca: {
    live: 'https://codenames-annihilator.vercel.app',
    github: 'https://github.com/kitkovsky/codenames-annihilator',
  },
  ds: {
    live: 'https://datasport-scraper-yjeauzp5za-lm.a.run.app',
    github: 'https://github.com/kitkovsky/datasport-scraper',
  },
  cc: {
    live: 'https://www.xn--cosprztam-gdb.pl',
    github: 'https://github.com/kitkovsky/cleaning-calendar',
  },
} satisfies Record<string, Url>
