# Javascript-Avancado-GamaAcademy-HSM

1 - Revisão JavaScript Básico
instalação do Node.js
	execuar no terminal node .\exercicio-14.js
	ou instalar a extensão Code Runner
----------------------------------------------------------------------------------------------------
2 - Tamplete String
O ES6 também trouxe uma forma menos verbosa de escrever funções
interpolação 
unir strings com expressões javascript, o Template String ou Template Literals
`${}`
----------------------------------------------------------------------------------------------------
3 - Operador Ternario
é uma alternativa ao if/else
x % 2 === 0 ? 'Par' : 'Impar'
----------------------------------------------------------------------------------------------------
4 - Arrow functions
sintaxe que lembra uma flecha: () =>
----------------------------------------------------------------------------------------------------
5 - Arrays, Spread & Metodos
Um array (ou lista) permite armazenar um conjunto de dados e atribuí-los a uma variável
Spread
	é representado por três pontos e serve para copiarmos arrays
Métodos de iteração
	filter retorna um novo array com os elementos filtrados.
	find retorna o primeiro elemento que achar igual ao elemento passado por parâmetro.
	map retorna um novo array sem alterar o array original, criando uma cópia com as alterações que desejamos.
	sort ordena o array.
	reduce reduz o array para um único valor mediante a uma operação matemática.
----------------------------------------------------------------------------------------------------
6 - Objetos
Objeto é um tipo de dado que contém uma coleção de propriedades organizadas em pares de chave (ou nome) e valor
	chave : valor
sendo o valor qualquer tipo de dado (número, texto, função ou até mesmo outro objeto).
Para criar um novo Objeto, podemos atribuir a uma variável uma lista de elementos entre chaves, separados por vírgula e com a notação de chave : valor
Também é possível utilizando a palavra reservada new ou a partir de uma função.
----------------------------------------------------------------------------------------------------
7 - SPA, PWA e WebComponents
SPA - Single page applications são aplicações que concentram seu conteúdo em apenas uma página. 
	Ela possui o super poder de atualizar apenas uma parte da página para renderizar novos dados, em vez de atualizar a página inteira
	Diversas ferramentas como frameworks e bibliotecas facilitam a criação de SPA. 
		Alguns dos mais conhecidos são: Angular, React e Vue.
PWA - Progressive Web Apps são aplicações híbridas entre web e mobile. 
	Ou seja, permite que ao acessar um site, a pessoa usuária possa ter uma versão instalada em seu celular com a mesma experiência da web, 
	porém com as informações do browser removidas.
WebComponents - Os Web Components são uma forma de criar componentes reutilizáveis para a Web nativamente, utilizando apenas HTML, CSS e JavaScript. 
	E carregam os benefícios de códigos menores, modulares e reutilizáveis.
	Os Web Components possuem quatro fundamentos:
		Custom Elements: Permite a criação de novas tags HTML.
		Shadow DOM: Permite esconder elementos do DOM. 
			Eles são renderizados pelo navegador e não são acessíveis pelas formas convencionais (document.querySelector).
		HTML Templates: Permite declarar fragmentos de HTML para serem utilizados como modelo. Eles não são renderizados pelo navegador.
		HTML Imports: Permite importar páginas HTML completas, incluindo o JavaScript e CSS embutidos nelas.
----------------------------------------------------------------------------------------------------
8 - Projeto
Passo 0 - Criaro os arquivos database.js e app.js
Passo 1 - No arquivo database crie e exporte a sua base no formato array de objetos contendo alguns dos livros que você já leu ou gostaria de ler com os seguintes campos:
	nome: string
	categoria: string
	autor: string
	paginas: number
	recomenda: boolean
	leu: boolean
Passo 2: npm init -y 
	**vai ser criado o arquivo package.json
	** dentro do package.json, deixar "scripts": {"start": "node app.js"},
Passo 3: npm i --save readline-sync
Passo 4: criar .gitignore
	** node_modules
Passo 5 - No arquivo app.js desenvolva sua lógica 
Passo 6: Rodar projeto npm start