"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { HeroService } from './../../shared/services/hero.service';
//import { Hero } from './../../shared/models/hero';
require("rxjs/add/operator/switchMap");
/*
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    goBack(): void {
      this.location.back();
    }

    ngOnInit(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
        .subscribe(hero => this.hero = hero);
    }
}
*/ 
//# sourceMappingURL=hero-detail.component.js.map