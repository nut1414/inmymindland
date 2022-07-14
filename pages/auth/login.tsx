import { ArrowLeftIcon, ExclamationIcon } from "@heroicons/react/solid"
import { BuiltInProviderType } from "next-auth/providers"
import { useSession, getProviders, signIn, LiteralUnion, ClientSafeProvider } from "next-auth/react"
import Head from "next/head"
import { useRouter } from 'next/router'
import Template from "../../components/common/Template"

interface SignInProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
}

const ErrorDialog = ({error}: {error: string}) => {
  const dialog: any = {
    'OAuthSignin': 'Unable to sign in. (Authorization Url)',
    'OAuthCallback': 'Unable to sign in. (OAuth Callback)',
    'OAuthCreateAccount': 'Could not create account.',
    'Callback': 'Unable to sign in. (Callback)',
    'OAuthAccountNotLinked': 'Email on this account is already linked, please try again with another login method.',
    'CredentialsSignin': 'Unable to sign in. (Credential)',
    'SessionRequired': 'Unable to sign in. (Session)',
    'Default': 'Unable to sign in. (Unknown)',
    'none': '',
  }
  return (
  <div className="flex bg-red-500 text-white justify-center align-middle p-2 mb-5">
    <ExclamationIcon className="w-8 h-8 self-center pt-1"/>
    <div className="self-center">
      {dialog[error] || 'An unknown error has occurred.'}
    </div>
  </div>
  )
  
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
  const error = router.query.error || 'none'
  const { data: session } = useSession()
  if(!session){
    return (
      <div>

      <Head>
        <title>Sign In | Inmymind</title>
      </Head>
      <Template>
        <div className="flex flex-col place-content-center h-[92vh]">
          {(error !== 'none') ? <ErrorDialog error={error as string}/> : <></>}
          <div className="flex flex-col container max-w-md text-center bg-neutral-100 shadow-2xl p-5 m-auto">
            <div className="text-4xl m-3">
              Sign in
            </div>
            <hr className="mb-6 "></hr>
            <div className="flex flex-col gap-6">
              <button onClick={() => signIn('google')} className="text-xl text-white bg-red-500 py-4 min-w-full">
                  Sign in with Google
              </button>
              <button onClick={() => signIn('facebook')} className="text-xl text-white bg-[#0080FF] py-4 min-w-full">
                  Sign in with Facebook
              </button>
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

