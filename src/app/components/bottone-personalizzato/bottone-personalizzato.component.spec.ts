import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BottonePersonalizzatoComponent } from './bottone-personalizzato.component';

describe('BottonePersonalizzatoComponent', () => {
  let component: BottonePersonalizzatoComponent;
  let fixture: ComponentFixture<BottonePersonalizzatoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BottonePersonalizzatoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BottonePersonalizzatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
