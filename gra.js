function obfuscateName(name) {
    // JIS第一水準および第二水準の漢字の範囲からランダムな漢字を生成する関数
    function randomKanji() {
      return String.fromCharCode(Math.floor(Math.random() * (0x9FCF - 0x4E00 + 1)) + 0x4E00);
    }
  
    // 元の文字列を配列に変換
    let chars = Array.from(name);
  
    // 配列の順序をランダムに並べ替え
    chars.sort(() => Math.random() - 0.5);
  
    // 元の文字列の3倍のランダムな漢字を追加
    for (let i = 0; i < name.length * 3; i++) {
      chars.push(randomKanji());
    }
  
    // 配列の順序をさらにランダムに並べ替え
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
  