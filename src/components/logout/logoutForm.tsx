import { logout } from "@/actions"

const LogoutForm=()=>{
    return (
        <form action={logout}>
        
           <button type="submit">Log Out</button>
        </form>
    )
}
export default LogoutForm