class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    atacar() {
        let ataque
        switch (this.type) {
            case "mago":
                ataque = "magia"
                break;
            case "guerreiro":
                ataque = "espada"
                break;
            case "monge":
                ataque = "artes Marciais"
                break;
            case "ninja":
                ataque = "shuriken"
                break;
        }
        console.log(`${this.type} atacou usando ${ataque}`)
    }
}

const hero1 = new hero("rogerio", 20, "mago")
const hero2 = new hero("alberto", 35, "guerreiro")
const hero3 = new hero("maria", 18, "monge")
const hero4 = new hero("jose", 25, "ninja")

hero1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()