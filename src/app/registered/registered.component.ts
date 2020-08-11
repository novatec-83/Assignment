import { Component, OnInit, Type } from '@angular/core';
import { RegisteredService } from '../registered.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import swal from 'sweetalert2';


declare var $; 

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.scss']
})
export class RegisteredComponent implements OnInit {
 
  name = 'Angular 5';
  dummydata: any[];
check;
y;
  show_toogle:boolean = true
  del_id:any=[]
  // name = 'Angular 6';
  htmlContent = '';
  edit_msg:any =[];
  rating3: number;
  rate;res;
  view_single_notes:any;
  getnote: any = [];
  d_data;
  CandidateID;noteId;user_Id
  get_notes:boolean;
  notes:boolean = false ;
  model: any ={};
  data: any = {};


  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };


  constructor( private myservice: RegisteredService) { }

  ngOnInit(): void {
    
    this.check=0;
    this.y=false
    this.getuser()

    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });
  }

  // countStar(Rating) {
  //   this.selectedValue = Rating;
  //   console.log('Value of star', Rating);
  // }


//   getuser(){
//     this.myservice.dummydata().subscribe(d_data => {
//       console.log(d_data)
//       this.dummydata = d_data.json();
// for(let data of this.dummydata){
//   // this.countStar= this.dummydata(this.Rating);
//       this.countStar(data.Rating)
// }
// });
//   }

  getuser(){
    this.myservice.dummydata().subscribe(d_data => {
      console.log(d_data)
      this.dummydata = d_data.json();
    });
  }

  toogle(event){
    console.log(event)
    this.show_toogle = true
    if (event.press == true) {
      this.show_toogle = true
    }
    else if (event.press == false){
      this.show_toogle = false
    }
  }

  rnotes(CandidateID){
    this.getnote =[]
    this.myservice.getnote(CandidateID).subscribe(note => {
      console.log(note)
      this.getnote = note.json();
    });
  }

  delnotes(){
    console.log(this.del_id)
    this.myservice.deletenotes(this.del_id).subscribe(res =>{

      if(res.status==200){
        swal.fire('successfully deleted','','success');
      
      }
      console.log('delete')
    })
  }

  id:any;
  get_notes_id(id){
    this.edit_msg =[]
    this.del_id =[]
    this.id = id
    this.del_id =id
    console.log(id)
    for (let data of this.getnote.data){
      if( id == data.id){
        this.view_single_notes = data;
        console.log(data)
        this.edit_msg =[]
        this.edit_msg = data.msg_note
      }
    }
  }

  update_notes(){
    this.myservice.editnotes(this.CandidateID,this.edit_msg,this.id).subscribe(note => {

      if(note.status==200){
        swal.fire('update successfully','','success');
this.showSuccess();
       
      }

    })
}
  save_notes(){
    var newNewStr = this.htmlContent;
    newNewStr = newNewStr.replace(/\s/g, "");
    console.log(newNewStr);
    this.myservice.addnotes(this.CandidateID,this.htmlContent.trim(),0).subscribe(note => {
      console.log(note)      
    })
  }
  
  checked(event, CandidateID) {
        if (event.target.checked == true) {
          this.check=this.check+1;
            this.get_notes = true;
            this.notes = true
            this.CandidateID = CandidateID
        }
        else if (event.target.checked == false) {
            this.check=this.check-1;

            this.get_notes = false;
            this.notes = false
            this.CandidateID = null 
        }
console.log(this.check)
        if(this.check==1){
this.y=true
        }

        else{
          this.y=false
        }
      
    }

    getnotebtn(){
      this.rnotes(this.CandidateID)
      if (this.get_notes == true){
        for(let rfm of this.dummydata){
          if ( this.CandidateID ==  rfm.CandidateID){
            this.model = rfm
            rfm = this.model
            console.log(rfm)
          }
        }
      }
    }

   
  get_val(data){
    this.del_id =[]
    this.del_id = data
    console.log(data)
     for(let rfm of this.dummydata){
       if ( data ==  rfm.CandidateID){
         this.model = rfm
         rfm = this.model
         console.log(rfm)
       }
        
      }

  }

error(){
  swal.fire('something went wrong','','error');
}

  showSuccess() {
    
    swal.fire('update successfully','','success');
  }
}
