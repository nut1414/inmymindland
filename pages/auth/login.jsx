import { useSession, getProviders, signIn } from "next-auth/react"
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default function SignIn({ providers }) {
  const router = useRouter()
  const callbackUrl = router.query.callbackUrl || '/'
  const { data: session } = useSession()
  if(!session){
    return (
      <>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </>
    )
  }else{
     callbackUrl ? router.push(callbackUrl) : router.push('/')
  }
  
}

