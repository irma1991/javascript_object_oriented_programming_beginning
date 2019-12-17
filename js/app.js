// var person = {
//     name: ['Bob', 'Smith'],
//     age: 32,
//     gender: 'male',
//     interests: ['music', 'skiing'],
//     // this - referencinam i objekto savybe
//     description: function() {
//         console.log(this.name[0] + " " + this.name[1] + " is " + this.age + " years old. He likes " +
//         this.interests[0] + " and " + this.interests[1] + ".")
//     }
// };
//
// person.description()
//
// person.age = 25; // priskyrimas
//
// console.log(person.age)
//
// // konstruktorius
// function Knyga(pavadinimas, isbn){
//     this.pavadinimas = pavadinimas;
//     this.isbn = isbn;
//     this.showInfo =  function(){
//         return pavadinimas + " " + isbn;
//     }
// }
//
// // kuriam objekta
// const knyga1 = new Knyga('JS', '123456789');
// console.log(knyga1.showInfo());
//
// // paziurim prototipa
// console.log(knyga1.__proto__);

///// UZDUOTIS

function Skaitytojas(vardas, pavarde, koretelesNr, adresas, telefonas){
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.koretelesNr = koretelesNr;
    this.adresas = adresas;
    this.telefonas = telefonas;
    this.infoApieSkaitytoja = function (){
        return vardas+ " " + pavarde + " " + koretelesNr + " " + adresas
            + " " + telefonas;
    }
    this.paimtosKnygos = [];
    this.pridetiKnyga = function(knygosPavadinimas, knygosIsbn){
        this.paimtosKnygos.push({knyga: knygosPavadinimas, isbn: knygosIsbn})
    }
    this.rodytiKnyga = function(){
        for(let knygos in this.paimtosKnygos){
            console.log(this.paimtosKnygos[knygos])
            for(let knyga of knygos){
                console.log(this.paimtosKnygos[knygos][knyga])
            }
        }
    }
}

const skaitytojas1 = new Skaitytojas('Jonas', 'Jonaitis', '123', 'Kaunas', '869541365');
const skaitytojas2 = new Skaitytojas('Petras', 'Petraitis', '125', 'Vilnius', '869745631');
const skaitytojas3 = new Skaitytojas('Antanas', 'Antanaitis', '127', 'Klaipeda', '845967523');

// pirmas skaitytojas
skaitytojas1.infoApieSkaitytoja();
skaitytojas1.pridetiKnyga('Istorija', '1234556');
skaitytojas1.pridetiKnyga('Istorija2', '1234556');
skaitytojas1.pridetiKnyga('Istorija3', '1234556');
skaitytojas1.rodytiKnyga();

// antras skaitytojas
skaitytojas2.infoApieSkaitytoja();
skaitytojas2.pridetiKnyga('Menas', '1456987');
skaitytojas2.pridetiKnyga('Menas3', '1456987');
skaitytojas2.pridetiKnyga('Menas3', '1456987');
skaitytojas2.rodytiKnyga();
//

// trecias skaitytojas
skaitytojas3.infoApieSkaitytoja();
skaitytojas3.pridetiKnyga('Biologija', '1456937');
skaitytojas3.pridetiKnyga('Biologija2', '1456937');
skaitytojas3.pridetiKnyga('Biologija3', '1456937');
skaitytojas3.rodytiKnyga();


// // PAVELDEJIMAS
// function Skaitytojas(vardas, pavarde, koretelesNr, adresas, telefonas){
//     this.vardas = vardas;
//     this.pavarde = pavarde;
//     this.koretelesNr = koretelesNr;
//     this.adresas = adresas;
//     this.telefonas = telefonas;
//     this.rodyti = function(){
//         // console.log(vardas, pavarde, koretelesNr, adresas, telefonas)
//     }
// }
//
// function vipSkaitytojas(vardas, pavarde, koretelesNr, adresas, telefonas){
//     Skaitytojas.call(this, vardas, pavarde, koretelesNr, adresas, telefonas)
//     this.vipSkaitytojas = vipSkaitytojas;
// }
//
// const vipSkaitytojas1 = new vipSkaitytojas('Jonas', 'Jonaitis', '123', 'Kaunas', '865412396', true);
// console.log(vipSkaitytojas1)

// ECMAScript uzrasymas

// class Skaitytojas{
//     constructor (vardas, pavarde, kortelesNr, adresas, telefonas){
//         this.vardas = vardas;
//         this.pavarde = pavarde;
//         this.kortelesNr = kortelesNr;
//         this.adresas = adresas;
//         this.telefonas = telefonas;
//         }
//     }


