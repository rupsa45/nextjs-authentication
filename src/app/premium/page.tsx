import { getSession } from "@/actions";
import Link from "next/link";
import { redirect } from "next/navigation";


const PremiumPage =async () => {
    const session=await getSession();
    if(!session.isLoggedIn){
        redirect("/")
    }
    if(!session.isPro){
        return (
            <div className="notPremium">
                <h1>You are not a premium member</h1>
                <p>Please upgrade to become a premium member.</p>
                <Link href='/profile'>Go the profile page to upgrade to premium</Link>
            </div>
        )
    }
  return (
    <div className="premium">
      <h1>Premium Membership</h1>
      <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Peache</li>
      </ul>
    </div>
  )
}

export default PremiumPage
