import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
}) 
export class RegisteredService {

  ServerUrl = 'http://34.70.126.62:4000/';

  constructor(private http: Http) { }

  dummydata(){
    return this.http.get(this.ServerUrl + 'dummylisting')
  }

  getnote(u_id){
    return this.http.get(this.ServerUrl + 'getCandidateNotes?userId='+u_id)
  }

  addnotes(u_id,obj,adminid){
    return this.http.get(this.ServerUrl + 'addCandidateNotes?message='+obj+' &userId='+u_id+'&adminid='+adminid)
  }

  editnotes(u_id,obj,noteId){
    return this.http.get(this.ServerUrl + 'updateCandidateNotes?userId='+u_id+'&message='+obj+'&noteId='+noteId)
  }

  deletenotes(id) {
    return this.http.delete( this.ServerUrl + 'removeCandidateNotes?noteId='+id )
  }


}
