import {Component, inject} from '@angular/core';
import {NavigationEnd, Router, RouterModule} from '@angular/router';
import {UserService} from "@micro-frontend-angular-nx/auth";
import {distinctUntilChanged, filter, map, of} from "rxjs";
import {AsyncPipe, CommonModule} from "@angular/common";
import {setAssetsAction, setSelectedAssetAction} from "@micro-frontend-angular-nx/store";
import {Store} from "@ngrx/store";
import {FormsModule} from "@angular/forms";

@Component({
  standalone: true,
  imports: [CommonModule,RouterModule, AsyncPipe, FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly store = inject(Store);
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  assets$ = this.store.select(s => s.store.assets);
  isHome$ : any;
  selectedAsset : string = '';
  constructor(private userService: UserService, private router: Router,) {}
  ngOnInit() {
    this.store.subscribe(data => {
      console.log(data);
    })
    this.checkHome();
    this.loadAssets();
    this.checkLogin();
  }

  public checkHome(): void {
    this.isHome$ = this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url === '/'))
  }

  public loadAssets(): void {
    of(['Bakken', 'Eagle Ford', 'Delaware']).subscribe({
      next: data => this.store.dispatch(setAssetsAction({data}))
    })
  }

  public checkLogin(): void {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        setTimeout(() => {
          if (!loggedIn) {
            this.router.navigateByUrl('login');
          } else {
            this.router.navigateByUrl('');
          }
        });
      });
  }
  logout() {
    this.userService.logout();
  }

  public assetChange(e: any): void {
    this.store.dispatch(setSelectedAssetAction({data: this.selectedAsset}));
  }
}
