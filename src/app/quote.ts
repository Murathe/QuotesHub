export class Quote {
    
    showDescription: boolean;
        constructor(
            public id: number, 
            public quote: string, 
            public author: string, 
            public by:string, 
            public completeDate: Date,
            public numberOfLike: number,
            public numberOfDislike: number)
        {
            this.showDescription = false;
        }

}
