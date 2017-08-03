import { Component ,OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HeroService , Hero } from './heroes.service'
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.html',
})
export class HeroComponent implements OnInit{
  heroes: Observable<Hero[]>;

 private selectedId: number;

 constructor(
   private service: HeroService,
   private route: ActivatedRoute,
   private router: Router
 ) {}

 ngOnInit() {
   this.heroes = this.route.params
     .switchMap((params: Params) => {
       return this.service.getHeroes();
     });
 }

 isSelected(hero: Hero) { return hero.id === this.selectedId; }

 onSelect(hero: Hero) {
   this.router.navigate(['/hero', hero.id]);
 }
}
