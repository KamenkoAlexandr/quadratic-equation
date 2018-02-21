module.exports = function solveEquation(equation) {
      var len = equation.length;
    var a = '', b = '', c = '', D, x1, x2;
    var i = 0;
    while (equation[i] != '*') {
        a += equation[i];
        i++;
    }
    a = + a;
    i = i + 6;
    while (equation[i] != '*') {
        if(equation[i] != ' ')
            b += equation[i];
        i++;
    }
    b = + b;
    i = i + 4;
    while (i != len) {
        if(equation[i] != ' ')
            c += equation[i];
        i++;
    }
    c = + c;
    D = (Math.pow(b,2) - 4*a*c);

    x1 = ((-b + Math.sqrt(D))/(2*a));
    x2 = ((-b - Math.sqrt(D))/(2*a));
    var arr = [];
    arr.push(Math.round(x1));
    arr.push(Math.round(x2));
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }
    arr.sort(compareNumeric);
  return arr;
}
