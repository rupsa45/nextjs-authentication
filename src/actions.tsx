"use server"
import { getIronSession } from "iron-session"
import { SessionData, defaultSession, sessionOptions } from "./lib"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
let username="john"
let isPro=true
let isBlocked=true
export const getSession=async()=>{
    
    const session=await getIronSession<SessionData>(cookies(),sessionOptions)
    if(!session.isLoggedIn){
        session.isLoggedIn =defaultSession.isLoggedIn;
    }
    //CHECK THE USER IS BLOCKED OR NOT IN THE DB
    session.isBlocked=isBlocked
    session.isPro=isPro

    return session
}
export const login=async(
    prevState: {error: undefined | string},
    formData: FormData
    )=>{
    const  session= await getSession(); 
    const fromUsername=formData.get( 'username' ) as string ;
    const formPassword=formData.get('password') as string;

    //CHECK USER IN THE DB
    //const user=await db.getUser({username, password});

    if(fromUsername !==username){
        return {
            error:"Wrong Crendentials"
        }
    }
    session.userId='1'
    session.usename=fromUsername;
    session.isPro=isPro
    session.isLoggedIn=true
    await session.save()
    redirect("/")
}
export const logout=async()=>{
const session=await getSession()
session.destroy()
redirect("/")

}
export const changePremium =async()=>{
    const session =await getSession()
    session.isPro=!session.isPro
    await session.save()
    revalidatePath('/profile')
}
export const changeUsername =async(formData:FormData)=>{
    const session =await getSession()
    const newUsername=formData.get("username") as string
    username=newUsername
    session.usename=newUsername
    await session.save()
    revalidatePath('/profile')
}