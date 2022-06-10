# HTML
- HyperText Markup Language
    - HyperText: (Hiper Texto) Direcionáveis
    - Markup: (Marcação) Tags, Atributos
    - Language: (Linguagem) Maneira correta de escrever


# CSS
- Apresentação visual para o cliente
- Estilos para o HTML
- Cascading Style Sheets (Folha de Estilo em Cascata)
    - Declaração
        - Seletor
        - Propriedade e Valor
    - Conceitos
        - Cascata
        - Especificidade
        - Box Model


# JS (JAVASCRIP)
- Linguagem de programação
    - Interpretada e executada pelos navegadores
- A inteligência da tríade
    - HTML é a estrutura, CSS é a beleza e JS é a inteligência
- Não é JAVA
    - Apesar do nome ser semelhante, são linguagens diferentes
- Por que JS?
    - Aplicativos
        - Para WEB, Desktop (Electron) e Mobile (React Native)
    - Empresas famosas
        - Instagram, Google, Netflix, TikTok...
    - Moderna e Viva
        - Comunidade e linguagem que cresce cada vez mais

**Sintaxe**
*É presente em toda linguagem e é importante para a comunicação!*

const mensagem = "Bom te ver aqui! "
alert(mensagem + (10 * 100) + " abraços!")
// Bom te ver aqui! 1000 abraços!

**Executando JavaScript**
- De maneira imediata
    - No Browser a partir da ferramenta *DevTools* apertando o atalho *F12* no teclado
    - Plataformas online (codepen.io, fronteditor.dev)
- Arquivos no computador (exemplo abaixo)
    **EM UM ARQUIVO index.html**
    *Executa o JavaScript direto no .html*
    <script> alert("Olá!")</script>
    *Importa um arquivo .js no seu .html*
    <script src="./script.js"></script>

- Variáveis
<script>
    - let estaChovendo = true
    - const meuNome = "Elias"
</script>

- Tipos de Dados
    - String
    - ""
    - ''

- Number (Número)
    - 12 - Integer (Inteiro) [+ -]
    - 3.2 - Float [+ -]

- Boolean (Boleano)
    - true (verdadeiro) ou false (falso)

- Undefined (Indefinido)

- Operadores
    - Atribuição (ex: =)
    - Atribui valor

- Aritméticos
    - Exemplos: adição (+), subtração (-), multiplicação (*) e divisão (/)
    - Calculos matemáticos simples

- Concatenação de String (+)

- Comparação (ex: > < ==)
    - Transforma a expressão em true ou false
<script>
    const maiorQue = 1 > 2 // false
    const igualA = 1 == 1 // true
</script>

- Condicional (if/else)

- Estrutura de dados
    - Array, Vetor, Lista
<script>
    //array -----         0     1     2  3
    const temperaturas = [23.3, 32.2, 1, 5]
</script>
    - Object (Objeto)
<script>
    const pessoa = {
        nome: "Elias",
        idade: 18,
        filhos: ["K", "E", "J", "L", "G"]
    }
</script>

- Function (Função)
    - Criação:
<script>
    function nomeDaFuncao() {
        console.log('código dentro da função')
    }
</script>
    - Execução:
<script>
    nomeDaFuncao()
</script>
    - Parâmetros
<script>
    function soma(a, b) {
        console.log(a + b)
    }
    soma(31, 45)
    soma(90, 54)
</script>
    - Retorno
<script>
    function soma(a, b) {
        return a + b
    }
    const multiplica = soma(2, 2) * 4
</script>

- Extensões de linguagem (ex.: Math, Date...)
<script>
    Math.ramdom()
    Math.floor(1.5)
    Math.ceil(1.5)
</script>

- DOM (Document Object Model)
<script>
    // Janela
    window.alert("Alerta!")
    // Documento
    document.write("texto")
    // Manipular Elementos
    document.documentElement.style.background = "white"
</script>