function obfuscateName(name) {
  // JIS第一水準および第二水準の漢字の範囲からランダムな漢字を生成する関数
  function randomKanji() {
    return String.fromCharCode(Math.floor(Math.random() * (0x9FCF - 0x4E00 + 1)) + 0x4E00);
  }

  // 氏名によく使われる異体字リスト
  const variantKanji = ["﨑", "󠄃塚", "󠄆邊", "󠄒齋", "󠄆邉", "󠄖𮯞"];

  // IVSを含むかどうか判定する関数
  function containsIVS(str) {
    return /[\uDB40][\uDC00-\uDFFF]/.test(str);
  }

  let countToAdd = containsIVS(name) ? 2 : 3;

  // 元の文字列を配列に変換
  let chars = Array.from(name);

  // 元の文字列の10倍のランダムな漢字を追加
  for (let i = 0; i < name.length * 10 - countToAdd; i++) {
    chars.push(randomKanji());
  }

  // 異体字をランダムな場所に挿入
  for (let i = 0; i < countToAdd; i++) {
    let randomVariant = variantKanji[Math.floor(Math.random() * variantKanji.length)];
    chars.push(randomVariant);
  }

  // 配列の順序をランダムに並べ替え
  chars.sort(() => Math.random() - 0.5);

  // 重複する文字を削除
  chars = chars.filter((char, index, self) => {
    return self.indexOf(char) === index;
  });

  // 配列を文字列に変換して返す
  return chars.join('');
}

// テスト
const originalName = "生成人工知能之未来";
const obfuscated = obfuscateName(originalName);
console.log(obfuscated);
