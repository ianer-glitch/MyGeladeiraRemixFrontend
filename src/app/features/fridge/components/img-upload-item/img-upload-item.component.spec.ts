import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgUploadItemComponent } from './img-upload-item.component';

describe('ImgUploadItemComponent', () => {
  let component: ImgUploadItemComponent;
  let fixture: ComponentFixture<ImgUploadItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgUploadItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgUploadItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
