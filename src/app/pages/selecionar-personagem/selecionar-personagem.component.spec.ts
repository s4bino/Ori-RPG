import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarPersonagemComponent } from './selecionar-personagem.component';

describe('SelecionarPersonagemComponent', () => {
  let component: SelecionarPersonagemComponent;
  let fixture: ComponentFixture<SelecionarPersonagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionarPersonagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
