/*"export default" → serve como um tipo de importação.
*Classes → É um tamplate (modelo) para a criação de um objeto.
*Criação de classe sempre com letra maiúscula (Paskal case) */
export class Animal {

    /* Atributos (Adjetivos) →  são os elementos que definem a estrutura de uma classe.
     atributos privados → '#' torna o atributo imutável de forma externa.  */
    #nome = ''
    #especie = ''
    #familia
    #nascimento
    #peso
    #metrica = {}

    /* Construtor → O construtor é um método especial para criar 
        e inicializar um objeto criado a partir de uma classe. */
    constructor(nome, especie) {
        /*se refere ao objeto que está sendo referenciado em um 
        determinado contexto ou escopo. */
        this.#nome = nome
        this.#especie = especie
       // Document.write não funciona com módulos.
       // document.write('Criando um bicho chamado ' + this.#nome + '<br>')
    }

    // Métodos (verbos) →  são "funções" que pertencem a uma classe.
    alimentacao() { }

    vacinar() { }

    /* Getter → Encapsulamento. A sintaxe de get associa uma propriedade de um objeto a uma função
     que será chamada quando tal propriedade é acessada.
     *
     * Get → Get serve para ler o atributo e exportar. 
     */
    get nome() {
        return this.#nome
    }

    set nome(nomea) {
        /* Setter → Getters e setters são usados para proteger seus dados,
         especialmente na criação de classes 
         *
         * Set → receber dados do atributo e armazenar.
         * */
        this.#nome = nomea.trim()
    }
}