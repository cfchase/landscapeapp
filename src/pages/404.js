import { useEffect } from 'react'
import { useRouter } from 'next/router'
import convertLegacyUrl from '../utils/convertLegacyUrl'

const checkUrl = path => {
  if (path.indexOf('=') >= 0) {
    const notice = { message: `URL deprecated: ${window.location.href}`, severity: 'warning' }
    const redirectUrl = convertLegacyUrl(path)
    return { redirectUrl, notice }
  } else {
    const notice = { message: `URL not found: ${window.location.href}`, severity: 'error' }
    return { redirectUrl: '/', notice }
  }
}

const NotFoundPage = ({ setNotice }) => {
  const router = useRouter()

  useEffect(() => {
    const path = router.asPath.split('?')[0]
    const { redirectUrl, notice } = checkUrl(path)
    router.push(redirectUrl)
    return () => setNotice(notice)
  }, [])

  return <div>Redirecting...</div>
}

export default NotFoundPage