import { BuiltInProviderType } from "next-auth/providers"
import { useSession, getProviders, signIn, LiteralUnion, ClientSafeProvider } from "next-auth/react"
import { useRouter } from 'next/router'

interface SignInProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
}
// Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default function SignIn({ providers }: SignInProps) {
  const router = useRouter()
  const callbackUrl = router.query.callbackUrl as string || '/'
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

