import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonagemDetalhesComponent } from './personagem-detalhes/personagem-detalhes.component';

interface Personagem {
  nome: string;
  descricao: string;
  habilidades: string[];
  atributos: { FOR: number, DES: number, CON: number, INT: number, SAB: number, CAR: number };
  equipamentos: string[];
}

@Component({
  selector: 'app-selecionar-personagem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selecionar-personagem.component.html',
  styleUrls: ['./selecionar-personagem.component.css']
})
export class SelecionarPersonagemComponent {
  personagens: Personagem[] = [
    {
      nome: 'Oxum',
      descricao: 'Deusa das águas doces, do amor e da fertilidade.',
      habilidades: [],
      atributos: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 }, // Atributos fixos, iniciando em 0
      equipamentos: ['Espelho Mágico']
    },
    {
      nome: 'Xangô',
      descricao: 'Rei do trovão e da justiça.',
      habilidades: [],
      atributos: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 },
      equipamentos: ['Machado Duplo']
    },
    {
      nome: 'Iemanjá',
      descricao: 'Mãe dos oceanos e protetora dos pescadores.',
      habilidades: [],
      atributos: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 },
      equipamentos: ['Concha Mágica']
    },
    {
      nome: 'Ogum',
      descricao: 'Guerreiro e senhor do ferro.',
      habilidades: [],
      atributos: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 },
      equipamentos: ['Espada de Ferro']
    }
  ];

  constructor(private modalService: NgbModal) { }

  abrirModalDetalhes(personagem: Personagem): void {
    const modalRef = this.modalService.open(PersonagemDetalhesComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: true
    });

    modalRef.componentInstance.personagem = personagem;
  }

  removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}