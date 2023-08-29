import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { locale } = useRouter();

  const greetings = {
    en: 'Hello World!',
    nl: 'Hallo Wereld!',
    de: 'Hallo Welt!'
  }
   
  return (
    <section>
      <h1 className="text-6xl mx-auto max-w-xl text-center font-bold">
        {greetings[locale]}
      </h1>
    </section>
  )
}
