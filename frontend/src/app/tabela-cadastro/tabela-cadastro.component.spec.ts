import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCadastroComponent } from './tabela-cadastro.component';

describe('TabelaCadastroComponent', () => {
  let component: TabelaCadastroComponent;
  let fixture: ComponentFixture<TabelaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
