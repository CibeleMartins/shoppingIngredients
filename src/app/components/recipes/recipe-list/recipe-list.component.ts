import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipes } from '../recipes.molde';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() emittNameDescription = new EventEmitter<{name: string, description: string, img: string}>();


  recipes: Recipes[] = [
    new Recipes('Macarrao', 'cozinhe o tomate com allho e sal', 'https://img.freepik.com/fotos-gratis/fettuccine-de-macarrao-a-bolonhesa-com-molho-de-tomate-em-tigela-branca_2829-20035.jpg?w=2000&t=st=1665164265~exp=1665164865~hmac=311d36234e34e4d968ee0197419e22a22b66e9bc264fdbd61068cb3d1c6f7992'),
    new Recipes('Arroz', 'cozinhe o tomate com allho e sal', 'https://img.freepik.com/fotos-gratis/fettuccine-de-macarrao-a-bolonhesa-com-molho-de-tomate-em-tigela-branca_2829-20035.jpg?w=2000&t=st=1665164265~exp=1665164865~hmac=311d36234e34e4d968ee0197419e22a22b66e9bc264fdbd61068cb3d1c6f7992'),
    new Recipes('Feijão', 'cozinhe o tomate com allho e sal', 'https://img.freepik.com/fotos-gratis/fettuccine-de-macarrao-a-bolonhesa-com-molho-de-tomate-em-tigela-branca_2829-20035.jpg?w=2000&t=st=1665164265~exp=1665164865~hmac=311d36234e34e4d968ee0197419e22a22b66e9bc264fdbd61068cb3d1c6f7992'),
    new Recipes('Lasanha', 'cozinhe o tomate com allho e sal', 'https://img.freepik.com/fotos-gratis/fettuccine-de-macarrao-a-bolonhesa-com-molho-de-tomate-em-tigela-branca_2829-20035.jpg?w=2000&t=st=1665164265~exp=1665164865~hmac=311d36234e34e4d968ee0197419e22a22b66e9bc264fdbd61068cb3d1c6f7992'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  receiveDetailRecipe(data: {name: string, description: string, img: string}) {

    this.emittNameDescription.emit({name: data.name, description: data.description, img: data.img})
  }
}
