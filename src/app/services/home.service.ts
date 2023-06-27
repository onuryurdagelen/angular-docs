import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  edit:boolean = false;

  checkEditStatus():boolean
  {
    if(this.edit)
    {
      let result = confirm("Güncelelem sayfası açıkken çıkmak istediniz,işlemi onaylıyor musunuz?")
      return result;
    }
    return true;
  }
}
