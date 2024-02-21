import { changePremium, changeUsername, getSession } from "@/actions"
import { redirect } from "next/navigation"



const ProfilePage=async  () => {
    const session=await getSession()
    if(!session.isLoggedIn){
        redirect('/')
    }
  return (
    <div className="profile">
        <h1>Profile Page</h1>
        <p>Welcome , <b>{session.usename}</b></p>
        <p>This is a profile page. You can put whatever you want in here.</p>
        <span>You are <b>{session.isPro ? "premium" : "free"}</b></span>
        <form action={changePremium}>
            <button>{session.isPro ? 'cancel' : "Buy"} Premium</button>
        </form>
        <form action={changeUsername}>
            <input type="text"  name="username" required placeholder={session.usename}/>
            <button>update</button>
        </form>
    </div>
  )
}

export default ProfilePage
