import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumcComponent } from './albumc.component';

describe('AlbumcComponent', () => {
  let component: AlbumcComponent;
  let fixture: ComponentFixture<AlbumcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
