import Header from '../../components/Header'
import {getProviders, signIn} from "next-auth/react"

// This is the client side
export default function signin({providers}) {
  return (
    <>
        <Header />
        <div className="mt-40">
            {Object.values(providers).map(provider => (
                <div key={provider.name} className="flex flex-col items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png" alt="google logo" className="w-52 object-cover" />
                    <p className="text-sm my-10 text-center">Disclaimer: This website is created for learning purposes</p>
                    <button className="bg-red-400 text-white rounded-lg p-3 hover:bg-red-500 hover:shadow-md" onClick={() => signIn(provider.id, {callbackUrl: "/"})}>Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    </>
  )
}

// This is the server side
export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: {providers}
    }
}
