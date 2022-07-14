import { ArrowLeftIcon } from "@heroicons/react/solid"
import { BuiltInProviderType } from "next-auth/providers"
import { useSession, getProviders, signIn, LiteralUnion, ClientSafeProvider } from "next-auth/react"
import Head from "next/head"
import { useRouter } from 'next/router'
import Template from "../../components/common/Template"

interface SignInProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
}

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
      <div>

      <Head>
        <title>Sign In | Inmymind</title>
      </Head>
      <Template>
        <div className="flex place-content-center h-[92vh] drop-shadow-xl">
          <div className="flex flex-col container max-w-md text-center bg-white p-5 m-auto">
            <div className="text-4xl m-3">
              Sign in
            </div>
            <hr className="mb-6"></hr>
            <div className="flex flex-col gap-6">
              {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button onClick={() => signIn(provider.id)} className="text-xl bg-red-300 p-4">
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
            <button onClick={() => router.back()} className="flex place-self-start"><ArrowLeftIcon className="w-6"/>Go back</button>
            </div>
          </div>
        </div>
      </Template>
        
      </div>
    )
  }else{
     callbackUrl ? router.push(callbackUrl) : router.push('/')
  }
  
}

