//$(document).ready(function() {
function telefone_loja() {
	return '21990114929'
}

function valor_entrega() {
	return '3.00' //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
}

function cardapioBd() {
	var cardapio = [{
			id: 1, // nunca repetir
			tipo: 'pizza',
			nome: 'Pizza de Calabresa',
			descricao: 'Uma deliciosa Pizza de Calabresa, feita no forno a lenha, com uma deliciosa receita especialmente preparada pelo nosso pizzaiolo.',
			img_padrao: './assets/images/pizzas/pizza-calabresa.png',
			img_carrinho: './assets/images/pizzas/carrinho/pizza-calabresa.png',
			observacao: '',
			tamanhos: [{
					id: 1, // nunca repetir
					produto_id: 1,
					nome: 'Pequena',
					valor_tela: '15,99',
					valor_conta: '15.99', //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
				},
				{
					id: 2, // nunca repetir
					produto_id: 1,
					nome: 'Média',
					valor_tela: '19,99',
					valor_conta: '19.99', //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
				},
				{
					id: 3, // nunca repetir
					produto_id: 1,
					nome: 'Gigante',
					valor_tela: '24,99',
					valor_conta: '24.99', //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
				},
				{
					id: 4, // nunca repetir
					produto_id: 1,
					nome: 'Maracanã',
					valor_tela: '29,99',
					valor_conta: '29.99', //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
				}

			]

		}, {
			id: 2, // nunca repetir
			tipo: 'pizza',
			nome: 'Pizza de Atum',
			descricao: 'Uma deliciosa Pizza de Atum, feita no forno a lenha, com uma deliciosa receita especialmente preparada pelo nosso pizzaiolo.',
			img_padrao: './assets/images/pizzas/pizza-atum.png',
			img_carrinho: './assets/images/pizzas/carrinho/pizza-atum.png',
			observacao: '',
			tamanhos: [{
					id: 5, // nunca repetir
					produto_id: 2,
					nome: 'Pequena',
					valor_tela: '15,99',
					valor_conta: '15.99', //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
				},
				{
					id: 6, // nunca repetir
					produto_id: 2,
					nome: 'Média',
					valor_tela: '19,99',
					valor_conta: '19.99', //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
				},
				{
					id: 7, // nunca repetir
					produto_id: 2,
					nome: 'Gigante',
					valor_tela: '24,99',
					valor_conta: '24.99', //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
				},
				{
					id: 8, // nunca repetir
					produto_id: 2,
					nome: 'Maracanã',
					valor_tela: '29,99',
					valor_conta: '29.99' //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
				}
			]
		}, {
			id: 3, // nunca repetir
			tipo: 'refrigerante',
			nome: 'Coca-cola',
			descricao: 'Coca-cola geladinha, uma delícia! hummmm',
			img_padrao: './assets/images/refrigerantes/refrigerante-coca-cola.png',
			img_carrinho: './assets/images/refrigerantes/carrinho/refrigerante-coca-cola.png',
			observacao: '',
			tamanhos: [{
					id: 9, // nunca repetir
					produto_id: 3,
					nome: 'Lata (300 ml)',
					valor_tela: '4,50',
					valor_conta: '4.50', //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
				},
				{
					id: 10, // nunca repetir
					produto_id: 3,
					nome: 'Lata - Zero (300 ml)',
					valor_tela: '4,50',
					valor_conta: '4.50', //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
				},
				{
					id: 11, // nunca repetir
					produto_id: 3,
					nome: '2 Litros',
					valor_tela: '8,99',
					valor_conta: '8.99', //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
				},
				{
					id: 12, // nunca repetir
					produto_id: 3,
					nome: '2 Litros - Zero',
					valor_tela: '8,99',
					valor_conta: '8.99' //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
				}
			]
		}, {
			id: 4, // nunca repetir
			tipo: 'refrigerante',
			nome: 'Coca-cola 2',
			descricao: 'Coca-cola geladinha, uma delícia! hummmm',
			img_padrao: './assets/images/refrigerantes/refrigerante-coca-cola.png',
			img_carrinho: './assets/images/refrigerantes/carrinho/refrigerante-coca-cola.png',
			observacao: '',
			tamanhos: [{
					id: 13, // nunca repetir
					produto_id: 4,
					nome: 'Lata (300 ml)',
					valor_tela: '4,50',
					valor_conta: '4.50', //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
				},
				{
					id: 14, // nunca repetir
					produto_id: 4,
					nome: 'Lata - Zero (300 ml)',
					valor_tela: '4,50',
					valor_conta: '4.50', //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
				},
				{
					id: 15, // nunca repetir
					produto_id: 4,
					nome: '2 Litros',
					valor_tela: '8,99',
					valor_conta: '8.99', //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
				},
				{
					id: 16, // nunca repetir
					produto_id: 4,
					nome: '2 Litros - Zero',
					valor_tela: '8,99',
					valor_conta: '8.99' //	valor em float (sem virgula, substituir por ponto. Se for mais de mil reais, usar junto assim (1000.00))
				}
			]
		}

	];
	return cardapio;
}


/* ################################################################################
############################### NÃO ALTERAR ABAIXO ################################
################################################################################ */

// MONTA O CARDÁPIO NO HTML DE ACORDO COM A ORDEM DESCRITA NA FUNÇÃO CARDAPIOBD
function montaCardapio() {
	if (!localStorage.hasOwnProperty("carrinho_le")) {
		var carrinho_le = ''
	}


	let container = document.getElementById('cardapio');
	let cardapio = cardapioBd();
	container.innerHTML = '';

	for (let i = 0; i < cardapio.length; i++) {
		var if_pizza = '';
		var tamanho = '';
		var nd = 0;
		for (let t = 0; t < cardapio[i].tamanhos.length; t++) {
			tamanho += '<option value="' + cardapio[i].tamanhos[t].id + '">' + cardapio[i].tamanhos[t].nome + ' | R$ ' + cardapio[i].tamanhos[t].valor_tela + '</option>';
		}

		var btnCart = ''
		if (localStorage.hasOwnProperty("wp_le")) {
			if (localStorage.getItem("wp_le") != 0) {
				btnCart = '<a href="javascript:;" onclick="adicionaCarrinho(' + cardapio[i].id + ',' + nd + ')" class="btn btn-go btn-block btn-produto-' + cardapio[i].id + ' add-to-cart" id="add-cart" data-produto-id="' + cardapio[i].id + '">Adicionar ao carrinho</a>';
			}
		}

		if (cardapio[i].tipo == 'pizza' || cardapio[i].tipo == 'refrigerante') {
			if_pizza += '<label for="tamanhos__' + cardapio[i].id + '">Selecione um tamanho</label>\n' +
				'<select class="form-control select-opcoes" onchange="escolhendoOpcao(this.value, ' + cardapio[i].id + ')" name="tamanhos__' + cardapio[i].id + '" id="tamanhos__' + cardapio[i].id + '">\n' +
				tamanho +
				'</select>' +
				'<hr>' +
				btnCart
		}

		container.innerHTML += '<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">\n' +
			'<div class="card mb-3" style="max-width: 33.75rem;">\n' +
			'<div class="row no-gutters">\n' +
			'<div class="col-md-4">\n' +
			'<img src="' + cardapio[i].img_padrao + '" class="card-img" alt="' + cardapio[i].nome + '">\n' +
			'</div>\n' +
			'<div class="col-md-8">\n' +
			'<div class="card-body">\n' +
			'<h5 class="card-title">' + cardapio[i].nome + '</h5>\n' +
			'<p class="card-text">' + cardapio[i].descricao + '</p>\n' +
			if_pizza + '\n' +
			'</div>\n' +
			'</div>\n' +
			'</div>\n' +
			'</div>\n' +
			'</div>\n';

	}

} // fim montaCardapio()

// QUANDO MUDA UMA OPÇÃO DE TAMANHO DE PIZZA, JÁ MUDA TAMBÉM O ID PARA CASO A PESSOA ESCOLHA AQUELA,
// JÁ ADICIONE AO CARRINHO COM O TAMANHO CORRETO
function escolhendoOpcao(tamanho_id, produto_id) {
	let btn = document.getElementsByClassName('btn-produto-' + produto_id)[0];
	btn.setAttribute('onclick', 'adicionaCarrinho(' + produto_id + ',' + tamanho_id + ')');
}



// QUANDO O USUÁRIO CLICA PARA ADICIONAR O PRODUTO NO CARRINHO
function adicionaCarrinho(produto_id, tamanho_id) {
	/* ABRE CARRINHO */
	abreCarrinho();

	let cardapio = cardapioBd();

	let id_produto = produto_id

	let produto = cardapio.filter(function (produto) {
		return produto.id == produto_id;
	});

	if (tamanho_id == 0) {
		var id_tamanho = produto[0].tamanhos[0].id
	} else {
		var id_tamanho = tamanho_id
	}

	let tamanhos = produto[0].tamanhos.filter(function (tamanho) {
		return tamanho.id == id_tamanho;
	});

	// verifica se já há algo no carrinho

	let carrinho_le = new Array()

	if (localStorage.hasOwnProperty("carrinho_le")) {
		carrinho_le = JSON.parse(localStorage.getItem("carrinho_le"))
	}


	/* dados para adicionar */
	var add = {
		produto_id: id_produto,
		tamanho_id: id_tamanho,
		produto_nome: produto[0].nome,
		tamanho_nome: tamanhos[0].nome,
		produto_valor: tamanhos[0].valor_conta,
		imagem: produto[0].img_carrinho
	}


	carrinho_le.push(add)

	/* Salva o item no local storage */
	localStorage.setItem("carrinho_le", JSON.stringify(carrinho_le))
	//localStorage.setItem("carrinho_le", '')

	atualizaItemCarrinho();
}

// atualiza o carrinho, no caso
function atualizaItemCarrinho() {
	let lista = document.getElementById("lista-carrinho");

	lista.innerHTML = ''

	if (localStorage.hasOwnProperty("carrinho_le")) {
		var carrinho_le = JSON.parse(localStorage.getItem("carrinho_le"))
	} else {
		var carrinho_le = '';
	}

	var total_parcial = parseFloat('0.00');

	for (let i = 0; i < carrinho_le.length; i++) {
		//const element = carrinho_le[i];
		total_parcial += parseFloat(carrinho_le[i].produto_valor);
		lista.innerHTML += '<li class="media">\n' +
			'<a href="javascript:;" title="Remover item" class="remove-item" onclick="removeItem(' + i + ')" data-remove-id="' + i + '"><i class="fas fa-times"></i></a>\n' +
			'<img src="' + carrinho_le[i].imagem + '" class="mr-3" alt="Foto de: ' + carrinho_le[i].produto_nome + '">\n' +
			'<div class="media-body">\n' +
			'<h5 class="mt-0 mb-1">' + carrinho_le[i].produto_nome + ' (' + carrinho_le[i].tamanho_nome + ') </h5>\n' +
			'<strong>R$ ' + parseFloat(carrinho_le[i].produto_valor).toLocaleString('pt-br') + '</strong>\n' +
			'</div>\n' +
			'</li>\n';


	}

	var items_texto = document.getElementById('box-carrinho');
	var h3 = items_texto.getElementsByTagName('h3')[0];

	if (carrinho_le.length > 1) {
		h3.innerHTML = 'Pedido (' + carrinho_le.length + ' itens)';
	} else {
		h3.innerHTML = 'Pedido (' + carrinho_le.length + ' item)';
	}


	if (valor_entrega() != '0.00') {
		var total_parcial_texto = document.getElementById('total-parcial-carrinho');
		total_parcial_texto.innerHTML = 'R$ ' + parseFloat(total_parcial).toLocaleString('pt-br')

		var total_texto = document.getElementById('total-carrinho');
		var total_e_entrega = parseFloat(total_parcial) + parseFloat(valor_entrega());
		total_texto.innerHTML = 'R$ ' + parseFloat(total_e_entrega).toLocaleString('pt-br')
	} else {
		var total_parcial_texto = document.getElementById('total-carrinho');
		total_parcial_texto.innerHTML = 'R$ ' + parseFloat(total_parcial).toLocaleString('pt-br')
	}

}


function abreCarrinho() {

	var li = document.getElementById("carrinho");
	li.classList.add("show");
	li.click('a')

	var box = document.getElementById("box-carrinho");
	box.classList.add("show");

	var a = li.getElementsByTagName("a")[0];
	a.focus();
	a.classList.add("show");
	a.setAttribute("aria-expanded", true);
}


function removeItem(item) {

	if (localStorage.hasOwnProperty("carrinho_le")) {
		var carrinho_le = JSON.parse(localStorage.getItem("carrinho_le"))
	}

	delete carrinho_le[item];

	var carrinho_le = carrinho_le.filter(function (el) {
		return el != null;
	});

	localStorage.setItem("carrinho_le", JSON.stringify(carrinho_le))

	// atualiza 
	atualizaItemCarrinho();

	abreCarrinho();
}

function criaCarrinho() {

	let navbarPrincipal = document.getElementById("navbarPrincipal");
	var ul = navbarPrincipal.getElementsByTagName('ul')[0];

	var li = document.createElement("li");
	li.classList.add("nav-item");
	li.classList.add("dropdown");
	li.setAttribute("id", "carrinho");

	li.classList.add("show"); //

	var if_delivery = '';
	if (valor_entrega() != '0.00') {
		if_delivery = '<div class="total" id="total-delivery">' +
			'Total Parcial:' +
			'<strong>' +
			'<span class="total-carrinho" id="total-parcial-carrinho">' +
			'R$ 0,00' +
			'</span>' +
			'</strong>' +
			'</div>' +
			'<div class="total" id="total-parcial">' +
			'Entrega:' +
			'<strong>' +
			'<span class="total-carrinho" id="total-parcial-carrinho">' +
			'R$ ' + parseFloat(valor_entrega()).toLocaleString('pt-br') +
			'</span>' +
			'</strong>' +
			'</div>';
	}

	li.innerHTML = '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownCarrinho" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
		'Carrinho <i class="fas fa-shopping-cart"></i>' +
		'</a>' +
		'<div class="dropdown-menu carrinho" aria-labelledby="navbarDropdownCarrinho" id="box-carrinho">' +
		'<h3 class="titulo">Pedido </h3>' +
		'<ul class="list-unstyled" id="lista-carrinho">' +
		'</ul>' +
		if_delivery +
		'<div class="total" id="total">' +
		'Total:' +
		'<strong>' +
		'<span class="total-carrinho" id="total-carrinho">' +
		'R$ 0,00' +
		'</span>' +
		'</strong>' +
		'</div>' +
		'<div class="clearfix"></div>' +
		'<a href="javascript:;" class="btn btn-go btn-block finalizar" data-toggle="modal" data-target="#modalFecharPedido" onclick="finalizar()">Finalizar Pedido</a>' +
		'</div>';
	ul.appendChild(li);
}



function finalizar() {

	//lista.innerHTML = ''



	if (localStorage.hasOwnProperty("carrinho_le")) {
		var carrinho_le = JSON.parse(localStorage.getItem("carrinho_le"))
	}

	var pessoa_le = {
		observacao: '',
		nome: '',
		telefone: '',
		rua: '',
		numero: '',
		complemento: '',
		referencia: '',
		bairro: '',
		pagamento: '',
		troco: '',
	}
	if (localStorage.hasOwnProperty("pessoa_le")) {
		pessoa_le = JSON.parse(localStorage.getItem("pessoa_le"))
	}

	var total = parseFloat('0.00');
	var pedido = '';

	for (let i = 0; i < carrinho_le.length; i++) {
		//const element = carrinho_le[i];
		total += parseFloat(carrinho_le[i].produto_valor);
		pedido += '<li class="media">\n' +
			'<img src="' + carrinho_le[i].imagem + '" class="mr-3" alt="Foto de: ' + carrinho_le[i].produto_nome + '">\n' +
			'<div class="media-body">\n' +
			'<h5 class="mt-0 mb-1">' + carrinho_le[i].produto_nome + ' (' + carrinho_le[i].tamanho_nome + ') </h5>\n' +
			'<strong>R$ ' + parseFloat(carrinho_le[i].produto_valor).toLocaleString('pt-br') + '</strong>\n' +
			'</div>\n' +
			'</li>\n';


	}

	/* var total_texto = document.getElementById('total-carrinho');
	total_texto.innerHTML = 'R$ ' + parseFloat(total).toLocaleString('pt-br') */

	let modal_body = document.getElementById('modal-body');
	modal_body.innerHTML = '<div class="row">' +
		'<div class="col-lg-4 col-sm-12" id="coluna-pedido-finalizar">' +
		'<ul class="list-unstyled ul-finalizar">' +
		pedido +
		'</ul>' +
		'<div class="total-finalizar"></div>' +
		'</div>' +
		'<div class="col-lg-8 col-sm-12">' +
		'<div class="form-group">' +
		'<label for="observacao">Tem alguma observação sobre o pedido?</label>' +
		'<textarea class="form-control" name="observacao" id="observacao" placeholder="Exemplo: retirar cebola">' + pessoa_le.observacao + '</textarea>' +
		'</div>' +
		'<hr>' +
		'<div class="form-group">' +
		'<label for="nome">Nome completo <span class="req"></span></label>' +
		'<input type="text" class="form-control" name="nome" id="nome" value="' + pessoa_le.nome + '" placeholder="Digite seu nome completo" required>' +
		'<p class="alert alert-danger alert-hide alert-nome" id="alert-nome">Campo Obrigatório</p>' +
		'</div>' +
		'<div class="form-group">' +
		'<label for="telefone">Telefone <span class="req"></span></label>' +
		'<input type="text" class="form-control" name="telefone" id="telefone" value="' + pessoa_le.telefone + '" placeholder="Digite seu telefone" required>' +
		'<p class="alert alert-danger alert-hide alert-telefone" id="alert-telefone">Campo Obrigatório</p>' +
		'</div>' +
		'<hr>' +
		'<div class="form-group">' +
		'<label for="rua">Rua <span class="req"></span></label>' +
		'<input type="text" class="form-control" name="rua" id="rua" value="' + pessoa_le.rua + '" placeholder="Digite a sua rua" required>' +
		'<p class="alert alert-danger alert-hide alert-rua" id="alert-rua">Campo Obrigatório</p>' +
		'</div>' +
		'<div class="form-group">' +
		'<label for="numero">Número da residência <span class="req"></span></label>' +
		'<input type="number" class="form-control" name="numero" id="numero" value="' + pessoa_le.numero + '" placeholder="Digite o número da residencia" required>' +
		'<p class="alert alert-danger alert-hide alert-numero" id="alert-numero">Campo Obrigatório</p>' +
		'</div>' +
		'<div class="form-group">' +
		'<label for="complemento">Complemento </label>' +
		'<input type="text" class="form-control" name="complemento" id="complemento" value="' + pessoa_le.complemento + '" placeholder="Apartamento, quadra, lote">' +
		'</div>' +
		'<div class="form-group">' +
		'<label for="referencia">Ponto de referência <span class="req"></span></label>' +
		'<input type="text" class="form-control" name="referencia" id="referencia" value="' + pessoa_le.referencia + '" placeholder="Perto da igreja, perto da farmácia, perto do mercadinho" required>' +
		'<p class="alert alert-danger alert-hide alert-referencia" id="alert-referencia">Campo Obrigatório</p>' +
		'</div>' +
		'<div class="form-group">' +
		'<label for="bairro">Bairro <span class="req"></span></label>' +
		'<input type="text" class="form-control" name="bairro" id="bairro" value="' + pessoa_le.bairro + '" placeholder="Digite seu bairro" required>' +
		'<p class="alert alert-danger alert-hide alert-bairro" id="alert-bairro">Campo Obrigatório</p>' +
		'</div>' +
		'<hr>' +
		'<div class="form-group">' +
		'<label for="pagamento">Meio de Pagamento <span class="req"></span></label>' +
		'<select class="form-control" name="pagamento" onchange="mostrarTroco(this.value)" id="pagamento">' +
		'<option value="" ' + (pessoa_le.pagamento == "" ? "selected" : "") + '>Selecione um meio de pagamento</option>' +
		'<option value="credito" ' + (pessoa_le.pagamento == "credito" ? "selected" : "") + '>Cartão de Crédito</option>' +
		'<option value="debito" ' + (pessoa_le.pagamento == "debito" ? "selected" : "") + '>Cartão de Débito</option>' +
		'<option value="dinheiro" ' + (pessoa_le.pagamento == "dinheiro" ? "selected" : "") + '>Dinheiro</option>' +
		'</select>' +
		'<p class="alert alert-danger alert-hide alert-pagamento" id="alert-pagamento">Campo Obrigatório</p>' +
		'</div>' +
		'<div class="form-group" style="display: none" id="troco-input">' +
		'<label for="troco">Precisa de troco? </label>' +
		'<div class="input-group mb-3">' +
		'<div class="input-group-prepend">' +
		'<span class="input-group-text" id="basic-addon1">R$ </span>' +
		'</div>' +
		'<input type="text" class="form-control" name="troco" id="troco" onkeyup="formatarMoeda()" value="' + (pessoa_le.troco == '0,00' ? '0,00' : pessoa_le.troco) + '" placeholder="0,00">' +
		'</div>' +
		'</div>' +
		'<div class="form-group">' +
		'<a href="javascript:;" onclick="enviar()" class="btn btn-go btn-block">Enviar pedido</a>' +
		'</div>' +
		'</div>' +
		'</div>';


	mascaraTelefone()

}



function mascaraTelefone() {
	var campo = document.getElementById('telefone')

	function trata(valor, isOnBlur) {

		valor = valor.replace(/\D/g, "");
		valor = valor.replace(/^(\d{2})(\d)/g, "($1)$2");

		if (isOnBlur) {

			valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
		} else {

			valor = valor.replace(/(\d)(\d{3})$/, "$1-$2");
		}
		return valor;
	}

	campo.onkeypress = function (evt) {

		var code = (window.event) ? window.event.keyCode : evt.which;
		var valor = this.value

		if (code > 57 || (code < 48 && code != 8)) {
			return false;
		} else {
			this.value = trata(valor, false);
		}
	}

	campo.onblur = function () {
		var valor = this.value;
		if (valor.length < 13) {
			this.value = ""
		} else {
			this.value = trata(this.value, true);
		}
	}

	campo.maxLength = 14;
}

function mostrarTroco(metodoPagamento) {
	if (metodoPagamento == 'dinheiro') {
		document.getElementById('troco-input').style.display = "block";
	} else {
		document.getElementById('troco-input').style.display = "none";
	}
}

function formatarMoeda() {
	var elemento = document.getElementById('troco');
	var valor = elemento.value;

	valor = valor + '';
	valor = parseInt(valor.replace(/[\D]+/g, ''));
	valor = valor + '';
	valor = valor.replace(/([0-9]{2})$/g, ",$1");

	if (valor.length > 6) {
		valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
	}

	elemento.value = valor;
}



function verificaCampos() {
	if (document.getElementById('nome').value == '') {
		document.getElementById('alert-nome').style.display = 'block';
	} else {
		document.getElementById('alert-nome').style.display = 'none';
	}

	if (document.getElementById('telefone').value == '') {
		document.getElementById('alert-telefone').style.display = 'block';
	} else {
		document.getElementById('alert-telefone').style.display = 'none';
	}

	if (document.getElementById('rua').value == '') {
		document.getElementById('alert-rua').style.display = 'block';
	} else {
		document.getElementById('alert-rua').style.display = 'none';
	}

	if (document.getElementById('numero').value == '') {
		document.getElementById('alert-numero').style.display = 'block';
	} else {
		document.getElementById('alert-numero').style.display = 'none';
	}

	if (document.getElementById('referencia').value == '') {
		document.getElementById('alert-referencia').style.display = 'block';
	} else {
		document.getElementById('alert-referencia').style.display = 'none';
	}

	if (document.getElementById('bairro').value == '') {
		document.getElementById('alert-bairro').style.display = 'block';
	} else {
		document.getElementById('alert-bairro').style.display = 'none';
	}

	var e = document.getElementById('pagamento');
	var meio_pagamento = e.options[e.selectedIndex].value;

	if (meio_pagamento == '') {
		document.getElementById('alert-pagamento').style.display = 'block';
	} else {
		document.getElementById('alert-pagamento').style.display = 'none';
	}

	// verifica se todos os campos obrigatorios foram preenchidos
	if (
		document.getElementById('nome').value == '' ||
		document.getElementById('telefone').value == '' ||
		document.getElementById('rua').value == '' ||
		document.getElementById('numero').value == '' ||
		document.getElementById('referencia').value == '' ||
		document.getElementById('bairro').value == '' ||
		meio_pagamento == ''
	) {
		return false
	} else {
		return true
	}
}

function registraUsuario() {
	console.log(123)
	var meio_pg = document.getElementById('pagamento');
	var meio_pagamento = meio_pg.options[meio_pg.selectedIndex].value;


	var add = {
		observacao: document.getElementById('observacao').value,
		nome: document.getElementById('nome').value,
		telefone: document.getElementById('telefone').value,
		rua: document.getElementById('rua').value,
		numero: document.getElementById('numero').value,
		complemento: document.getElementById('complemento').value,
		referencia: document.getElementById('referencia').value,
		bairro: document.getElementById('bairro').value,
		pagamento: meio_pagamento,
		troco: document.getElementById('troco').value,
	}

	console.log('document.getElementByI');
	console.log(meio_pagamento);
	localStorage.setItem("pessoa_le", JSON.stringify(add))
}



function criaTextoWP() {

	if (localStorage.hasOwnProperty("carrinho_le")) {
		var carrinho_le = JSON.parse(localStorage.getItem("carrinho_le"))
	}

	if (localStorage.hasOwnProperty("pessoa_le")) {
		var pessoa_le = JSON.parse(localStorage.getItem("pessoa_le"))
	}

	var itens = ''
	var total = parseFloat('0.00');

	for (let i = 0; i < carrinho_le.length; i++) {
		total += parseFloat(carrinho_le[i].produto_valor);
		itens += '*Produto:* ' + carrinho_le[i].produto_nome + '\n' +
			'*Tamanho:* ' + carrinho_le[i].tamanho_nome + '\n' +
			'*Valor:* R$ ' + parseFloat(carrinho_le[i].produto_valor).toLocaleString('pt-br') + '\n' +
			'\n';
	}

	if (valor_entrega() != '0.00') {
		var total_e_entrega = total + parseFloat(valor_entrega())
		var text_if_entrega = ' *(já com valor da entrega)* '
	} else {
		var total_e_entrega = total
		var text_if_entrega = ''
	}

	itens += '*Observações:* ' + pessoa_le.observacao + '\n\n';

	// pessoa
	let text = '*Pedido:*\n' + itens + '*Total:* R$ ' + parseFloat(total_e_entrega).toLocaleString('pt-br') + text_if_entrega + '\n\n\n' +
		'*Quem pediu:*\n' +
		'*Nome:* ' + pessoa_le.nome + '\n' +
		'*Telefone:* ' + pessoa_le.telefone + '\n\n' +
		'*Endereço:* ' + pessoa_le.rua + ', ' + pessoa_le.numero + ',' + pessoa_le.complemento + ', (' + pessoa_le.referencia + '), ' + pessoa_le.bairro + '\n\n';
	if (pessoa_le.pagamento == 'dinheiro') {
		text += '*Pagamento:* ' + pessoa_le.pagamento + '\n' +
			'*Troco para:* R$ ' + pessoa_le.troco + '\n';
	} else {
		text += '*Pagamento:* Cartão de ' + pessoa_le.pagamento + '\n';
	}


	let numero_loja = telefone_loja();

	var encoded = encodeURI(text)
	url = 'https://wa.me/55' + numero_loja + '?text=' + encoded
	var win = window.open(url, '_blank');
	win.focus();
}


function enviar() {
	if (verificaCampos() == true) {
		registraUsuario()
		criaTextoWP()
	}
}




// chama para montar o cardápio no HTML
montaCardapio();

// cria o box do carrinho
criaCarrinho();
// adiciona os itens no carrinho caso o usuário sai do menu e volte
atualizaItemCarrinho();