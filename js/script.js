//VARIAVEIS
var box = window.document.getElementById("box");
var box1 = window.document.getElementById("box1");
var sBruto = Number(window.document.getElementById("salariobruto"));
var depende = Number(window.document.getElementById("dependentes"));
var vale = Boolean(window.document.getElementById("vale"));
var calc = window.document.getElementById("calc");
var reset = window.document.getElementById("reset");


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
	box1.style.width = "auto";
	box1.style.backgroundColor = "rgba(65,65,65,0.6)";
	box1.style.height = "auto";
	box1.style.padding = "50px"
	box1.style.borderRadius = "30px"
	box1.style.fontSize = "22px"
	box1.style.lineHeight = "170%"
	box1.style.animationDuration="1s"
}
function fechar() {
	//Fechar a box de resultados
	box1.style.display="none"
	box1.style.animationDuration="1s"
	
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
