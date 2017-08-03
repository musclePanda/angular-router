import { Component ,OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HeroService ,Hero} from './heroes.service'
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'my-detilhero',
  templateUrl: './detilhero.html',
})
export class DetilheroComponent implements OnInit{
  hero: Hero;

   constructor(
     private route: ActivatedRoute,
     private router: Router,
     private service: HeroService
   ) {}

   ngOnInit() {
     this.route.params
       // (+) converts string 'id' to a number
       .switchMap((params: Params) => this.service.getHero(+params['id']))
       .subscribe((hero: Hero) => this.hero = hero);
   }

   gotoHeroes() {
     let heroId = this.hero ? this.hero.id : null;
     // Pass along the hero id if available
     // so that the HeroList component can select that hero.
     // Include a junk 'foo' property for fun.
     this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
   }
}
