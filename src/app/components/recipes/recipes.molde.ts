export class Recipes {

    name: string;
    description:string;
    imagePath:string;

    constructor(name: string, descrip: string, image:string) {
        
        this.name = name;
        this.description = descrip;
        this.imagePath = image;
    }
}