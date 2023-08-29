import Container from './Container';
import { useRouter } from './next/router';
import Link from 'next/link'

export default function Footer() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router;

  const otherLocales = locales.filter(locale => locale !== activeLocale);

  return (
    <footer>
      <Container className="flex items-center justify-center gap-4">
        <span className="bg-[#AC6DDE] px-4 py-2 rounded-xl uppercase text-sm">
          {activeLocale}
        </span>
        {
          otherLocales.map((locale, localeIndex)=>{
            const {pathname, query } = router;
            return (
              <Link key={localeIndex} href={{ pathname, query }} locale={locale}>{locale}</Link>
            )
          })
        }
      </Container>
    </footer>
  )
}