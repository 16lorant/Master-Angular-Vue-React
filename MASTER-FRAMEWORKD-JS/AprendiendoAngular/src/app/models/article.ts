export class Article{
    /*public title: string;
    public year: number;
    public image: string;

    constructor(title:string,year:number,image:string){
        this.title = title;
        this.year = year;
        this.image = image;
    }*/
   constructor(
        public _id: string,
        public title: number,
        public content: string,
        public image: string,
        public date: any
   ){}
}