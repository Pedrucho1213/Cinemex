import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesinePage } from './desine.page';

describe('DesinePage', () => {
  let component: DesinePage;
  let fixture: ComponentFixture<DesinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
