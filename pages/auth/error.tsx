import { ArrowLeftIcon } from "@heroicons/react/solid";
import { BuiltInProviderType } from "next-auth/providers";
import {
  useSession,
  getProviders,
  signIn,
  LiteralUnion,
  ClientSafeProvider,
} from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Template from "../../components/common/Template";

export default function SignIn() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    router.back();
  } else {
    return (
      <div>
        <Head>
          <title>Inmymind</title>
        </Head>
        <Template>
          <div className="h-screen"></div>
        </Template>
      </div>
    );
  }
}
