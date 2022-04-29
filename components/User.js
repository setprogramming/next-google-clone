import { useSession, signIn, signOut } from "next-auth/react"

export default function User() {
  const { data: session, status } = useSession()

  if(status === "authenticated") {
    return (
      <>
        <img onClick={signOut} src={session.user.image} alt="user-profile-image" className="h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1" />
      </>
    )
  } else {
    return (
      <>
        <button onClick={signIn} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:brightness-105 hover:shadow-md">Sign in</button>
      </>
    )
  }
  
}
