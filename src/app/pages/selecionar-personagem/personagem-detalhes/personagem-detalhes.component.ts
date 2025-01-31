import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

interface Atributos {
  FOR: number;
  DES: number;
  CON: number;
  INT: number;
  SAB: number;
  CAR: number;
}

interface Personagem {
  nome: string;
  descricao: string;
  habilidades: string[];
  atributos: { [key: string]: number };
  equipamentos: string[];
}

@Component({
  selector: 'app-personagem-detalhes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personagem-detalhes.component.html',
  styleUrls: ['./personagem-detalhes.component.css']
})
export class PersonagemDetalhesComponent {
  @Input() personagem: Personagem | null = null;

  constructor(public activeModal: NgbActiveModal) { }

  adicionarHabilidade(personagem: Personagem): void {
    const novaHabilidade = prompt('Digite uma nova habilidade:');
    if (novaHabilidade) {
      personagem.habilidades.push(novaHabilidade);
    }
  }

  adicionarAtributo(personagem: Personagem): void {
    const nomeAtributo = prompt('Digite o nome do atributo (ex: FOR, DES):');
    const valorAtributo = prompt('Digite o valor do atributo:');
    if (nomeAtributo && valorAtributo) {
      personagem.atributos[nomeAtributo.toUpperCase()] = +valorAtributo;
    }
  }

  adicionarEquipamento(personagem: Personagem): void {
    const novoEquipamento = prompt('Digite um novo equipamento:');
    if (novoEquipamento) {
      personagem.equipamentos.push(novoEquipamento);
    }
  }

  getAtributos(personagem: Personagem): { key: string, value: number }[] {
    return Object.keys(personagem.atributos).map(key => ({ key, value: personagem.atributos[key] }));
  }

  incrementarAtributo(personagem: Personagem, atributo: keyof Atributos): void {
    personagem.atributos[atributo]++;
  }

  fecharModal(): void {
    this.activeModal.dismiss();
  }

  removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}