export class Posts{
  // private id:number;    //?: undefined
  // id1:number =0;    predefined
  id:number;
  userId:number;
  title:string;
  body:string;

  constructor(){
   this.id=0;
   this.userId=0;
   this.title="";
   this.body="";
  }
  // getId(): number{
  //     return this.id;
  // }
}
