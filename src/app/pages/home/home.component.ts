import { Component, OnInit } from '@angular/core';
import { iJSONresponse } from '../../Model/jsonresponse';
import { iPost } from '../../Model/i-post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  // POSSO ASSEGNARE ARRAY VUOTI MA NON OGGETTI VUOTI
  // IL "!" VIENE UTILIZZATO PER DICHIARARE CHE IL VALORE ARRIVERA' IN UN SECONDO MOMENTO
  postEvidenza!:iPost;
  postArr: iPost[] = []


  ngOnInit(): void {

fetch("db.json").then(res => {
  if (!res.ok) {
    throw new Error("Errore nella chiamata")
// QUANDO HO UN OGGETTO DEVO CREARE PRIMA UN'INTERFACCIA CHE DESCRIVA L'OGGETT COMPLETO (in questo caso iJSONresponse)
// POI UN'INTERFACCIA CHE DESCRIVA IL CONTENUTO DELL'ARRAY CONTENUTO IN QUELL'OGGETTO (in questo caso iPost)
  } return <Promise<iJSONresponse>> res.json()
}).then(data => {

  //MI PRENDO IL VALORE IN INDEX 0 DI POSTS
  // QUEL ".posts" RICHIAMA LA PROPRIETA' "posts" CHe E' UN ARRAY DENTRO L'OGGETTONE
  this.postEvidenza = data.posts[0]
  // MI PRENDO TUTTI GLI INDEX DI POSTS
  this.postArr = data.posts
  console.log(this.postArr);


}).catch(err => {
  console.log("ERRORE: " + err);

})

  }



}
