export interface User  {
    localId:string
    email:string
    emailVerified:boolean	
    displayName:string
    providerUserInfo: object[]	
    photoUrl:string	
    passwordHash:string	
    passwordUpdatedAt:number	
    validSince:string	
    disabled:boolean	
    lastLoginAt:string	
    createdAt:string	
    customAuth:boolean	
    
}