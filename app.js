// функция для расчёта расстояния
function distance() {
    // переменная для результата (расстояние)
  let s;
  // получаем введенные значения скорости и времени (V и t) со страницы HTML по привязке к Id
  let V = Number(document.getElementById("V").value);
  let t = Number(document.getElementById("t").value);
  
  // расстояние вычисляем по формуле
  s = V * t;

  //возвращаем полученное значение на страницу HTML
  document.getElementById("s").innerHTML = s;

}