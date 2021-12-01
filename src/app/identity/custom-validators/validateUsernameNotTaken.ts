import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { of, timer } from "rxjs";
import { debounceTime, map, switchMap } from "rxjs/operators";
import { IdentityService } from "../identity.service";







export function validateUsernameNotTaken(https:IdentityService):AsyncValidatorFn{
    return (control:AbstractControl) =>{
      return timer(500).pipe(
        switchMap(() =>{
          if(!control.value){
            return of(null)
          }
          return https.checkUserName(control.value).pipe(
            map(res=>{
                //const value = +res["rspuserexist"]['count'] == 1
               // console.log(value)
              return res ? {userExists: true } : null;
            })
          )
        })
      )
    }
  }