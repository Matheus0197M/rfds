export interface Tutorial {
  tools: string[];
  steps: string[];
  safetyAlerts: string[];
  relatedVideos: string[];
}

export interface Problem {
  id: number;
  name: string;
  description: string;
  housingType: string;
  difficulty: string;
  tutorial?: Tutorial;
}

export interface RoomData {
  room: string;
  problems: Problem[];
}

export const homeGuideData: RoomData[] = [
  {
    room: "Banheiro",
    problems: [
      {
        id: 1,
        name: "Vaso entupido",
        description: "Água não desce ou transborda; geralmente por papel em excesso, objetos ou acúmulo.",
        housingType: "Ambos",
        difficulty: "Fácil",
        tutorial: {
          tools: [
            "Desentupidor de borracha tipo campana",
            "Luvas de borracha",
            "Água morna",
            "Balde",
            "Pano velho"
          ],
          steps: [
            "Use luvas e proteja o piso com pano.",
            "Se o nível estiver muito alto, retire um pouco de água com balde para evitar transbordo.",
            "Encaixe o desentupidor cobrindo totalmente o furo do vaso.",
            "Faça movimentos firmes de vai-e-vem por cerca de 20 a 30 segundos, sem levantar a borracha.",
            "Acione a descarga e observe.",
            "Repita de 2 a 3 vezes se necessário.",
            "Se não resolver, não use produtos químicos fortes junto com desentupidor: pode respingar material corrosivo. Chame encanador."
          ],
          safetyAlerts: [
            "Não misture produtos de limpeza químicos.",
            "Se houver transbordo frequente ou suspeita de obstrução na rede, procure encanador."
          ],
          relatedVideos: [
            "como desentupir vaso sanitário com desentupidor",
            "vaso entupido o que fazer",
            "desentupidor campana como usar"
          ]
        }
      },
      {
        id: 2,
        name: "Vazamento na base do vaso",
        description: "Água aparece ao redor da base após a descarga; pode ser vedante ou flange comprometidos.",
        housingType: "Ambos",
        difficulty: "Médio"
      },
      {
        id: 3,
        name: "Caixa acoplada vazando",
        description: "Água corre continuamente para o vaso; normalmente vedação ou válvula de enchimento com defeito.",
        housingType: "Ambos",
        difficulty: "Fácil",
        tutorial: {
          tools: [
            "Kit de reparo da caixa acoplada ou vedação compatível",
            "Chave de fenda",
            "Pano",
            "Luvas"
          ],
          steps: [
            "Feche o registro de água do banheiro; em apartamentos, feche o registro do banheiro ou o geral.",
            "Descarregue a água da caixa.",
            "Retire a tampa com cuidado.",
            "Verifique se a boia está muito alta: ela deve desligar a entrada de água antes de transbordar.",
            "Se a água continua caindo pelo tubo central, troque a vedação da válvula de descarga.",
            "Se a caixa transborda, ajuste ou troque a válvula de enchimento/boia.",
            "Abra o registro devagar e teste duas descargas."
          ],
          safetyAlerts: [
            "Se não souber identificar as peças, leve a tampa ou uma foto ao lojista.",
            "Não force conexões plásticas."
          ],
          relatedVideos: [
            "caixa acoplada vazando como resolver",
            "trocar vedação caixa acoplada",
            "regular boia caixa acoplada"
          ]
        }
      },
      {
        id: 4,
        name: "Chuveiro com pouca água",
        description: "Jato fraco ou desigual; costuma ser resíduo de calcário no chuveiro ou pressão baixa.",
        housingType: "Ambos",
        difficulty: "Fácil"
      },
      {
        id: 5,
        name: "Chuveiro elétrico não aquece",
        description: "Água sai fria; pode ser resistência queimada, termostato ou problema elétrico.",
        housingType: "Ambos",
        difficulty: "Médio"
      },
      {
        id: 6,
        name: "Ralo entupido",
        description: "Água demora a escoar; causado por cabelo, sabão e gordura.",
        housingType: "Ambos",
        difficulty: "Fácil",
        tutorial: {
          tools: [
            "Luvas",
            "Chave de fenda ou espátula plástica",
            "Arame grosso ou desentupidor de ralo",
            "Água quente",
            "Detergente neutro"
          ],
          steps: [
            "Use luvas.",
            "Retire a grade ou tampa do ralo.",
            "Remova cabelos e resíduos com a mão protegida, arame ou ferramenta plástica.",
            "Despeje água quente — não fervente — com um pouco de detergente.",
            "Recoloque a grade e teste com água corrente."
          ],
          safetyAlerts: [
            "Evite produtos ácidos fortes; podem danificar tubulações.",
            "Não misture produtos químicos."
          ],
          relatedVideos: [
            "como limpar ralo do banheiro entupido",
            "ralo do box entupido solução caseira",
            "limpar ralo com arame"
          ]
        }
      },
      {
        id: 7,
        name: "Torneira pingando",
        description: "Gotejamento constante; normalmente reparo/cartucho desgastado.",
        housingType: "Ambos",
        difficulty: "Fácil"
      },
      {
        id: 8,
        name: "Mofa e bolor no rejunte",
        description: "Manchas pretas em rejunte, silicone ou teto; umidade e ventilação insuficiente.",
        housingType: "Ambos",
        difficulty: "Fácil"
      },
      {
        id: 9,
        name: "Espelho embaçado ou com manchas",
        description: "Vapor acumulado e depósitos de água; pode indicar ventilação ruim.",
        housingType: "Ambos",
        difficulty: "Fácil"
      },
      {
        id: 10,
        name: "Infiltração no teto do banheiro",
        description: "Mancha de umidade acima do box ou teto; pode vir de impermeabilização ou tubulação.",
        housingType: "Ambos, mais grave em apartamentos",
        difficulty: "Difícil"
      }
    ]
  }
  // Os demais cômodos seguem exatamente a mesma estrutura de array de objetos.
];