import { SessionOptions } from "iron-session";

export interface SessionData{
    userId?:string;
    usename?:string;
    img?:string;
    isPro?:boolean;
    isLoggedIn:boolean;
    isBlocked?:boolean;
}
export const defaultSession:SessionData={
    isLoggedIn:false
}
export const sessionOptions:SessionOptions={
    password:process.env.SECRET_KEY!,
    cookieName:"hello rupsa",
    cookieOptions:{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production"
    }
}