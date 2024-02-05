import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserGamesComponent } from './browser-games.component';

describe('BrowserGamesComponent', () => {
  let component: BrowserGamesComponent;
  let fixture: ComponentFixture<BrowserGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowserGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowserGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
