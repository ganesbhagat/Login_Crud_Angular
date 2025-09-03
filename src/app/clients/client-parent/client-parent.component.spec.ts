import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientParentComponent } from './client-parent.component';

describe('ClientParentComponent', () => {
  let component: ClientParentComponent;
  let fixture: ComponentFixture<ClientParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientParentComponent]
    });
    fixture = TestBed.createComponent(ClientParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
