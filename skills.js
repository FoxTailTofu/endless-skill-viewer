
si = [1, 10, 25, 60, 150, 400, 750, 1200, 2e3, 3e3, 5e3];
ni = '-'
ki = {
  WARRIOR: {
    bash: {
      id: 'bash',
      name: () => 'Bash',
      type: () => 'toggle',
      manaCost: e => 1 + 0.05 * e,
      requiredLevel: () => si[0],
      icon: () => 'war-axe',
      description: () => 'While active, increases damage but costs mana per attack',
      maxLevel: () => ni,
      effect: e => ({
        damage: 1 * e,
        damagePercent: 1 * e
      })
    },
    toughness: {
      id: 'toughness',
      name: () => 'Toughness',
      type: () => 'passive',
      requiredLevel: () => si[0],
      icon: () => 'shield',
      description: () => 'Permanently increases armor',
      maxLevel: () => ni,
      effect: e => ({
        armor: 3 * e,
        armorPercent: 2.5 * e
      })
    },
    powerStrike: {
      id: 'powerStrike',
      name: () => 'Power Strike',
      type: () => 'instant',
      manaCost: e => 4 + 0.2 * e,
      cooldown: () => 5000,
      requiredLevel: () => si[1],
      icon: () => 'sword',
      description: () => 'A powerful strike that deals increased damage',
      maxLevel: () => ni,
      effect: e => ({
        damage: 2 * e,
        damagePercent: 5 * e
      })
    },
    ironWill: {
      id: 'ironWill',
      name: () => 'Iron Will',
      type: () => 'passive',
      requiredLevel: () => si[1],
      icon: () => 'helmet',
      description: () => 'Increases resistance to damage',
      maxLevel: () => ni,
      effect: e => ({
        vitality: 1 * e,
        vitalityPercent: 1 * e,
        lifeRegen: 0.4 * e
      })
    },
    battleCry: {
      id: 'battleCry',
      name: () => 'Battle Cry',
      type: () => 'buff',
      manaCost: e => 10 + 0.4 * e,
      cooldown: () => 72000,
      duration: () => 30000,
      requiredLevel: () => si[2],
      icon: () => 'cry',
      description: () => 'Temporarily increases damage',
      maxLevel: () => ni,
      effect: e => ({
        damagePercent: 2 * e
      })
    },
    fortitude: {
      id: 'fortitude',
      name: () => 'Fortitude',
      type: () => 'passive',
      requiredLevel: () => si[2],
      icon: () => 'armor',
      description: () => 'Increases life regeneration',
      maxLevel: () => ni,
      effect: e => ({
        lifeRegenOfTotalPercent: Math.min(0.005 * e, 1),
        lifeRegen: 0.75 * e,
        lifeRegenPercent: 1 * e
      })
    },
    groundSlam: {
      id: 'groundSlam',
      name: () => 'Ground Slam',
      type: () => 'instant',
      manaCost: e => 5 + 0.3 * e,
      cooldown: () => 9500,
      requiredLevel: () => si[3],
      icon: () => 'slam',
      description: () => 'Deals instant damage',
      maxLevel: () => ni,
      effect: e => ({
        damagePercent: 8 * e
      })
    },
    shieldWall: {
      id: 'shieldWall',
      name: () => 'Shield Wall',
      type: () => 'buff',
      manaCost: e => 12 + 0.5 * e,
      cooldown: () => 40000,
      duration: () => 16000,
      requiredLevel: () => si[4],
      icon: () => 'wall',
      description: () => 'Increases armor and block chance temporarily',
      maxLevel: () => ni,
      effect: e => ({
        armorPercent: 6 * e,
        blockChance: 0.1 * e
      })
    },
    berserk: {
      id: 'berserk',
      name: () => 'Berserk',
      type: () => 'toggle',
      manaCost: e => 3 + 0.15 * e,
      requiredLevel: () => si[5],
      icon: () => 'berserk',
      description: () => 'Gives huge amounts of physical and fire damage',
      maxLevel: () => ni,
      effect: e => ({
        damagePercent: 1 * e,
        fireDamage: 2 * e,
        fireDamagePercent: 3 * e
      })
    },
    lastStand: {
      id: 'lastStand',
      name: () => 'Last Stand',
      type: () => 'passive',
      requiredLevel: () => si[5],
      icon: () => 'last-stand',
      description: () => 'Greatly increases offensive stats',
      maxLevel: () => 100,
      effect: e => ({
        lifeSteal: 0.02 * e,
        attackSpeed: 0.01 * e,
        attackRating: 6 * e,
        attackRatingPercent: 4 * e
      })
    },
    warlord: {
      id: 'warlord',
      name: () => 'Warlord',
      type: () => 'passive',
      requiredLevel: () => si[6],
      icon: () => 'warlord',
      description: () => 'Increases all attributes significantly',
      maxLevel: () => 200,
      effect: e => ({
        lifePercent: 0.3 * e,
        damagePercent: 0.3 * e,
        strengthPercent: 1.5 * e,
        vitalityPercent: 1.5 * e,
        agilityPercent: 1.5 * e,
        wisdomPercent: 1 * e,
        endurancePercent: 1.5 * e
      })
    }
  },
  ROGUE: {
    shadowDance: {
      id: 'shadowDance',
      name: () => 'Shadow Dance',
      type: () => 'passive',
      requiredLevel: () => si[0],
      icon: () => 'dagger',
      description: () => 'A quick dance from the shadows, increasing your damage.',
      maxLevel: () => ni,
      effect: e => ({
        damagePercent: 0.75 * e,
        critChance: 0.05 * e,
        agility: 3 * e
      })
    },
    evasion: {
      id: 'evasion',
      name: () => 'Evasion',
      type: () => 'passive',
      requiredLevel: () => si[0],
      icon: () => 'dodge',
      description: () => '\n        Increases armor and block chance. \n        Additionally, when blocking, you also recover life equal to 1% of your maximum life.\n        ',
      maxLevel: () => ni,
      effect: e => ({
        blockChance: Math.min(0.05 * e, 25),
        dexterity: 2 * e,
        dexterityPercent: 2 * e
      })
    },
    poisonDagger: {
      id: 'poisonDagger',
      name: () => 'Poison Dagger',
      type: () => 'toggle',
      manaCost: e => 2 + 0.1 * e,
      requiredLevel: () => si[1],
      icon: () => 'poison',
      description: () => 'Applies physical damage to your attacks.',
      maxLevel: () => ni,
      effect: e => ({
        damagePercent: 2 * e,
        earthDamagePercent: 1.5 * e,
        waterDamagePercent: 1 * e
      })
    },
    shadowForm: {
      id: 'shadowForm',
      name: () => 'Shadow Form',
      type: () => 'buff',
      manaCost: e => 10 + 0.5 * e,
      cooldown: () => 66000,
      duration: () => 25000,
      requiredLevel: () => si[1],
      icon: () => 'stealth',
      description: () => 'Shadow form increases crit chance, life steal and dexterity (crit damage). (Crit chance capped at 20%, crit damage capped at 3, life steal capped at 4%)',
      maxLevel: () => ni,
      effect: e => ({
        critChance: Math.min(0.05 * e, 20),
        critDamage: Math.min(0.002 * e, 3),
        lifeSteal: Math.min(0.01 * e, 4),
        agilityPercent: 1 * e
      })
    },
    flurry: {
      id: 'flurry',
      name: () => 'Flurry',
      type: () => 'instant',
      manaCost: e => 5 + 0.2 * e,
      cooldown: () => 5000,
      requiredLevel: () => si[2],
      icon: () => 'flurry',
      description: () => 'Unleash a series of rapid attacks, dealing bonus damage.',
      maxLevel: () => ni,
      effect: e => ({
        damagePercent: 8 * e
      })
    },
    precision: {
      id: 'precision',
      name: () => 'Precision',
      type: () => 'passive',
      requiredLevel: () => si[2],
      icon: () => 'agility',
      description: () => 'Significantly increases agility.',
      maxLevel: () => ni,
      effect: e => ({
        agilityPercent: 2.5 * e
      })
    },
    backstab: {
      id: 'backstab',
      name: () => 'Backstab',
      type: () => 'instant',
      manaCost: e => 5,
      cooldown: () => 15200,
      requiredLevel: () => si[3],
      icon: () => 'backstab',
      description: () => 'A devastating attack from behind, dealing massive damage and stealing resources.',
      maxLevel: () => 100,
      effect: e => ({
        damagePercent: 3 * e,
        lifePerHit: 2 * e,
        manaPerHit: 0.33 * e
      })
    },
    darkPact: {
      id: 'darkPact',
      name: () => 'Dark Pact',
      type: () => 'buff',
      manaCost: e => 14 + 0.3 * e,
      cooldown: () => 61000,
      duration: () => 20000,
      requiredLevel: () => si[4],
      icon: () => 'dark-pact',
      description: () => 'Massively increases crit damage temporarily.',
      maxLevel: () => 500,
      effect: e => ({
        critDamage: 0.075 * e
      })
    },
    assassination: {
      id: 'assassination',
      name: () => 'Assassination',
      type: () => 'toggle',
      manaCost: e => 2 + 0.4 * e,
      requiredLevel: () => si[5],
      icon: () => 'assassination',
      description: () => 'Greatly increases damage',
      maxLevel: () => ni,
      effect: e => ({
        damagePercent: 3 * e,
        coldDamagePercent: 5 * e,
        airDamagePercent: 5 * e
      })
    },
    deadlyPrecision: {
      id: 'deadlyPrecision',
      name: () => 'Deadly Precision',
      type: () => 'passive',
      requiredLevel: () => si[5],
      icon: () => 'precision',
      description: () => 'Permanently increases crit chance and crit damage.',
      maxLevel: () => 1000,
      effect: e => ({
        critChance: 0.05 * e,
        critDamage: 0.0025 * e,
        attackRating: 15 * e,
        attackRatingPercent: 0.5 * e
      })
    },
    masterThief: {
      id: 'masterThief',
      name: () => 'Master Thief',
      type: () => 'passive',
      requiredLevel: () => si[6],
      icon: () => 'master',
      description: () => 'Greatly increases attributes and gold gains.',
      maxLevel: () => 500,
      effect: e => ({
        damagePercent: 0.5 * e,
        dexterityPercent: 2 * e,
        agilityPercent: 2 * e,
        wisdomPercent: 1 * e,
        bonusGoldPercent: 0.25 * e
      })
    }
  },
  VAMPIRE: {
    bloodSiphon: {
      id: 'bloodSiphon',
      name: () => 'Blood Siphon',
      type: () => 'toggle',
      manaCost: e => 1 + 0.1 * e,
      requiredLevel: () => si[0],
      icon: () => 'blood',
      description: () => 'Steal life from enemies with each attack.',
      maxLevel: () => 300,
      effect: e => ({
        lifePerHit: 0.33 * e,
        damage: 1 * e,
        damagePercent: 0.5 * e
      })
    },
    nightStalker: {
      id: 'nightStalker',
      name: () => 'Night Stalker',
      type: () => 'passive',
      requiredLevel: () => si[0],
      icon: () => 'moon',
      description: () => 'Increases damage at night.',
      maxLevel: () => ni,
      effect: e => ({
        damagePercent: 0.5 * e,
        agility: 2 * e
      })
    },
    vampiricStrike: {
      id: 'vampiricStrike',
      name: () => 'Vampiric Strike',
      type: () => 'instant',
      manaCost: e => 2 + 0.2 * e,
      cooldown: () => 9500,
      requiredLevel: () => si[1],
      icon: () => 'bite',
      description: () => 'A powerful strike that restores life.',
      maxLevel: () => ni,
      effect: e => ({
        damagePercent: 2 * e,
        lifePerHit: 1 * e
      })
    },
    darkAura: {
      id: 'darkAura',
      name: () => 'Dark Aura',
      type: () => 'buff',
      manaCost: e => 6 + 0.5 * e,
      cooldown: () => 64000,
      duration: () => 28000,
      requiredLevel: () => si[1],
      icon: () => 'blood-aura',
      description: () => 'Increases life steal and damage temporarily.',
      maxLevel: () => ni,
      effect: e => ({
        lifeSteal: 0.02 * e,
        attackRating: 3 * e,
        attackRatingPercent: 2 * e
      })
    },
    drainingTouch: {
      id: 'drainingTouch',
      name: () => 'Draining Touch',
      type: () => 'instant',
      manaCost: e => 0 + 0 * e,
      cooldown: () => 12200,
      requiredLevel: () => si[2],
      icon: () => 'drain',
      description: () => 'Drains life from enemies, restoring your life.',
      maxLevel: () => 100,
      effect: e => ({
        earthDamage: 4 * e,
        earthDamagePercent: 4 * e,
        manaPerHit: 0.2 * e
      })
    },
    greaterBloodHunger: {
      id: 'greaterBloodHunger',
      name: () => 'Greater Blood Hunger',
      type: () => 'passive',
      requiredLevel: () => si[2],
      icon: () => 'bloodlust',
      description: () => 'Increases strength and vitality.',
      maxLevel: () => ni,
      effect: e => ({
        strengthPercent: 0.5 * e,
        vitalityPercent: 1 * e
      })
    },
    crimsonBurst: {
      id: 'crimsonBurst',
      name: () => 'Crimson Burst',
      type: () => 'instant',
      manaCost: e => 3 + 0.5 * e,
      cooldown: () => 5000,
      requiredLevel: () => si[3],
      icon: () => 'burst',
      description: () => 'Unleashes a burst of crimson energy, greatly damaging the enemy at the cost of life.',
      maxLevel: () => ni,
      effect: e => ({
        damagePercent: 10 * e,
        lifePerHit: - 1 * e
      })
    },
    bloodPact: {
      id: 'bloodPact',
      name: () => 'Blood Pact',
      type: () => 'buff',
      manaCost: e => 20 + 0.2 * e,
      cooldown: () => 66000,
      duration: () => 30000,
      requiredLevel: () => si[4],
      icon: () => 'pact',
      description: () => 'Increases life steal and life temporarily.',
      maxLevel: () => 400,
      effect: e => ({
        lifePercent: 1 * e
      })
    },
    eternalThirst: {
      id: 'eternalThirst',
      name: () => 'Eternal Thirst',
      type: () => 'toggle',
      manaCost: e => 2 + 0.5 * e,
      requiredLevel: () => si[5],
      icon: () => 'thirst',
      description: () => 'Increases life steal and damage.',
      maxLevel: () => 200,
      effect: e => ({
        damagePercent: 2 * e,
        lifePerHit: 2 * e
      })
    },
    deathlyPresence: {
      id: 'deathlyPresence',
      name: () => 'Deathly Presence',
      type: () => 'passive',
      requiredLevel: () => si[5],
      icon: () => 'presence',
      description: () => 'Increases life greatly, and strength mildly.',
      maxLevel: () => 100,
      effect: e => ({
        lifePercent: 0.5 * e,
        strengthPercent: 0.38 * e,
        vitalityPercent: 2 * e
      })
    },
    lordOfNight: {
      id: 'lordOfNight',
      name: () => 'Lord of Night',
      type: () => 'passive',
      requiredLevel: () => si[6],
      icon: () => 'lord',
      description: () => 'Greatly increases all attributes and gives resurrection.',
      maxLevel: () => 500,
      effect: e => ({
        strengthPercent: 1 * e,
        vitalityPercent: 2 * e,
        resurrectionChance: 0.1 * e,
        wisdomPercent: 1 * e,
        wisdom: 2 * e
      })
    }
  },
  PALADIN: {
    holyLight: {
      id: 'holyLight',
      name: () => 'Holy Light',
      type: () => 'instant',
      manaCost: e => 3 + 0.2 * e,
      cooldown: () => 6000,
      requiredLevel: () => si[0],
      icon: () => 'light',
      description: () => 'A burst of holy light that heals allies and damages enemies. (max 5% of max life)',
      maxLevel: () => ni,
      effect: e => ({
        life: 5 * e,
        lifePercent: Math.min(0.1 * e, 5)
      })
    },
    smite: {
      id: 'smite',
      name: () => 'Smite',
      type: () => 'toggle',
      manaCost: e => 1,
      requiredLevel: () => si[0],
      icon: () => 'smite',
      description: () => 'A powerful strike that deals holy damage to enemies.',
      maxLevel: () => ni,
      effect: e => ({
        damagePercent: 1 * e,
        fireDamagePercent: 2 * e
      })
    },
    shieldBash: {
      id: 'shieldBash',
      name: () => 'Shield Bash',
      type: () => 'instant',
      manaCost: e => 3 + 0.1 * e,
      cooldown: () => 4500,
      requiredLevel: () => si[0],
      icon: () => 'bash',
      description: () => 'Bashes an enemy with your shield, stunning them.',
      maxLevel: () => ni,
      effect: e => ({
        damagePercent: 3 * e
      })
    },
    divineProtection: {
      id: 'divineProtection',
      name: () => 'Divine Protection',
      type: () => 'passive',
      requiredLevel: () => si[0],
      icon: () => 'protection',
      description: () => 'Greatly increases armor and block chance.',
      maxLevel: () => 200,
      effect: e => ({
        armorPercent: 2 * e,
        blockChance: 0.1 * e,
        thornsDamage: 0.5 * e,
        thornsDamagePercent: 0.5 * e
      })
    },
    consecration: {
      id: 'consecration',
      name: () => 'Consecration',
      type: () => 'buff',
      manaCost: e => 12 + 0.6 * e,
      cooldown: () => 70000,
      duration: () => 28000,
      requiredLevel: () => si[1],
      icon: () => 'consecration',
      description: () => 'Blesses the ground, dealing holy damage to enemies.',
      maxLevel: () => ni,
      effect: e => ({
        fireDamagePercent: 3 * e,
        coldDamagePercent: 3 * e
      })
    },
    greaterHealing: {
      id: 'greaterHealing',
      name: () => 'Greater Healing',
      type: () => 'instant',
      manaCost: e => 8 + 0.3 * e,
      cooldown: () => 18000,
      requiredLevel: () => si[1],
      icon: () => 'heal',
      description: () => 'Heals a large amount of life instantly.',
      maxLevel: () => 200,
      effect: e => ({
        lifePercent: 0.25 * e
      })
    },
    divineShield: {
      id: 'divineShield',
      name: () => 'Divine Shield',
      type: () => 'buff',
      manaCost: e => 13 + 0.5 * e,
      cooldown: () => 47000,
      duration: () => 20000,
      requiredLevel: () => si[2],
      icon: () => 'holy-shield',
      description: () => 'Creates a shield that absorbs damage.',
      maxLevel: () => 200,
      effect: e => ({
        armorPercent: 6 * e,
        blockChance: 0.2 * e
      })
    },
    auraOfLight: {
      id: 'auraOfLight',
      name: () => 'Aura of Light',
      type: () => 'passive',
      requiredLevel: () => si[2],
      icon: () => 'holy-aura',
      description: () => 'Increases healing effects and reduces damage taken.',
      maxLevel: () => 500,
      effect: e => ({
        lifePercent: 0.4 * e,
        armorPercent: 1 * e,
        fireResistance: 0.05 * e,
        coldResistance: 0.05 * e,
        airResistance: 0.05 * e,
        earthResistance: 0.05 * e,
        waterResistance: 0.05 * e,
        lightningResistance: 0.05 * e
      })
    },
    wrathOfTheHeavens: {
      id: 'wrathOfTheHeavens',
      name: () => 'Wrath of the Heavens',
      type: () => 'instant',
      manaCost: e => 10 + 0.8 * e,
      cooldown: () => 12400,
      requiredLevel: () => si[3],
      icon: () => 'wrath',
      description: () => 'Calls down holy energy to smite enemies.',
      maxLevel: () => ni,
      effect: e => ({
        damagePercent: 3 * e,
        fireDamagePercent: 5 * e,
        airDamagePercent: 5 * e
      })
    },
    beaconOfFaith: {
      id: 'beaconOfFaith',
      name: () => 'Beacon of Faith',
      type: () => 'passive',
      requiredLevel: () => si[3],
      icon: () => 'beacon',
      description: () => 'Increases healing done.',
      maxLevel: () => 500,
      effect: e => ({
        lifeRegen: 0.5 * e,
        lifeRegenPercent: 0.5 * e,
        lifeRegenOfTotalPercent: Math.min(0.1 * e, 1)
      })
    },
    holyBarrier: {
      id: 'holyBarrier',
      name: () => 'Holy Barrier',
      type: () => 'buff',
      manaCost: e => 30 + 0.7 * e,
      cooldown: () => 44000,
      duration: () => 20000,
      requiredLevel: () => si[4],
      icon: () => 'barrier',
      description: () => 'Creates a holy barrier that increases all healing effects.',
      maxLevel: () => 500,
      effect: e => ({
        vitality: 3 * e,
        vitalityPercent: 0.5 * e,
        resurrectionChance: 0.1 * e
      })
    },
    divineWrath: {
      id: 'divineWrath',
      name: () => 'Divine Wrath',
      type: () => 'toggle',
      manaCost: e => 4 + 0.3 * e,
      requiredLevel: () => si[5],
      icon: () => 'wrath',
      description: () => 'Unleashes divine energy to increase damage and healing.',
      maxLevel: () => 400,
      effect: e => ({
        damagePercent: 2 * e,
        lifePerHit: 2 * e
      })
    },
    guardianAngel: {
      id: 'guardianAngel',
      name: () => 'Guardian Angel',
      type: () => 'passive',
      requiredLevel: () => si[5],
      icon: () => 'angel',
      description: () => 'Provides a chance to resurrect with maximum life upon death',
      maxLevel: () => 400,
      effect: e => ({
        resurrectionChance: 0.1 * e,
        lifeRegen: 2 * e,
        lifeRegenPercent: 0.5 * e,
        manaRegen: 0.5 * e,
        manaRegenPercent: 1 * e
      })
    },
    ascension: {
      id: 'ascension',
      name: () => 'Ascension',
      type: () => 'passive',
      requiredLevel: () => si[6],
      icon: () => 'ascension',
      description: () => 'Grants significant bonuses to all attributes.',
      maxLevel: () => 400,
      effect: e => ({
        elementalDamagePercent: 0.75 * e,
        endurance: 3 * e,
        endurancePercent: 1 * e,
        vitality: 3 * e,
        vitalityPercent: 1 * e,
        attackRatingPercent: 4 * e
      })
    }
  },
  BERSERKER: {
    frenzy: {
      id: 'frenzy',
      name: () => 'Frenzy',
      type: () => 'toggle',
      manaCost: e => 2 + 0.1 * e,
      requiredLevel: () => si[0],
      icon: () => 'frenzy',
      description: () => 'Increases attack speed and damage while active.',
      maxLevel: () => ni,
      effect: e => ({
        damage: 1 * e,
        damagePercent: 2 * e,
        lifePerHit: - 0.4 * e
      })
    },
    toughSkin: {
      id: 'toughSkin',
      name: () => 'Tough Skin',
      type: () => 'passive',
      requiredLevel: () => si[0],
      icon: () => 'tough-skin',
      description: () => 'Increases armor and reduces damage taken.',
      maxLevel: () => 200,
      effect: e => ({
        armor: 2 * e,
        armorPercent: 2 * e
      })
    },
    recklessSwing: {
      id: 'recklessSwing',
      name: () => 'Reckless Swing',
      type: () => 'instant',
      manaCost: e => 5 + 0.2 * e,
      cooldown: () => 8000,
      requiredLevel: () => si[1],
      icon: () => 'swing',
      description: () => 'A powerful strike that sacrifices life for damage.',
      maxLevel: () => ni,
      effect: e => ({
        damage: 3 * e,
        damagePercent: 4 * e,
        lifePerHit: - 1 * e
      })
    },
    battleCry: {
      id: 'battleCry',
      name: () => 'Battle Cry',
      type: () => 'buff',
      manaCost: e => 8 + 0.5 * e,
      cooldown: () => 24400,
      duration: () => 12000,
      requiredLevel: () => si[1],
      icon: () => 'battle-cry',
      description: () => 'Boosts damage and attack speed temporarily.',
      maxLevel: () => 100,
      effect: e => ({
        damagePercent: 0.5 * e,
        attackSpeed: 0.005 * e,
        lifeSteal: Math.min(0.01 * e, 4)
      })
    },
    berserkersRage: {
      id: 'berserkersRage',
      name: () => 'Berserker\'s Rage',
      type: () => 'toggle',
      manaCost: e => 4 + 0.1 * e,
      requiredLevel: () => si[2],
      icon: () => 'berserker-rage',
      description: () => 'Greatly increases damage but lowers defense.',
      maxLevel: () => 200,
      effect: e => ({
        fireDamagePercent: 3 * e,
        airDamagePercent: 3 * e,
        doubleDamageChance: Math.min(0.2 * e, 20)
      })
    },
    greaterFrenzy: {
      id: 'greaterFrenzy',
      name: () => 'Greater Frenzy',
      type: () => 'passive',
      requiredLevel: () => si[2],
      icon: () => 'greater-rage',
      description: () => 'Further enhances attack speed and damage.',
      maxLevel: () => 300,
      effect: e => ({
        attackSpeed: 0.0075 * e,
        lifePerHit: 0.75 * e
      })
    },
    earthquake: {
      id: 'earthquake',
      name: () => 'Earthquake',
      type: () => 'instant',
      manaCost: e => 7 + 0.3 * e,
      cooldown: () => 9900,
      requiredLevel: () => si[3],
      icon: () => 'earthquake',
      description: () => 'Smashes the ground, dealing earth damage.',
      maxLevel: () => ni,
      effect: e => ({
        damagePercent: 5 * e,
        earthDamagePercent: 10 * e
      })
    },
    rageMastery: {
      id: 'rageMastery',
      name: () => 'Rage Mastery',
      type: () => 'passive',
      requiredLevel: () => si[3],
      icon: () => 'mastery',
      description: () => 'Increases critical chance and critical damage.',
      maxLevel: () => 100,
      effect: e => ({
        critChance: Math.min(0.05 * e, 20),
        critDamage: Math.min(0.005 * e, 3),
        doubleDamageChance: Math.min(0.1 * e, 20),
        attackRatingPercent: 5 * e,
        lifePercent: - 0.15 * e
      })
    },
    bloodLust: {
      id: 'bloodLust',
      name: () => 'Blood Lust',
      type: () => 'buff',
      manaCost: e => 20 + 0.25 * e,
      cooldown: () => 76000,
      duration: () => 28000,
      requiredLevel: () => si[4],
      icon: () => 'bloodlust',
      description: () => 'Increases attack speed and life steal temporarily.',
      maxLevel: () => 250,
      effect: e => ({
        attackSpeed: 0.002 * e,
        lifeSteal: 0.01 * e,
        lifePercent: 0.25 * e
      })
    },
    unbridledFury: {
      id: 'unbridledFury',
      name: () => 'Unbridled Fury',
      type: () => 'toggle',
      manaCost: e => 0,
      requiredLevel: () => si[5],
      icon: () => 'fury',
      description: () => 'Increases damage and restores resources.',
      maxLevel: () => 400,
      effect: e => ({
        damagePercent: 2 * e,
        manaPerHit: 0.1 * e,
        lifePerHit: 1 * e
      })
    },
    undyingRage: {
      id: 'undyingRage',
      name: () => 'Undying Rage',
      type: () => 'passive',
      requiredLevel: () => si[5],
      icon: () => 'undying',
      description: () => 'Provides a chance to survive fatal damage.',
      maxLevel: () => 500,
      effect: e => ({
        resurrectionChance: 0.1 * e,
        lifeRegen: 1 * e,
        lifeRegenPercent: 0.75 * e,
        armorPercent: 3 * e
      })
    },
    warlord: {
      id: 'warlord',
      name: () => 'Warlord',
      type: () => 'passive',
      requiredLevel: () => si[6],
      icon: () => 'warlord',
      description: () => 'Significantly increases all combat stats.',
      maxLevel: () => ni,
      effect: e => ({
        strengthPercent: 2.5 * e,
        critChance: Math.min(0.05 * e, 20),
        attackSpeed: 0.002 * e,
        damagePercent: 1 * e
      })
    }
  },
  ELEMENTALIST: {
    fireball: {
      id: 'fireball',
      name: () => 'Fireball',
      type: () => 'instant',
      manaCost: e => 2 + 0.2 * e,
      cooldown: () => 5200,
      requiredLevel: () => si[0],
      icon: () => 'fireball',
      description: () => 'Launches a fireball that deals fire damage.',
      maxLevel: () => ni,
      effect: e => ({
        fireDamagePercent: 5 * e
      })
    },
    frostArmor: {
      id: 'frostArmor',
      name: () => 'Frost Armor',
      type: () => 'buff',
      manaCost: e => 6 + 1 * e,
      cooldown: () => 34000,
      duration: () => 10000,
      requiredLevel: () => si[0],
      icon: () => 'frost-armor',
      description: () => 'Encases the caster in frost, increasing armor.',
      maxLevel: () => ni,
      effect: e => ({
        armorPercent: 3 * e,
        coldDamagePercent: 2 * e
      })
    },
    warmth: {
      id: 'warmth',
      name: () => 'Warmth',
      type: () => 'passive',
      requiredLevel: () => si[0],
      icon: () => 'storm',
      description: () => 'Increases mana and mana regeneration',
      maxLevel: () => 1000,
      effect: e => ({
        manaPercent: 2 * e,
        manaRegen: 0.1 * e,
        manaRegenPercent: 0.2 * e,
        wisdomPercent: 0.5 * e
      })
    },
    lightningStrike: {
      id: 'lightningStrike',
      name: () => 'Lightning Strike',
      type: () => 'instant',
      manaCost: e => 4 + 0.3 * e,
      cooldown: () => 3000,
      requiredLevel: () => si[1],
      icon: () => 'lightning',
      description: () => 'Strikes an enemy with a bolt of lightning.',
      maxLevel: () => ni,
      effect: e => ({
        lightningDamagePercent: 6 * e,
        airDamagePercent: 3 * e
      })
    },
    elementalMastery: {
      id: 'elementalMastery',
      name: () => 'Elemental Mastery',
      type: () => 'passive',
      requiredLevel: () => si[1],
      icon: () => 'elemental-mastery',
      description: () => 'Increases all elemental damage.',
      maxLevel: () => 200,
      effect: e => ({
        elementalDamagePercent: 1 * e
      })
    },
    blizzard: {
      id: 'blizzard',
      name: () => 'Blizzard',
      type: () => 'buff',
      manaCost: e => 10 + 1 * e,
      cooldown: () => 88000,
      duration: () => 40000,
      requiredLevel: () => si[2],
      icon: () => 'blizzard',
      description: () => 'Summons a blizzard, covering the battlefield in frost.',
      maxLevel: () => 100,
      effect: e => ({
        coldDamagePercent: 3 * e,
        airDamagePercent: 3 * e,
        waterDamagePercent: 3 * e,
        lightningDamagePercent: 3 * e
      })
    },
    fireShield: {
      id: 'fireShield',
      name: () => 'Fire Shield',
      type: () => 'buff',
      manaCost: e => 20 + 0.4 * e,
      cooldown: () => 37000,
      duration: () => 15000,
      requiredLevel: () => si[2],
      icon: () => 'fire-shield',
      description: () => 'Surrounds the caster with a shield of fire. Deals only fire damage.',
      maxLevel: () => ni,
      effect: e => ({
        reflectFireDamage: 18 * e,
        fireDamagePercent: 1.5 * e
      })
    },
    arcaneWisdom: {
      id: 'arcaneWisdom',
      name: () => 'Arcane Wisdom',
      type: () => 'passive',
      requiredLevel: () => si[2],
      icon: () => 'wisdom',
      description: () => 'Increases mana and mana regeneration.',
      maxLevel: () => 200,
      effect: e => ({
        manaPercent: 1 * e,
        manaRegenPercent: 0.5 * e,
        manaRegenOfTotalPercent: 0.01 * e
      })
    },
    elementalStorm: {
      id: 'elementalStorm',
      name: () => 'Elemental Storm',
      type: () => 'instant',
      manaCost: e => 50,
      cooldown: () => 4500,
      requiredLevel: () => si[3],
      icon: () => 'storm',
      description: () => 'Unleashes a storm of fire, ice, and lightning.',
      maxLevel: () => ni,
      effect: e => ({
        fireDamagePercent: 1 * e,
        coldDamagePercent: 1 * e,
        airDamagePercent: 1 * e,
        earthDamagePercent: 1 * e,
        waterDamagePercent: 1 * e,
        lightningDamagePercent: 1 * e
      })
    },
    elementalAffinity: {
      id: 'elementalAffinity',
      name: () => 'Elemental Affinity',
      type: () => 'passive',
      requiredLevel: () => si[3],
      icon: () => 'affinity',
      description: () => 'Increases resistance to elemental damage.',
      maxLevel: () => 1000,
      effect: e => ({
        fireDamagePercent: 0.5 * e,
        coldDamagePercent: 0.5 * e,
        airDamagePercent: 0.5 * e,
        earthDamagePercent: 0.5 * e
      })
    },
    arcanePulse: {
      id: 'arcanePulse',
      name: () => 'Arcane Pulse',
      type: () => 'buff',
      manaCost: e => 30 + 0.6 * e,
      cooldown: () => 51000,
      duration: () => 25000,
      requiredLevel: () => si[4],
      icon: () => 'pulse',
      description: () => 'Increases attack rating and resource stealing.',
      maxLevel: () => 200,
      effect: e => ({
        attackRatingPercent: 5 * e,
        lifePerHit: 3 * e,
        manaPerHit: 0.5 * e,
        attackSpeed: 0.01 * e
      })
    },
    elementalOverload: {
      id: 'elementalOverload',
      name: () => 'Elemental Overload',
      type: () => 'toggle',
      manaCost: e => 4 + 0.5 * e,
      requiredLevel: () => si[5],
      icon: () => 'overload',
      description: () => 'Boosts elemental damage.',
      maxLevel: () => 600,
      effect: e => ({
        fireDamagePercent: 2 * e,
        coldDamagePercent: 2 * e,
        airDamagePercent: 2 * e,
        lightningDamagePercent: 2 * e
      })
    },
    primordialControl: {
      id: 'primordialControl',
      name: () => 'Primordial Control',
      type: () => 'passive',
      requiredLevel: () => si[5],
      icon: () => 'control',
      description: () => 'Grants control over elemental forces, increasing all stats.',
      maxLevel: () => 5000,
      effect: e => ({
        earthDamagePercent: 1.5 * e,
        vitalityPercent: 2 * e,
        wisdomPercent: 2.5 * e
      })
    },
    avatarOfTheElements: {
      id: 'avatarOfTheElements',
      name: () => 'Avatar of the Elements',
      type: () => 'passive',
      requiredLevel: () => si[6],
      icon: () => 'avatar-of-elements',
      description: () => 'Transforms the caster into a being of pure elemental power.',
      maxLevel: () => 100,
      effect: e => ({
        fireDamage: 3 * e,
        coldDamage: 3 * e,
        airDamage: 3 * e,
        earthDamage: 3 * e,
        elementalDamagePercent: 3 * e
      })
    }
  },
  DRUID: {
    summonPest: {
      id: 'summonPest',
      name: () => 'Summon Pest',
      type: () => 'summon',
      summonStats: e => ({
        percentOfPlayerDamage: 0.75 * e,
        damage: 1 * e,
        earthDamage: 1 * e,
        waterDamage: 0.5 * e,
        attackSpeed: 1
      }),
      manaCost: e => 2 + 0.2 * e,
      cooldown: () => 18000,
      duration: () => 12000,
      requiredLevel: () => si[0],
      icon: () => 'summon-pest',
      description: () => 'Summons a pest to your aid, dealing percent of your damage.',
      maxLevel: () => ni,
      effect: e => ({
      })
    },
    barkSkin: {
      id: 'barkSkin',
      name: () => 'Bark Skin',
      type: () => 'passive',
      manaCost: e => 1 + 0.1 * e,
      requiredLevel: () => si[0],
      icon: () => 'bark-skin',
      description: () => 'Increases armor while active.',
      maxLevel: () => ni,
      effect: e => ({
        armorPercent: 2 * e,
        lifeRegen: 0.05 * e
      })
    },
    naturalAffinity: {
      id: 'naturalAffinity',
      name: () => 'Natural Affinity',
      type: () => 'passive',
      requiredLevel: () => si[0],
      icon: () => 'leaf',
      description: () => 'Increases vitality and life regeneration.',
      maxLevel: () => 200,
      effect: e => ({
        vitality: 1 * e,
        lifePercent: 0.1 * e,
        lifeRegen: 0.33 * e
      })
    },
    rejuvenation: {
      id: 'rejuvenation',
      name: () => 'Rejuvenation',
      type: () => 'buff',
      manaCost: e => 5 + 0.2 * e,
      cooldown: () => 34000,
      duration: () => 10000,
      requiredLevel: () => si[1],
      icon: () => 'rejuvenation',
      description: () => 'Restores life over time.',
      maxLevel: () => ni,
      effect: e => ({
        lifeRegen: 0.5 * e,
        lifeRegenPercent: 0.5 * e
      })
    },
    entanglingRoots: {
      id: 'entanglingRoots',
      name: () => 'Entangling Roots',
      type: () => 'instant',
      manaCost: e => 4 + 0.3 * e,
      cooldown: () => 15200,
      requiredLevel: () => si[1],
      icon: () => 'roots',
      description: () => 'Deals earth damage and slows enemies.',
      maxLevel: () => ni,
      effect: e => ({
        earthDamagePercent: 5 * e
      })
    },
    animalCompanion: {
      id: 'animalCompanion',
      name: () => 'Animal Companion',
      type: () => 'summon',
      summonStats: e => ({
        percentOfPlayerDamage: 1 * e,
        damage: 4 * e,
        attackSpeed: 0.9,
        lifePerHit: 4 * e
      }),
      manaCost: e => 5 + 0.2 * e,
      cooldown: () => 56000,
      duration: () => 20000,
      requiredLevel: () => si[2],
      icon: () => 'companion',
      description: () => 'Summons a beast to aid you. Heals you when hitting.',
      maxLevel: () => 200,
      effect: e => ({
      })
    },
    naturalGrowth: {
      id: 'naturalGrowth',
      name: () => 'Natural Growth',
      type: () => 'passive',
      requiredLevel: () => si[2],
      icon: () => 'growth',
      description: () => 'Increases life and life regeneration.',
      maxLevel: () => 200,
      effect: e => ({
        lifePercent: 0.5 * e,
        lifeRegen: 0.2 * e
      })
    },
    hurricane: {
      id: 'hurricane',
      name: () => 'Hurricane',
      type: () => 'instant',
      manaCost: e => 8 + 0.4 * e,
      cooldown: () => 11400,
      requiredLevel: () => si[3],
      icon: () => 'hurricane',
      description: () => 'Calls forth fierce winds to damage enemies.',
      maxLevel: () => ni,
      effect: e => ({
        airDamagePercent: 6 * e,
        coldDamagePercent: 6 * e
      })
    },
    stoneform: {
      id: 'stoneform',
      name: () => 'Stoneform',
      type: () => 'buff',
      manaCost: e => 10 + 0.5 * e,
      cooldown: () => 52000,
      duration: () => 20000,
      requiredLevel: () => si[3],
      icon: () => 'stoneform',
      description: () => 'Hardens your skin, boosting armor and resistance.',
      maxLevel: () => ni,
      effect: e => ({
        armorPercent: 5 * e,
        earthDamagePercent: 2 * e
      })
    },
    spiritLink: {
      id: 'spiritLink',
      name: () => 'Spirit Link',
      type: () => 'buff',
      manaCost: e => 15 + 0.5 * e,
      cooldown: () => 76000,
      duration: () => 30000,
      requiredLevel: () => si[4],
      icon: () => 'spirit-link',
      description: () => 'Increases life steal and mana gain.',
      maxLevel: () => 300,
      effect: e => ({
        lifeSteal: 0.02 * e,
        manaPerHit: 0.75 * e
      })
    },
    moonfury: {
      id: 'moonfury',
      name: () => 'Moonfury',
      type: () => 'passive',
      requiredLevel: () => si[4],
      icon: () => 'moonfury',
      description: () => 'Empowers you under the moon, boosting elemental damage.',
      maxLevel: () => 300,
      effect: e => ({
        coldDamagePercent: 2 * e,
        airDamagePercent: 2 * e
      })
    },
    earthsEmbrace: {
      id: 'earthsEmbrace',
      name: () => 'Earth\'s Embrace',
      type: () => 'buff',
      manaCost: e => 4 + 0.3 * e,
      cooldown: () => 64000,
      duration: () => 30000,
      requiredLevel: () => si[5],
      icon: () => 'embrace',
      description: () => 'Embrace the earth for defense and regeneration.',
      maxLevel: () => 500,
      effect: e => ({
        armorPercent: 2 * e,
        lifeRegenPercent: 0.5 * e,
        lifeRegen: 2 * e,
        lifeRegenOfTotalPercent: 0.01 * e
      })
    },
    wrathOfNature: {
      id: 'wrathOfNature',
      name: () => 'Wrath of Nature',
      type: () => 'passive',
      requiredLevel: () => si[5],
      icon: () => 'wrath-of-nature',
      description: () => 'Nature fights with you, increasing all stats.',
      maxLevel: () => 500,
      effect: e => ({
        damagePercent: 1 * e,
        vitalityPercent: 1 * e,
        elementalDamagePercent: 1 * e
      })
    },
    avatarOfNature: {
      id: 'avatarOfNature',
      name: () => 'Avatar of Nature',
      type: () => 'passive',
      requiredLevel: () => si[6],
      icon: () => 'avatar-of-nature',
      description: () => 'Become one with nature, greatly increasing attributes.',
      maxLevel: () => 100,
      effect: e => ({
        vitalityPercent: 3 * e,
        damagePercent: 2 * e,
        lifePercent: 2 * e
      })
    }
  },
  MAGE: {
    magicMissile: {
      id: 'magicMissile',
      name: () => 'Magic Missile',
      type: () => 'instant',
      manaCost: e => 2 + 0.2 * e,
      cooldown: () => 5000,
      requiredLevel: () => si[0],
      icon: () => 'missile',
      description: () => 'Launches a missile of arcane energy.',
      maxLevel: () => ni,
      effect: e => ({
        waterDamagePercent: 10 * e
      })
    },
    arcaneIntellect: {
      id: 'arcaneIntellect',
      name: () => 'Arcane Intellect',
      type: () => 'passive',
      requiredLevel: () => si[0],
      icon: () => 'intellect',
      description: () => 'Increases mana and wisdom.',
      maxLevel: () => 300,
      effect: e => ({
        manaPercent: 1.5 * e,
        wisdomPercent: 1 * e,
        perseverancePercent: 1 * e
      })
    },
    frostBolt: {
      id: 'frostBolt',
      name: () => 'Frost Bolt',
      type: () => 'instant',
      manaCost: e => 3 + 0.2 * e,
      cooldown: () => 5700,
      requiredLevel: () => si[1],
      icon: () => 'frost-bolt',
      description: () => 'Fires a bolt of frost at the enemy.',
      maxLevel: () => ni,
      effect: e => ({
        coldDamagePercent: 11 * e
      })
    },
    fireBlast: {
      id: 'fireBlast',
      name: () => 'Fire Blast',
      type: () => 'instant',
      manaCost: e => 4 + 0.2 * e,
      cooldown: () => 7600,
      requiredLevel: () => si[1],
      icon: () => 'fire-blast',
      description: () => 'Blasts the target with fire.',
      maxLevel: () => ni,
      effect: e => ({
        fireDamagePercent: 13 * e
      })
    },
    mindControl: {
      id: 'mindControl',
      name: () => 'Mind Control',
      type: () => 'passive',
      requiredLevel: () => si[2],
      icon: () => 'mind-control',
      description: () => 'Instantly move to a nearby location.',
      maxLevel: () => 100,
      effect: e => ({
        perseverance: 5 * e,
        wisdom: 5 * e,
        intelligence: 5 * e,
        intelligencePercent: 1 * e
      })
    },
    manaShield: {
      id: 'manaShield',
      name: () => 'Mana Shield',
      type: () => 'buff',
      manaCost: e => 8 + 0.5 * e,
      cooldown: () => 30000,
      duration: () => 20000,
      requiredLevel: () => si[2],
      icon: () => 'mana-shield',
      description: () => 'Absorbs damage using mana.',
      maxLevel: () => 200,
      effect: e => ({
        manaShieldPercent: 0.5 * e
      })
    },
    resourceInfusion: {
      id: 'resourceInfusion',
      name: () => 'Resource Infusion',
      type: () => 'passive',
      requiredLevel: () => si[3],
      icon: () => 'resource-infusion',
      description: () => 'Infuses yourself with magical energy. Greatly increases mana regeneration.',
      maxLevel: () => 1000,
      effect: e => ({
        mana: 10 * e,
        manaRegenOfTotalPercent: 0.025 * e
      })
    },
    iceStorm: {
      id: 'iceStorm',
      name: () => 'Ice Storm',
      type: () => 'buff',
      manaCost: e => 15 + 0.6 * e,
      cooldown: () => 64000,
      duration: () => 20000,
      requiredLevel: () => si[3],
      icon: () => 'ice-storm',
      description: () => 'Summons a storm of ice around you.',
      maxLevel: () => ni,
      effect: e => ({
        coldDamagePercent: 8 * e,
        waterDamagePercent: 3 * e
      })
    },
    arcaneFocus: {
      id: 'arcaneFocus',
      name: () => 'Arcane Focus',
      type: () => 'passive',
      requiredLevel: () => si[3],
      icon: () => 'focus',
      description: () => 'Improves spell damage and hit rate.',
      maxLevel: () => 500,
      effect: e => ({
        elementalDamagePercent: 1 * e,
        attackRatingPercent: 4 * e
      })
    },
    pyroclasm: {
      id: 'pyroclasm',
      name: () => 'Pyroclasm',
      type: () => 'buff',
      manaCost: e => 20 + 0.6 * e,
      cooldown: () => 72000,
      duration: () => 30000,
      requiredLevel: () => si[4],
      icon: () => 'pyroclasm',
      description: () => 'Engulfs the area in flames.',
      maxLevel: () => 300,
      effect: e => ({
        fireDamagePercent: 16 * e
      })
    },
    timeWarp: {
      id: 'timeWarp',
      name: () => 'Time Warp',
      type: () => 'buff',
      manaCost: e => 25 + 0.7 * e,
      cooldown: () => 96000,
      duration: () => 15000,
      requiredLevel: () => si[4],
      icon: () => 'time-warp',
      description: () => 'Greatly increases attack speed for a short time.',
      maxLevel: () => 300,
      effect: e => ({
        attackSpeed: 0.03 * e
      })
    },
    arcanePower: {
      id: 'arcanePower',
      name: () => 'Arcane Power',
      type: () => 'toggle',
      manaCost: e => 5 + 0.3 * e,
      requiredLevel: () => si[5],
      icon: () => 'arcane-power',
      description: () => 'Unleash arcane power, increasing spell damage.',
      maxLevel: () => 600,
      effect: e => ({
        elementalDamagePercent: 3 * e
      })
    },
    summonElemental: {
      id: 'summonElemental',
      name: () => 'Summon Elemental',
      type: () => 'summon',
      summonStats: e => ({
        percentOfPlayerDamage: 0.8 * e,
        damage: 8 * e,
        attackSpeed: 1.4,
        fireDamage: 22 * e,
        airDamage: 22 * e,
        coldDamage: 22 * e
      }),
      manaCost: e => 30 + 0.8 * e,
      cooldown: () => 48000,
      duration: () => 30000,
      requiredLevel: () => si[5],
      icon: () => 'summon-elemental',
      description: () => 'Summons an elemental ally.',
      maxLevel: () => 500,
      effect: e => ({
      })
    },
    archmage: {
      id: 'archmage',
      name: () => 'Archmage',
      type: () => 'passive',
      requiredLevel: () => si[6],
      icon: () => 'archmage',
      description: () => 'Mastery of all magical arts.',
      maxLevel: () => 100,
      effect: e => ({
        wisdomPercent: 4 * e,
        elementalDamagePercent: 2 * e,
        manaPercent: 3 * e
      })
    }
  }
}

