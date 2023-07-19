// 이벤트1
function eventOne() {
  type BackgroundColors = {
    [key: number]: string;
  };

  const backgroundColors: BackgroundColors = {
    9: "red",
    19: "#CC3333",
    29: "lightcyan",
    39: "darkviolet",
    49: "darkturquoise",
    59: "darkseagreen",
    69: "lightcoral",
    79: "navy", //todo 글자 밝은색으로 교체
    89: "gold",
    99: "skyblue",
    109: "forestgreen",
    119: "pink",
    129: "firebrick",
    139: "mediumaquamarine",
    149: "cadetblue",
    159: "aliceblue",
    169: "mediumblue",
    179: "crimson", //todo 글자 밝은색으로 교체
    189: "lightsalmon",
    199: "slategray",
    209: "ivory",
    219: "chocolate",
    229: "lavenderblush",
    239: "pink",
    249: "burlywood",
    259: "darkorange",
    269: "lemonchiffon",
    279: "dodgerblue",
    289: "khaki",
    299: "darkcyan",
    309: "azure",
    319: "lime",
    329: "mintcream",
    339: "lightgoldenrodyellow",
    349: "violet",
    359: "darkred", //todo 글자 밝은색으로 교체
    369: "cornsilk",
    379: "lightskyblue",
    389: "mediumblue", //todo 글자 밝은색으로 교체
    399: "darkorchid",
    409: "deepskyblue",
    419: "darkgoldenrod",
    429: "darkblue", //todo 글자 밝은색으로 교체
    439: "limegreen",
    449: "hotpink",
    459: "darkkhaki",
    469: "fuchsia",
    479: "darkolivegreen",
    489: "aqua",
    499: "dimgray", //todo 글자 밝은색으로 교체
    509: "lightgrey", //* 배경색 교체
    519: "darkslategray", //todo 글자 밝은색으로 교체
    529: "saddlebrown", //todo 글자 밝은색으로 교체
    539: "darkmagenta", //todo 글자 밝은색으로 교체
    549: "deeppink",
    559: "seagreen",
    569: "lightgreen",
    579: "coral",
    589: "steelblue",
    599: "#ffe4e1",
    609: "indigo", //todo 글자 밝은색으로 교체
    619: "gainsboro",
    629: "darkgray", //* 배경색 교체
    639: "purple", //todo 글자 밝은색으로 교체 + 배경색 교체
    649: "darkslateblue", //todo 글자 밝은색으로 교체
    659: "lightpink",
    669: "darkgreen",
    679: "lightsteelblue",
    689: "peachpuff",
    699: "plum",
    709: "wheat",
    719: "brown", //todo 글자 밝은색으로 교체
    729: "lawngreen",
    739: "mistyrose",
    749: "greenyellow",
    759: "thistle",
    769: "olivedrab", //todo 글자 밝은색으로 교체 + 배경색 교체
    779: "tan",
    789: "black", //todo 글자 밝은색으로 교체
    799: "mediumpurple",
    809: "palevioletred",
    819: "orange",
    829: "orchid",
    839: "turquoise",
    849: "moccasin",
    859: "yellowgreen",
    869: "rosybrown",
    879: "indianred",
    889: "paleturquoise",
    899: "mediumorchid",
    909: "chartreuse",
    919: "midnightblue", //todo 글자 밝은색으로 교체
    929: "lightslategray",
    939: "darkviolet", //todo 글자 밝은색으로 교체
    949: "aqua",
    959: "silver", //* 배경색 교체
    969: "lightblue", //* 배경색 교체
    979: "yellow",
    989: "purple", //todo 글자 밝은색으로 교체
    999: "darkcyan", //todo 글자 밝은색으로 교체
  };

  const countKeys = Object.keys(backgroundColors);

  console.log(countKeys);

  for (let i = 0; i < countKeys.length; i++) {
    const key = parseInt(countKeys[i]);
    if (count >= key && count < key + 10) {
      setBackgroundColor(backgroundColors[key]);
      break;
    }
    setBackgroundColor("blueviolet");
  }

  const changeFontColorNumbers = [
    79, 179, 359, 389, 429, 499, 519, 529, 539, 609, 639, 649, 719, 769, 789, 919, 939, 989, 999,
  ];
  const changeBackgroundColorNumbers = [509, 629, 639, 769, 959, 969];

  const changeFont = changeFontColorNumbers.map((number) => {});
}
