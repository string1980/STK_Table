import {Injectable} from '@angular/core';
import {from} from 'rxjs';
import * as pnp from 'sp-pnp-js';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharepointService {

  constructor(private http: HttpClient) {
  }

  getCurrentUser() {
    return from(pnp.sp.web.currentUser.get());
  }

  getMasterDataList() {
    // return  this.http.get('https://jsonplaceholder.typicode.com/todos');
    return from(pnp.sp.web.lists.getByTitle('MasterDataList').items.get());
  }

}
