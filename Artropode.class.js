// Importa a classe 'pai'.
import { Animal } from "./Animal.class.js";
// Cria a classe 'Artropode' que extende 'Animal' e a exporta.
export class Artropode extends Animal {

    // Atributos
    #especie
    #patas
    #expecVida
    #habitat
    // Método construtor.
    constructor(nome, especie, patas) {

        // Eleva os parâmetros para a classe 'pai'.
        super(nome, especie, especie)
          // Trata os outros parâmetros.
        this.#patas = patas
        this.#especie = especie
    }
    get especie() {
        // Getters → Encapsulamento
        return this.#patas
    }

    get patas() {
        return this.#patas
    }

    get expecVida() {
        return this.#expecVida
    }

    get habitat() {
        return this.#habitat
    }

    // Setters
    set especie(especie) {
        this.#especie = especie
    }

    set patas(patas) {
        this.#patas = patas
    }

    set expecVida(expecVida) {
        this.#expecVida = expecVida
    }

    set habitat(habitat) {
        this.#habitat = habitat
    }


}