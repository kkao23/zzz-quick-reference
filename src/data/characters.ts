// Define the structure for a character
export type Character = {
  id: string;
  name: string;
  imageFile: string;
  guide: string;
  role: 'DPS' | 'Off-field DPS' | 'Support' | 'Stunner';
}

// Array of characters.
export const characters: Character[] = [
  { id: 'miyabi', name: 'Miyabi', imageFile: 'miyabi.webp', role: 'DPS', guide: 'Basic or ex special until she reaches 6 blue dots. Hold basic to unleash them. Ultimate refills her dots.' },
  { id: 'yixuan', name: 'Yixuan', imageFile: 'yixuan.webp', role: 'DPS', guide: 'Ex special to parry and/or build up the gold gauge, hold basic when the enemy is stunned. Ult fills her gauges so dump her ex special and hold basic until its empty before Ultimate' },
  { id: 'alice', name: 'Alice', imageFile: 'alice.webp', role: 'DPS', guide: 'When her bar is full, hold basic to unleash a special attack.' },
  { id: 'anbysoldierzero', name: 'Anby (Soldier Zero)', imageFile: 'anbysoldierzero.webp', role: 'DPS', guide: 'Placeholder guide for Anby (Soldier Zero).' },
  { id: 'evelyn', name: 'Evelyn', imageFile: 'evelyn.webp', role: 'DPS', guide: 'Placeholder guide for Evelyn.' },
  { id: 'seed', name: 'Seed', imageFile: 'seed.webp', role: 'DPS', guide: 'Placeholder guide for Seed.' },
  { id: 'yidhari', name: 'Yidhari', imageFile: 'yidhari.webp', role: 'DPS', guide: 'Hold basic to spin to win. Ex special restores health. Can also parry during spin with Ex special' },
  { id: 'hugo', name: 'Hugo', imageFile: 'hugo.webp', role: 'DPS', guide: 'Stun the enemy and ult or hold Ex special immediately' },
  { id: 'janedoe', name: 'Jane Doe', imageFile: 'janedoe.webp', role: 'DPS', guide: 'Gauge fills when you perfect dodge or dodge counter. Does more anomaly buildup when the gauge is full. Has two dodges' },
  { id: 'manato', name: 'Manato', imageFile: 'manato.webp', role: 'DPS', guide: 'Hold Special Attack to instantly fill his gauge. Once the gauge is full, mash Basic Attacks. When your HP gets dangerously low or you need a burst, use his EX Special to nuke the enemy and heal himself for 33% of his max HP' },
  { id: 'piper', name: 'Piper', imageFile: 'piper.webp', role: 'DPS', guide: 'Placeholder guide for Piper.' },
  { id: 'zhuyuan', name: 'Zhu Yuan', imageFile: 'zhuyuan.webp', role: 'DPS', guide: 'Placeholder guide for Zhu Yuan.' },
  { id: 'ellen', name: 'Ellen', imageFile: 'ellen.webp', role: 'DPS', guide: 'Double tap dodge and dash attack to generate charges (blue ice dots), basic attack to use them' },
  { id: 'harumasa', name: 'Harumasa', imageFile: 'harumasa.webp', role: 'DPS', guide: 'Placeholder guide for Harumasa.' },
  { id: 'soldiereleven', name: 'Soldier 11', imageFile: 'soldiereleven.webp', role: 'DPS', guide: 'Placeholder guide for Soldier 11.' },
  { id: 'anton', name: 'Anton', imageFile: 'anton.webp', role: 'DPS', guide: 'Placeholder guide for Anton.' },
  { id: 'billy', name: 'Billy Kid', imageFile: 'billy.webp', role: 'DPS', guide: 'Hold basic attack to constantly shoot bullets. He can roll around in this stance' },
  { id: 'corin', name: 'Corin', imageFile: 'corin.webp', role: 'DPS', guide: 'Holding EX Special does constant damage to the enemy. She can also hold the third and fifth attacks of her basic' },
  { id: 'nekomata', name: 'Nekomata', imageFile: 'nekomata.webp', role: 'DPS', guide: 'A cheerful and energetic cat girl with dual blades. This is a placeholder for her detailed combat guide, recommended equipment, and team synergies.' },
  
  { id: 'orphie', name: 'Orphie', imageFile: 'orphie.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Orphie.' },
  { id: 'vivian', name: 'Vivian', imageFile: 'vivian.webp', role: 'Off-field DPS', guide: 'Basic, EX Special or Ult until she floats, then switch out' },
  { id: 'yanagi', name: 'Yanagi', imageFile: 'yanagi.webp', role: 'Off-field DPS', guide: 'Hold Ex Special after Miyabi uses her 6 dot special, then switch back' },
  { id: 'burnice', name: 'Burnice', imageFile: 'burnice.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Burnice.' },
  { id: 'grace', name: 'Grace', imageFile: 'grace.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Grace.' },
  { id: 'trigger', name: 'Trigger', imageFile: 'trigger.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Trigger.' },

  { id: 'dialyn', name: 'Dialyn', imageFile: 'dialyn.webp', role: 'Stunner', guide: 'Ex special -> basic, basic -> Ex special fills her bar. When her bar is full, hold basic to trigger a chain assist that gets upgraded to an Ultimate.' },
  { id: 'jufufu', name: 'Ju Fufu', imageFile: 'jufufu.webp', role: 'Stunner', guide: 'Ex Special and switch out' },
  { id: 'koleda', name: 'Koleda', imageFile: 'koleda.webp', role: 'Stunner', guide: 'Placeholder guide for Koleda.' },
  { id: 'panyinhu', name: 'Pan Yinhu', imageFile: 'panyinhu.webp', role: 'Stunner', guide: 'Ex special and chain out. Ult heals. Ex special is a backwards quick assist so put him after your DPS' },
  { id: 'pulchra', name: 'Pulchra', imageFile: 'pulchra.webp', role: 'Stunner', guide: 'Placeholder guide for Pulchra.' },
  { id: 'qingyi', name: 'Qingyi', imageFile: 'qingyi.webp', role: 'Stunner', guide: 'Placeholder guide for Qingyi.' },

  { id: 'lucia', name: 'Lucia', imageFile: 'lucia.webp', role: 'Support', guide: 'Ex special or ult then switch. Switch back when the screen edges are no longer hazy/blurred' },
  { id: 'yuzuha', name: 'Yuzuha', imageFile: 'yuzuha.webp', role: 'Support', guide: 'Ex special and or Ult then chain switch. Enemies sparkle/take DoTs when debuffed. When Yuzuha has no dots, switch back to her' },
  { id: 'astrayao', name: 'Astra Yao', imageFile: 'astrayao.webp', role: 'Support', guide: 'Special then switch out, Ult when up. Her song lasts as long as her energy meter isnt empty' },
  { id: 'soukaku', name: 'Soukaku', imageFile: 'soukaku.webp', role: 'Support', guide: 'Gather 3 dots, hold Ex special, chain attack when the prompt appears' },
  { id: 'nicole', name: 'Nicole Demara', imageFile: 'nicole.webp', role: 'Support', guide: 'Hold EX special to charge it while she has bullets. Def shred lasts while the black hole is on the field + 3.5 seconds.' },
  { id: 'ben', name: 'Ben', imageFile: 'ben.webp', role: 'Support', guide: 'Placeholder guide for Ben.' },
  { id: 'caesar', name: 'Caesar', imageFile: 'caesar.webp', role: 'Support', guide: 'EX special is a parry that deals stun and grants a shield' },
  { id: 'lighter', name: 'Lighter', imageFile: 'lighter.webp', role: 'Support', guide: 'Basics and perfect dodges/dodge counters build his gauge. When his gauge is full he powers up and his attacks deal more daze' },
  { id: 'lycaon', name: 'Lycaon', imageFile: 'lycaon.webp', role: 'Support', guide: 'Hold basic and Ex special to charge them to build stun gauge' },
  { id: 'lucy', name: 'Lucy', imageFile: 'lucy.webp', role: 'Support', guide: 'Ex Special to buff attack, indicated by red fist under character HP bar. Only lasts 10-15 seconds' },
  { id: 'rina', name: 'Rina', imageFile: 'rina.webp', role: 'Support', guide: 'Placeholder guide for Rina.' },
  { id: 'seth', name: 'Seth', imageFile: 'seth.webp', role: 'Support', guide: 'Placeholder guide for Seth.' },
  { id: 'anby', name: 'Anby Demara', imageFile: 'anby.webp', role: 'Stunner', guide: 'Anby is a mysterious young girl who is always calm and collected. This is a placeholder for her detailed combat guide, recommended equipment, and team synergies.' },
];