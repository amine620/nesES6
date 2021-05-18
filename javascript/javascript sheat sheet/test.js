// //----------------------------exercice 1------------------------

// // Ecrire un programme javascript qui demande l’âge d’un enfant à l’utilisateur. Ensuite, il l’informe de sa catégorie :
// // "Poussin" de 6 à 7 ans
// // "Pupille" de 8 à 9 ans
// // "Minime" de 10 à 11 ans
// // "Cadet" après 12 ans

// //write your code here

// const age =prompt("donner l'age");
// if(age>=12)
// {
//     alert('cadet')
// }
// else if(age>=10)
// {
//     alert('minime')
// }
// else if(age>=8)
// {
//     alert('pupille')
// }
// else if(age>=6)
// {
//     alert('poussin')
// }

// //----------------------------exercice 2------------------------
// // Ecrire un programme javascript qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10.

// //write your code here

// let number =prompt('donner un nombre')
// while (number>20 || number <10) {
//     if(number>20)
//     {
//         alert('plus petit')

//     }
//     else {
//         alert('plus grand')

//     }
//     number=prompt('donner un nombre entre 10 et 20')

// }

// //----------------------------exercice 3------------------------
// // Ecrire un programme javascript qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.

// //write your code here

// const number =parseInt(prompt('donner un nombre de départ'))

// for (let i = 1; i <=10; i++) {

//     document.write('<br>')
//     document.write(number+i)
// }

//method 2
// const Stop=number+10
// for (let i = number+1; i <= Stop; i++) {

//     document.write(i+'<br>')
// }

// //----------------------------exercice 4------------------------
// // Ecrire programme javascript qui demande un nombre de départ, et qui calcule la somme des entiers jusqu’à ce nombre. Par exemple, si l’on entre 5, le programme doit calculer : 1+2+3+4+5

// //write your code here

// const number =parseInt(prompt('donner un nombre de départ'))
// let sum=0
// for (let i = 1; i <=number; i++) {

//   sum=sum+i

// }
// document.write(sum)

// //----------------------------exercice 5------------------------
// // Ecrire un programme javascript qui demande un nombre de départ, et qui calcule sa factorielle.
// // NB : la factorielle de 8, notée 8 !, vaut
// // 1 x 2 x 3 x 4 x 5 x 6 x 7 x 8

// //write your code here
//  const number =parseInt(prompt('donner un nombre de départ'))
// let fa=1
//  if(number==0)
//  {
//      document.write('factoriel est 1')
//  }
//  else{
//      for (let i = 1; i <=number; i++) {

//          fa=fa*i
//      }
//      document.write(fa)
//  }

// //----------------------------exercice  insérer dans un tableau 6------------------------

// // Ecrire un un programme javascript qui demande successivement 20 nombres à l’utilisateur, et qui lui dise ensuite quel était le plus grand parmi ces 20 nombres :
// // Entrez le nombre numéro 1 : 12
// // Entrez le nombre numéro 2 : 14
// // etc.
// // Entrez le nombre numéro 20 : 6
// // Le plus grand de ces nombres est  : 14
// // Modifiez ensuite l’algorithme pour que le programme affiche de surcroît en quelle position avait été saisie ce nombre :
// // C’était le nombre numéro 2

// //write your code here

//  const students=[]
//  let note
//  let max=0
//  let posit
//  for (let i = 0; i < 5; i++) {

//     note=parseInt(prompt('donner la note numéro : '+i+1))
//     //to add value in the end
//     // students.push(note)
//     // insert in table with index
//     students[i]=note
//     if(students[i]>max)
//     {
//         max=students[i]
//         posit=i
//     }
//  }
//  document.write('le max est : '+max)
//  document.write('la position est  : '+Number(posit+1))

// // PART2
// // Réécrire le programme précédent, mais cette fois-ci on ne connaît pas d’avance combien l’utilisateur souhaite saisir de nombres. La saisie des nombres s’arrête lorsque l’utilisateur entre un zéro.

// //write your code here

const students = [];
let note;
let max = 0;
let posit;
let i = 0;

// do {
//     note=parseInt(prompt('donner la note numéro : '+i+1))

//         students[i]=note
//         if(students[i]>max)
//         {
//             max=students[i]
//             posit=i
//         }
//         i++

// } while (note!=0);

// if(max!=0)
// {
//     document.write('le max est : '+max)
//     document.write('la position est  : '+Number(posit+1))
// }

// same as above with ternary operator ?

// max!=0 ? document.write('le max est : '+max+" la position est : "+Number(posit+1)) : ""

// //----------------------------exercice 7------------------------

// // écrivez un programme javascript qui nous permet de définir 2 nombres puis la commande invite nous montre le menu contenant le message suivant
// // choisir un numéro
// // 1: pour la division
// // 2: pour la somme
// // 3: pour multiplier
// // 4: pour soustraction

// //write your code here

// let nb1 = parseInt(prompt("donner le nombre 1: "));
// let nb2 = parseInt(prompt("donner le nombre 2: "));

// let choix = parseInt(
//   prompt(
//     "donner votre choix \n 1:pour la division \n 2: pour la somme \n 3: multiplication \n 4: soustraction"
//   )
// );
// switch (choix) {
//   case 1:
//     document.write(nb1 / nb2);

//     break;
//   case 2:
//     document.write(nb1 + nb2);

//     break;
//   case 3:
//     document.write(nb1 * nb2);

//     break;
//   case 4:
//     document.write(nb1 - nb2);

//     break;

//   default:
//     break;
// }

// //----------------------------exercice 8------------------------
// // Un programme pour trouver les années que le 1er janvier est un dimanche entre 2014 et 2050.

// //write your code here

// let date

// for (let année = 2014; année <= 2050; année++) {
//     date=new Date(année+'-01-01')
//     if(date.getDay()==0)
//     {
//         document.write('<br>')
//         document.write(année)
//     }

    
// }

// //----------------------------exercice 9------------------------
// // Écrivez un programme JavaScript où le programme prend un entier aléatoire
// //  entre 1 et 10, l'utilisateur est alors invité à entrer un nombre de
// // supposition. Si l'entrée utilisateur correspond à un numéro de supposition, le programme affichera
// //  un message "Good Work" sinon affichera un message "Not matched"

// //write your code here

// let random= Math.floor(Math.random()*10)
// let number=parseInt(prompt('donner un nombre entre 1 et 10'))

// if(number==random)
// {
//     document.write('good work')
// }
// else{
//     document.write('not matched')
// }
// document.write(random)


// //----------------------------exercice 10------------------------

// //écrire un programme qui permet à l'utilisateur d'insérer un nombre de secondes
// // puis de savoir combien d'heures et de minutes et de secondes de ce nombre

// //write your code here

let hours
let minuts
let seconds

let number_of_seconds=parseInt(prompt('give me the seconds'))

hours=Math.floor(number_of_seconds/3600) 
minuts=Math.floor((number_of_seconds%3600)/60)
// seconds =number_of_seconds-(hours*3600)-(minuts*60)
seconds=Math.floor(((number_of_seconds%3600)%60))
document.write(hours,minuts,seconds)

document.write(1/60)