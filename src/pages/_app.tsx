import { NextUIProvider } from '@nextui-org/react'
import { type AppType } from 'next/dist/shared/lib/utils'
import '~/styles/tailwind.css'
import Layout from '@/components/layout/Layout'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  )
}

export default MyApp
