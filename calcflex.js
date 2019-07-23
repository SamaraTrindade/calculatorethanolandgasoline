/**
 * @author SamaraTrindade
*Teste para calculadora */

let ethanol_km, gasoline_km, ethanol_price, gasoline_price;

function calculate() {
	ethanol_km = parseFloat (frmEthanol_km.txtEthanolKm.value.replace(",","."));
	gasoline_km = parseFloat (frmGasoline_km.txtGasolineKm.value.replace(",","."));
	ethanol_price = parseFloat (frmEthanol_price.txtEthanolPrice.value.replace(",","."));
	gasoline_price = parseFloat (frmGasoline_price.txtGasolinePrice.value.replace(",","."));
	/** Recebe os valores de cada campo. Caso o usuário digite vírgula, ele substitui pelo ponto, ficando livre de erro por digitação.*/

	let advantage_km = ethanol_km/gasoline_km;
	let advantage_price = gasoline_price/ethanol_price;
	/** Divide a variável etanol_km e gasolina_km e reserva na variável advantage_km.
	 * Divide a variável gasoline_price e tanol_preco e reserva na variável advantage_price. */

	document.getElementById("ask").style= "display:none";
	/** Oculta a id ASK para poder aparecer a próxima "tela". */

	if (advantage_km <= advantage_price)
	{	
		document.getElementById ("textstatus").innerHTML = "A melhor vantagem é Etanol";
		/** Puxa a ID com valor vazio do index e preenche com o texto entre aspas caso dê verdadeiro. */
		document.getElementById("status").src= "etanol.png";
		
		
	}
	else
	{		document.getElementById ("textstatus").innerHTML = "A melhor vantagem é Gasolina";
			document.getElementById("status").src= "gasolina.png";
	}	
	document.getElementById("result").style= "display:block !important;";
	/** força o funcionamento da ID result com esse !important. */
}

function resetar()
{
	document.getElementById("txtEthanolKm").value= "";
	document.getElementById("txtGasolineKm").value= "";
	document.getElementById("txtEthanolPrice").value= "";
	document.getElementById("txtGasolinePrice").value= "";
/** Deixa os campos dos inputs como vazio "". */
	document.getElementById("result").style= "display:none";
	document.getElementById("status").src= "neutro.png";
	document.getElementById("ask").style= "display:block !important;";
}
