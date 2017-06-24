module.exports = function main(number) {
    var input = number.toString();
    var table = [
      ["._.","|.|","|_|"],
      ["...","..|","..|"],
      ["._.","._|","|_."],
      ["._.","._|","._|"],
      ["...","|_|","..|"],
      ["._.","|_.","._|"],
      ["._.","|_.","|_|"],
      ["._.","..|","..|"],
      ["._.","|_|","|_|"],
      ["._.","|_|","..|"]
    ]
    var txt = "";
    var flag = 0;
    var j = 0;
    while(flag!=input.length * 3) {
      for(var i=0;i<input.length;i++) {
        switch (input[i]) {
          case "0":
            txt += table[0][j] + " ";
            break;
          case "1":
            txt += table[1][j] + " ";
            break;
          case "2":
            txt += table[2][j] + " ";
            break;
          case "3":
            txt += table[3][j] + " ";
            break;
          case "4":
            txt += table[4][j] + " ";
            break;
          case "5":
            txt += table[5][j] + " ";
            break;
          case "6":
            txt += table[6][j] + " ";
            break;
          case "7":
            txt += table[7][j] + " ";
            break;
          case "8":
            txt += table[8][j] + " ";
            break;
          case "9":
            txt += table[9][j] + " ";
            break;
          default:
        }
        flag++;
    }
    txt = txt.substring(0, txt.length-1);
    txt += "\n";
    j++;
    }
    console.log(txt);
    return txt;
};
