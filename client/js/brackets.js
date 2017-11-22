console.log('I did enter!')

var tokens = [ ['{','}'] , ['[',']'] , ['(',')'] ];

var btn = document.getElementById('btn');
btn.addEventListener('click', validateExpression);

document.getElementById("input").addEventListener("keyup", (event) => {
  event.preventDefault();
  if(event.keyCode == 13) { validateExpression(); }
});

function validateExpression() {
  event.preventDefault();

  var parensStr = document.getElementById('input');
  var inputStr = parensStr.value

  if(inputStr === null) { showMessage(true); }

  var expression = inputStr.split('');
  var stack = [];

  for(var i = 0; i < expression.length; i++) {
    if(isParanthesis(expression[i])) {

      if(isOpenParenthesis(expression[i])) {
        stack.push(expression[i]);
      } else {
        if(stack.length === 0) {
          return showMessage(false);
        }
        var top = stack.pop();
        if(!matches(top, expression[i])) {
          return showMessage(false);
        }
      }
    }
  }

  var returnValue = stack.length === 0 ? true : false;
  showMessage(returnValue)
}

function isParanthesis(char) {
  var str = '{}[]()';
  if(str.indexOf(char) > -1) {
    return true;
  } else {
    return false;
  }
}

function isOpenParenthesis(parenthesisChar) {
  for(var j = 0; j < tokens.length; j++) {
    if(tokens[j][0] === parenthesisChar) {
      return true;
    }
  }
  return false;
}

function matches(topOfStack, closedParenthesis) {
  for (var k = 0; k < tokens.length; k++) {
    if (tokens[k][0] === topOfStack &&
        tokens[k][1] === closedParenthesis) {
      return true;
    }
  }
  return false;
}

/* Função utilizada somente para 'printar' mensagem */
function showMessage(bl) {
  let str = document.getElementById('input');
  let inputStr = str.value
  let answer = document.getElementById('answer');
  if(bl) {
    answer.innerHTML = `<div class='bold'> \" ${inputStr}\ "</div> is <span class='bolder-too'>valid</span>!`;
  } else {
    answer.innerHTML = `<div class='bold'>\" ${inputStr} \"</div> is <span class='bolder-too'>not valid</span>!`;
  }
}
