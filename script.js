Hooks.once('init', async function() {
    console.log('Sangue dos Ancestrais | Iniciando módulo...');

    game.dnd5e.classes.sorcerer.subclasses['sangue-dos-ancestrais'] = {
        label: 'Sangue dos Ancestrais',
        description: 'Os descendentes de magos antigos capazes de manipular a própria vontade do universo.',
        features: {
            3: {
                'feitiços-antigos': {
                    name: 'Feitiços Antigos',
                    description: 'Você sempre tem preparados os seguintes feitiços: Absorver Elementos, Míssil Mágico, Alterar-se, Levitar.'
                },
                'poder-abundante': {
                    name: 'Poder Abundante',
                    description: 'Ao conjurar uma magia de 1º a 5º nível, role um d100. Se o resultado for 10 ou menos, a magia não consome um espaço de magia.',
                    effect: {
                        "changes": [],
                        "flags": {},
                        "duration": {"seconds": 0},
                        "icon": "icons/magic/control/buff-energy-shield-blue.webp",
                        "tint": "#ADD8E6"
                    }
                }
            },
            6: {
                'chama-arcana': {
                    name: 'Chama Arcana',
                    description: 'Como ação, consuma um slot de magia para desencadear uma explosão de energia mágica. Criaturas em uma área de 20 pés fazem um teste de Força. Sofrem 2d8 de dano de força por nível da magia consumida e podem ser derrubadas.',
                    effect: {
                        "changes": [{"key": "macro.execute", "mode": 0, "value": "chamaArcana", "priority": 20}],
                        "duration": {"rounds": 1},
                        "icon": "icons/magic/fire/explosion-flame-embers-orange.webp",
                        "tint": "#FF4500"
                    }
                }
            },
            14: {
                'fluxo-magico': {
                    name: 'Fluxo Mágico',
                    description: 'Quando você ativa Poder Abundante, também recupera 2d4 Pontos de Feitiçaria.',
                    effect: {
                        "changes": [{"key": "system.resources.sorcery.value", "mode": 2, "value": "2d4", "priority": 20}],
                        "duration": {"seconds": 0},
                        "icon": "icons/magic/light/explosion-star-blue.webp",
                        "tint": "#4169E1"
                    }
                }
            },
            18: {
                'poder-alem-do-poder': {
                    name: 'Poder Além do Poder',
                    description: 'Magias de 1º a 5º nível são conjuradas um nível acima. Se Feitiçaria Inata estiver ativa, são conjuradas dois níveis acima.',
                    effect: {
                        "changes": [{"key": "macro.execute", "mode": 0, "value": "poderAlemDoPoder", "priority": 20}],
                        "duration": {"seconds": 0},
                        "icon": "icons/magic/symbols/circle-glowing-blue.webp",
                        "tint": "#0000CD"
                    }
                }
            }
        },
        spellcasting: {
            3: ['absorb-elements', 'magic-missile', 'alter-self', 'levitate'],
            5: ['fly', 'sending'],
            7: ['divination', 'fabricate'],
            9: ['awaken', 'telekinesis']
        }
    };

    console.log('Sangue dos Ancestrais | Subclasse registrada com sucesso.');
});
