# Exercício 4 - Cálculo de Frete
Em todos os e-commerces, o usuário pode criar um carrinho de compras, adicionar um produto e calcular o valor do frete para a entrega.

O valor do frete é calculado a partir do CEP do usuário (destinatário), e geralmente é provido pelos serviços de fretamento (correios ou particular), muitas vezes sendo invocado uma API que, dado o CEP (dentre outros dados), traz o valor do frete.

Desenvolva um sistema simplificado do carrinho, com os seguintes requisitos:

- Um produto possui um nome e um valor
- Um carrinho recebe um conjunto de produtos e a quantidade de itens de cada produto
- Um carrinho pertence à um usuário, que tem nome e seu endereço de entrega representado por um CEP
- Um serviço que recebe o carrinho, e retorna o valor final para o usuário

Esse serviço
- Faz a soma total de valores de todos os produtos do carrinho
- Caso o valor seja < $100,00, o sistema requisita para um serviço externo o valor do frete de acordo com o CEP do dono do carrinho
Retorna o valor final do carrinho (com ou sem frete)

## Sugestão de solução:
- Crie a estrutura necessária para o Carrinho
	- Usuário (nome e CEP)
	- Produto (nome e Valor)
	- Carrinho (Usuário e lista de Produtos)
- Faça o carrinho responder o valor total das compras - com testes
	- Pergunte-se:
		- Qual o valor se ele estiver vazio?
		- E se eu adicionar novos produtos?
		- E se eu adicionar produtos que já tinham sido adicionados?
		- E como eu removo o produto do carrinho?
		- E se eu adicionar dois produtos ao mesmo tempo?
		- E se eu adicionar ou remover a quantidade de produtos no carrinho?
		- E se eu zerar a quantidade de produtos do carrinho?
	- Não há requisitos formais de como um carrinho deve funcionar, ou suas interfaces
	- O carrinho deve ter um método final, que retorne o valor total do carrinho
- Criem uma interface que representará o Serviço do Correios
	- Ele terá apenas um método registrado - recebe o CEP e retorna um valor de Frete
	- Não precisamos da implementação real (no momento, e para esse exercício)
- Crie um classe que representará o serviço de cálculo
	- Ela receberá em sua construção uma instância da interface do serviço de Correios (injeção de dependência)
	- Ela terá um método que recebe um carrinho como parâmetro, e retorna o valor total
- Crie os testes antes da implementação
	- Qual o valor total, caso a soma total dos produtos do carrinho (feito anteriormente e com seus testes já funcionando) seja< $100?
		- Eu preciso invocar o método real do Carrinho?
		- Como eu simulo o retorno do serviço do Correios?
		- Como eu garanto que a lógica decisória está correta?
		- Como eu garanto que eu chamei apenas uma única vez o serviço do correio?
	- E se o valor for >= $100?
		- Qual será o valor final do cálculo?
		- Como eu garanto que eu não precisei chamar os serviços do correio?
	- Crie os testes usando Mocks, mockando tanto o Carrinho quanto o Serviço de Correios
		- A implementação do serviço que calcula valor total com ou sem frete deve ser concreta

## Definition of Done
Todos os requisitos devem estar cobertos por testes automatizados.

Deve existir pelo menos uma classe de testes para o serviço, e esse deverá cobrir todas as variações das regras do serviço. Além do mais, a comunicação com o serviço do correio deverá ser através de mocks.
