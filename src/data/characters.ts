// Define the structure for a character
export type Character = {
  id: string;
  name: string;
  imageFile: string;
  guide: string;
  role: 'DPS' | 'Off-field DPS' | 'Support';
}

// Array of characters.
export const characters: Character[] = [
  { id: 'anby', name: 'Anby Demara', imageFile: 'anby.webp', role: 'DPS', guide: 'Anby is a mysterious young girl who is always calm and collected. This is a placeholder for her detailed combat guide, recommended equipment, and team synergies.' },
  { id: 'nicole', name: 'Nicole Demara', imageFile: 'nicole.webp', role: 'Support', guide: 'Nicole is the cunning founder of the Cunning Hares. This is a placeholder for her detailed combat guide, recommended equipment, and team synergies.' },
  { id: 'billy', name: 'Billy Kid', imageFile: 'billy.webp', role: 'Off-field DPS', guide: 'A handsome and carefree cyborg with a pair of custom-made high-caliber revolvers. This is a placeholder for his detailed combat guide, recommended equipment, and team synergies.' },
  { id: 'nekomata', name: 'Nekomiya Mana', imageFile: 'nekomata.webp', role: 'DPS', guide: 'A cheerful and energetic cat girl with dual blades. This is a placeholder for her detailed combat guide, recommended equipment, and team synergies.' },
  { id: 'alice', name: 'Alice', imageFile: 'alice.webp', role: 'Support', guide: 'Placeholder guide for Alice.' },
  { id: 'anbysoldierzero', name: 'Anby (Soldier Zero)', imageFile: 'anbysoldierzero.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Anby (Soldier Zero).' },
  { id: 'anton', name: 'Anton', imageFile: 'anton.webp', role: 'DPS', guide: 'Placeholder guide for Anton.' },
  { id: 'astrayao', name: 'Astra Yao', imageFile: 'astrayao.webp', role: 'Support', guide: 'Placeholder guide for Astray Ao.' },
  { id: 'ben', name: 'Ben', imageFile: 'ben.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Ben.' },
  { id: 'burnice', name: 'Burnice', imageFile: 'burnice.webp', role: 'DPS', guide: 'Placeholder guide for Burnice.' },
  { id: 'caesar', name: 'Caesar', imageFile: 'caesar.webp', role: 'Support', guide: 'Placeholder guide for Caesar.' },
  { id: 'corin', name: 'Corin', imageFile: 'corin.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Corin.' },
  { id: 'dialyn', name: 'Dialyn', imageFile: 'dialyn.webp', role: 'DPS', guide: 'Placeholder guide for Dialyn.' },
  { id: 'ellen', name: 'Ellen', imageFile: 'ellen.webp', role: 'Support', guide: 'Placeholder guide for Ellen.' },
  { id: 'evelyn', name: 'Evelyn', imageFile: 'evelyn.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Evelyn.' },
  { id: 'grace', name: 'Grace', imageFile: 'grace.webp', role: 'DPS', guide: 'Placeholder guide for Grace.' },
  { id: 'harumasa', name: 'Harumasa', imageFile: 'harumasa.webp', role: 'Support', guide: 'Placeholder guide for Harumasa.' },
  { id: 'hugo', name: 'Hugo', imageFile: 'hugo.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Hugo.' },
  { id: 'janedoe', name: 'Jane Doe', imageFile: 'janedoe.webp', role: 'DPS', guide: 'Placeholder guide for Jane Doe.' },
  { id: 'jufufu', name: 'Ju Fufu', imageFile: 'jufufu.webp', role: 'Support', guide: 'Placeholder guide for Jufufu.' },
  { id: 'koleda', name: 'Koleda', imageFile: 'koleda.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Koleda.' },
  { id: 'lighter', name: 'Lighter', imageFile: 'lighter.webp', role: 'DPS', guide: 'Placeholder guide for Lighter.' },
  { id: 'lucia', name: 'Lucia', imageFile: 'lucia.webp', role: 'Support', guide: 'Placeholder guide for Lucia.' },
  { id: 'lucy', name: 'Lucy', imageFile: 'lucy.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Lucy.' },
  { id: 'lycaon', name: 'Lycaon', imageFile: 'lycaon.webp', role: 'DPS', guide: 'Placeholder guide for Lycaon.' },
  { id: 'manato', name: 'Manato', imageFile: 'manato.webp', role: 'Support', guide: 'Placeholder guide for Manato.' },
  { id: 'miyabi', name: 'Miyabi', imageFile: 'miyabi.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Miyabi.' },
  { id: 'orphie', name: 'Orphie', imageFile: 'orphie.webp', role: 'DPS', guide: 'Placeholder guide for Orphie.' },
  { id: 'panyinhu', name: 'Pan Yinhu', imageFile: 'panyinhu.webp', role: 'Support', guide: 'Placeholder guide for Panyinhu.' },
  { id: 'piper', name: 'Piper', imageFile: 'piper.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Piper.' },
  { id: 'pulchra', name: 'Pulchra', imageFile: 'pulchra.webp', role: 'DPS', guide: 'Placeholder guide for Pulchra.' },
  { id: 'qingyi', name: 'Qingyi', imageFile: 'qingyi.webp', role: 'Support', guide: 'Placeholder guide for Qingyi.' },
  { id: 'rina', name: 'Rina', imageFile: 'rina.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Rina.' },
  { id: 'seed', name: 'Seed', imageFile: 'seed.webp', role: 'DPS', guide: 'Placeholder guide for Seed.' },
  { id: 'seth', name: 'Seth', imageFile: 'seth.webp', role: 'Support', guide: 'Placeholder guide for Seth.' },
  { id: 'soldiereleven', name: 'Soldier 11', imageFile: 'soldiereleven.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Soldier 11.' },
  { id: 'soukaku', name: 'Soukaku', imageFile: 'soukaku.webp', role: 'DPS', guide: 'Placeholder guide for Soukaku.' },
  { id: 'trigger', name: 'Trigger', imageFile: 'trigger.webp', role: 'Support', guide: 'Placeholder guide for Trigger.' },
  { id: 'vivian', name: 'Vivian', imageFile: 'vivian.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Vivian.' },
  { id: 'yanagi', name: 'Yanagi', imageFile: 'yanagi.webp', role: 'DPS', guide: 'Placeholder guide for Yanagi.' },
  { id: 'yidhari', name: 'Yidhari', imageFile: 'yidhari.webp', role: 'Support', guide: 'Placeholder guide for Yidhari.' },
  { id: 'yixuan', name: 'Yixuan', imageFile: 'yixuan.webp', role: 'Off-field DPS', guide: 'Placeholder guide for Yixuan.' },
  { id: 'yuzuha', name: 'Yuzuha', imageFile: 'yuzuha.webp', role: 'DPS', guide: 'Placeholder guide for Yuzuha.' },
  { id: 'zhuyuan', name: 'Zhu Yuan', imageFile: 'zhuyuan.webp', role: 'Support', guide: 'Placeholder guide for Zhu Yuan.' },
];