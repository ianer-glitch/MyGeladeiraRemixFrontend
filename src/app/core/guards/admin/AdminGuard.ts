import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import * as JWT from 'jwt-decode';
export default class AdminGuard implements CanActivate{
  
  constructor()
   {
  
    
  }
  
  canActivate(): MaybeAsync<GuardResult> {
    const token = localStorage.getItem('token'); 
    if (token) {
      try {
        // Decode the JWT token to extract the payload
        const decodedToken: any = JWT.jwtDecode(token);
        
        // Check if the token has a 'roles' array and the 'admin' role
        if (decodedToken && decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"].includes("Administrator")) {
          return true;
        } else {
          
          return false;
        }
      } catch (error) {
        
        
        return false;
      }
      
    }
    return false;
  }

}

function jwt_decode(token: {}): any {
  throw new Error("Function not implemented.");
}
  