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
  { id: 'miyabi', name: 'Miyabi', imageFile: 'miyabi.webp', role: 'DPS', guide: 'Placeholder guide for Miyabi.' },
  { id: 'yixuan', name: 'Yixuan', imageFile: 'yixuan.webp', role: 'DPS', guide: 'Placeholder guide for Yixuan.' },
  { id: 'alice', name: 'Alice', imageFile: 'alice.webp', role: 'DPS', guide: 'Placeholder guide for Alice.' },
  { id: 'anbysoldierzero', name: 'Anby (Soldier Zero)', imageFile: 'anbysoldierzero.webp', role: 'DPS', guide: 'Placeholder guide for Anby (Soldier Zero).' },
  { id: 'evelyn', name: 'Evelyn', imageFile: 'evelyn.webp', role: 'DPS', guide: 'Placeholder guide for Evelyn.' },
  { id: 'seed', name: 'Seed', imageFile: 'seed.webp', role: 'DPS', guide: 'Placeholder guide for Seed.' },
  { id: 'yidhari', name: 'Yidhari', imageFile: 'yidhari.webp', role: 'DPS', guide: 'Placeholder guide for Yidhari.' },
  { id: 'hugo', name: 'Hugo', imageFile: 'hugo.webp', role: 'DPS', guide: 'Placeholder guide for Hugo.' },
  { id: 'janedoe', name: 'Jane Doe', imageFile: 'janedoe.webp', role: 'DPS', guide: 'Placeholder guide for Jane Doe.' },
  { id: 'manato', name: 'Manato', imageFile: 'manato.webp', role: 'DPS', guide: 'Placeholder guide for Manato.' },
  { id: 'piper', name: 'Piper', imageFile: 'piper.webp', role: 'DPS', guide: 'Placeholder guide for Piper.' },
  { id: 'zhuyuan', name: 'Zhu Yuan', imageFile: 'zhuyuan.webp', role: 'DPS', guide: 'Placeholder guide for Zhu Yuan.' },
  { id: 'ellen', name: 'Ellen', imageFile: 'ellen.webp', role: 'DPS', guide: 'Placeholder guide for Ellen.' },
  { id: 'harumasa', name: 'Harumasa', imageFile: 'harumasa.webp', role: 'DPS', guide: 'Placeholder guide for Harumasa.' },
  { id: 'soldiereleven', name: 'Soldier 11', imageFile: 'soldiereleven.webp', role: 'DPS', guide: 'Placeholder guide for Soldier 11.' },

  { id: 'anton', name: 'Anton', imageFile: 'anton.webp', role: 'DPS', guide: 'Placeholder guide for Anton.' },
  { id: 'billy', name: 'Billy Kid', imageFile: 'billy.webp', role: 'DPS', guide: 'A handsome and carefree cyborg with a pair of custom-made high-caliber revolvers. This is a placeholder for his detailed combat guide, recommended equipment, and team synergies.' },
  { id: 'corin', name: 'Corin', imageFile: 'corin.webp', role: 'DPS', guide: 'Placeholder guide for Corin.' },
  { id: 'nekomata', name: 'Nekomiya Mana', imageFile: 'nekomata.webp', role: 'DPS', guide: 'A cheerful and energetic cat girl with dual blades. This is a placeholder for her detailed combat guide, recommended equipment, and team synergies.' },
  { id: 'orphie', name: 'Orphie', imageFile: 'orphie.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Orphie.' },
  { id: 'burnice', name: 'Burnice', imageFile: 'burnice.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Burnice.' },
  { id: 'grace', name: 'Grace', imageFile: 'grace.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Grace.' },
  { id: 'trigger', name: 'Trigger', imageFile: 'trigger.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Trigger.' },
  { id: 'vivian', name: 'Vivian', imageFile: 'vivian.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Vivian.' },
  { id: 'yanagi', name: 'Yanagi', imageFile: 'yanagi.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Yanagi.' },
  { id: 'anby', name: 'Anby Demara', imageFile: 'anby.webp', role: 'Stunner', guide: 'Anby is a mysterious young girl who is always calm and collected. This is a placeholder for her detailed combat guide, recommended equipment, and team synergies.' },
  { id: 'dialyn', name: 'Dialyn', imageFile: 'dialyn.webp', role: 'Stunner', guide: 'Placeholder guide for Dialyn.' },
  { id: 'jufufu', name: 'Ju Fufu', imageFile: 'jufufu.webp', role: 'Stunner', guide: 'Placeholder guide for Jufufu.' },
  { id: 'koleda', name: 'Koleda', imageFile: 'koleda.webp', role: 'Stunner', guide: 'Placeholder guide for Koleda.' },
  { id: 'panyinhu', name: 'Pan Yinhu', imageFile: 'panyinhu.webp', role: 'Stunner', guide: 'Placeholder guide for Panyinhu.' },
  { id: 'pulchra', name: 'Pulchra', imageFile: 'pulchra.webp', role: 'Stunner', guide: 'Placeholder guide for Pulchra.' },
  { id: 'qingyi', name: 'Qingyi', imageFile: 'qingyi.webp', role: 'Stunner', guide: 'Placeholder guide for Qingyi.' },
  { id: 'astrayao', name: 'Astra Yao', imageFile: 'astrayao.webp', role: 'Support', guide: 'Placeholder guide for Astray Ao.' },
  { id: 'ben', name: 'Ben', imageFile: 'ben.webp', role: 'Support', guide: 'Placeholder guide for Ben.' },
  { id: 'caesar', name: 'Caesar', imageFile: 'caesar.webp', role: 'Support', guide: 'Placeholder guide for Caesar.' },
  { id: 'lighter', name: 'Lighter', imageFile: 'lighter.webp', role: 'Support', guide: 'Placeholder guide for Lighter.' },
  { id: 'lucia', name: 'Lucia', imageFile: 'lucia.webp', role: 'Support', guide: 'Placeholder guide for Lucia.' },
  { id: 'lycaon', name: 'Lycaon', imageFile: 'lycaon.webp', role: 'Support', guide: 'Placeholder guide for Lycaon.' },

  { id: 'lucy', name: 'Lucy', imageFile: 'lucy.webp', role: 'Support', guide: 'Placeholder guide for Lucy.' },
  { id: 'nicole', name: 'Nicole Demara', imageFile: 'nicole.webp', role: 'Support', guide: 'Nicole is the cunning founder of the Cunning Hares. This is a placeholder for her detailed combat guide, recommended equipment, and team synergies.' },
  { id: 'rina', name: 'Rina', imageFile: 'rina.webp', role: 'Support', guide: 'Placeholder guide for Rina.' },
  { id: 'seth', name: 'Seth', imageFile: 'seth.webp', role: 'Support', guide: 'Placeholder guide for Seth.' },
  { id: 'soukaku', name: 'Soukaku', imageFile: 'soukaku.webp', role: 'Support', guide: 'Placeholder guide for Soukaku.' },
  { id: 'yuzuha', name: 'Yuzuha', imageFile: 'yuzuha.webp', role: 'Support', guide: 'Placeholder guide for Yuzuha.' },
];