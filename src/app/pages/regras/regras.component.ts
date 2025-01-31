import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-regras',
  imports: [
    CommonModule
  ],
  templateUrl: './regras.component.html',
  styleUrls: ['./regras.component.css']
})
export class RegrasComponent {
  habilidades = [
    {
      nome: 'Cura Regenerativa',
      descricao: 'Restaura pontos de vida ao longo do tempo, inspirada na energia vital de Oxum.',
    },
    {
      nome: 'Raio Destruidor',
      descricao: 'Invoca um raio poderoso para causar dano massivo, associado a Xangô.',
    },
    {
      nome: 'Barreira de Água',
      descricao: 'Cria uma barreira protetora que reduz dano recebido, ligada a Iemanjá.',
    },
    {
      nome: 'Golpe de Guerra',
      descricao: 'Um ataque físico devastador com alta precisão, inspirado em Ogum.',
    },
    {
      nome: 'Dança dos Espíritos',
      descricao: 'Convocação de ancestrais para auxiliar em batalha.',
    },
    {
      nome: 'Sopro de Anansi',
      descricao: 'Cria teias ilusórias para confundir inimigos.',
    },
    {
      nome: 'Bênção de Nyame',
      descricao: 'Aumenta a sabedoria e a conexão espiritual.',
    },
    {
      nome: 'Fúria de Shango',
      descricao: 'Aumenta o poder de ataque com a energia de trovões.',
    },
    {
      nome: 'Proteção de Oya',
      descricao: 'Concede resistência contra ventos e tempestades.',
    },
    {
      nome: 'Visão de Orunmilá',
      descricao: 'Revela segredos e fraquezas dos inimigos.',
    },
    {
      nome: 'Canto de Yemoja',
      descricao: 'Acalma aliados e reduz efeitos negativos.',
    },
    {
      nome: 'Lança de Ogun',
      descricao: 'Ataque à distância com precisão divina.',
    },
    {
      nome: 'Passos de Eshu',
      descricao: 'Aumenta a velocidade e a agilidade.',
    },
    {
      nome: 'Escudo de Obatalá',
      descricao: 'Protege contra ataques mágicos e físicos.',
    },
    {
      nome: 'Fogo de Oya',
      descricao: 'Invoca chamas para queimar inimigos.',
    },
    {
      nome: 'Cura Ancestral',
      descricao: 'Restaura saúde com a energia dos ancestrais.',
    },
    {
      nome: 'Grito de Ekpo',
      descricao: 'Causa medo e paralisia nos inimigos.',
    },
    {
      nome: 'Armadura de Nkosi',
      descricao: 'Aumenta a defesa física e espiritual.',
    },
    {
      nome: 'Luz de Olodumare',
      descricao: 'Ilumina áreas escuras e revela inimigos ocultos.',
    },
    {
      nome: 'Chicote de Oya',
      descricao: 'Ataque em área com ventos cortantes.',
    },
    {
      nome: 'Paz de Obatalá',
      descricao: 'Reduz a agressividade de inimigos.',
    },
    {
      nome: 'Força de Ogun',
      descricao: 'Aumenta a força física temporariamente.',
    },
    {
      nome: 'Manto de Invisibilidade',
      descricao: 'Torna o usuário invisível por um curto período.',
    },
    {
      nome: 'Sussurros de Anansi',
      descricao: 'Manipula a mente dos inimigos.',
    },
    {
      nome: 'Círculo de Proteção',
      descricao: 'Cria um campo de força ao redor do usuário.',
    },
    {
      nome: 'Lança de Oya',
      descricao: 'Ataque poderoso com energia dos ventos.',
    },
    {
      nome: 'Bênção de Oxalá',
      descricao: 'Concede imunidade a efeitos negativos.',
    },
    {
      nome: 'Fúria de Oya',
      descricao: 'Aumenta o poder de ataque com ventos cortantes.',
    },
    {
      nome: 'Cura das Águas',
      descricao: 'Restaura saúde com a energia das águas sagradas.',
    },
    {
      nome: 'Visão de Ifá',
      descricao: 'Revela caminhos ocultos e armadilhas.',
    },
  ];

  // Lista de equipamentos genéricos
  equipamentos = [
    {
      nome: 'Espada de Aço',
      descricao: 'Uma espada afiada que aumenta o dano físico.',
    },
    {
      nome: 'Colar de Proteção',
      descricao: 'Aumenta a resistência a danos mágicos.',
    },
    {
      nome: 'Tridente Sagrado',
      descricao: 'Protege o usuário e aumenta a defesa.',
    },
    {
      nome: 'Machado de Batalha',
      descricao: 'Causa dano adicional em combates corpo a corpo.',
    },
    {
      nome: 'Adaga de Anansi',
      descricao: 'Uma adaga que causa dano venenoso.',
    },
    {
      nome: 'Escudo de Shango',
      descricao: 'Protege contra raios e trovões.',
    },
    {
      nome: 'Arco de Ogun',
      descricao: 'Um arco que dispara flechas incendiárias.',
    },
    {
      nome: 'Manto de Iemanjá',
      descricao: 'Concede proteção contra ataques aquáticos.',
    },
    {
      nome: 'Cajado de Orunmilá',
      descricao: 'Aumenta o poder de habilidades mágicas.',
    },
    {
      nome: 'Lança de Oya',
      descricao: 'Uma lança que causa dano com ventos cortantes.',
    },
    {
      nome: 'Anel de Oxum',
      descricao: 'Aumenta a regeneração de saúde.',
    },
    {
      nome: 'Couraça de Obatalá',
      descricao: 'Protege contra ataques físicos e mágicos.',
    },
    {
      nome: 'Pele de Leão',
      descricao: 'Aumenta a força e a resistência física.',
    },
    {
      nome: 'Amuleto de Eshu',
      descricao: 'Concede sorte e agilidade.',
    },
    {
      nome: 'Elmo de Xangô',
      descricao: 'Protege contra ataques elétricos.',
    },
    {
      nome: 'Botas de Anansi',
      descricao: 'Aumenta a velocidade e a destreza.',
    },
    {
      nome: 'Pergaminho de Ifá',
      descricao: 'Revela segredos e fraquezas dos inimigos.',
    },
    {
      nome: 'Martelo de Ogun',
      descricao: 'Causa dano massivo em combates corpo a corpo.',
    },
    {
      nome: 'Véu de Iemanjá',
      descricao: 'Concede invisibilidade temporária.',
    },
    {
      nome: 'Cinto de Shango',
      descricao: 'Aumenta o poder de ataque com trovões.',
    },
    {
      nome: 'Pena de Oxum',
      descricao: 'Aumenta a persuasão e o carisma.',
    },
    {
      nome: 'Luvas de Oya',
      descricao: 'Concede ataques com ventos cortantes.',
    },
    {
      nome: 'Estatueta de Obatalá',
      descricao: 'Protege contra efeitos negativos.',
    },
    {
      nome: 'Colar de Contas',
      descricao: 'Aumenta a conexão espiritual.',
    },
    {
      nome: 'Espada de Bronze',
      descricao: 'Uma espada sagrada que causa dano extra a espíritos.',
    },
    {
      nome: 'Escudo de Couro',
      descricao: 'Protege contra ataques físicos.',
    },
    {
      nome: 'Arco de Caça',
      descricao: 'Um arco simples, mas eficaz em combate.',
    },
    {
      nome: 'Pó de Ancestrais',
      descricao: 'Concede visão espiritual e revela inimigos ocultos.',
    },
    {
      nome: 'Cajado de Cura',
      descricao: 'Aumenta a eficácia de habilidades de cura.',
    },
    {
      nome: 'Máscara de Guerra',
      descricao: 'Aumenta a resistência e o poder de ataque.',
    },
  ];

  // Controla qual modal está aberto
  modalAberto: string | null = null;

  // Abre o modal com base no tipo (habilidades ou equipamentos)
  abrirModal(tipo: string) {
    this.modalAberto = tipo;
  }

  // Fecha o modal
  fecharModal() {
    this.modalAberto = null;
  }
}