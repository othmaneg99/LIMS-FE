import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesCatalogueComponent } from './articlesCatalogue.component';

describe('ArticlesComponent', () => {
  let component: ArticlesCatalogueComponent;
  let fixture: ComponentFixture<ArticlesCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesCatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
