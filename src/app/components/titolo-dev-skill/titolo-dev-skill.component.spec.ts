import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TitoloDevSkillComponent } from './titolo-dev-skill.component';

describe('TitoloDevSkillComponent', () => {
  let component: TitoloDevSkillComponent;
  let fixture: ComponentFixture<TitoloDevSkillComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TitoloDevSkillComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TitoloDevSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
