import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FavoritePage } from './favorite.page';

describe('FavoritePage', () => {
  let component: FavoritePage;
  let fixture: ComponentFixture<FavoritePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
