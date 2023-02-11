//VARIAVEIS
var box = window.document.getElementById("box");
var box1 = window.document.getElementById("box1");
var sBruto = Number(window.document.getElementById("salariobruto"));
var depende = Number(window.document.getElementById("dependentes"));
var vale = Boolean(window.document.getElementById("vale"));
var calc = window.document.getElementById("calc");
var reset = window.document.getElementById("reset");
var func = 0;

//BOTOES DE CALCULAR
calc.addEventListener("click", abrir);
calc.addEventListener("mouseenter", mouseSim1);
calc.addEventListener("mouseleave", mouseNao1);
reset.addEventListener("click", fechar);
reset.addEventListener("mouseenter", mouseSim2);
reset.addEventListener("mouseleave", mouseNao2);

//FUNCOES
function abrir() {
	//Surgir a box de resultados
	box1.style.display = "block";
	box1.style.width = "250px";
	box1.style.background = "gray";
	box1.style.animationDuration = "1s";
	box1.style.height = "300px";

	/*background-color: rgba(68, 68, 68, 0.6);
    padding: 50px;
    border-radius: 30px;
    font-size: 22px;
    line-height: 170%; */
}
function fechar() {
	//Fechar a box de resultados

	
}
function mouseSim1() {
	//mudar a estetica do botao de calcular
	//calc.style.border = "none";
}
function mouseNao1() {
	//mudar a estetica do botao de calcular
}
function mouseSim2() {
	//mudar a estetica do botao de resetar
	//reset.style.backgroundColor = "yellow";
}
function mouseNao2() {
	//mudar a estetica do botao de resetar
	//reset.style.background = "green";
}
