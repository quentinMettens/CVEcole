var spanAnim = document.getElementById('header-reseaux-sociaux-h2-txt');
var mot = ['python.','C#.','cybersécurité.','linux.', 'windows server.'];
var temp = [];
var i=0;
var j=0;
var deleteLetter = false;
function typewriter() {
    spanAnim.innerHTML = temp.join('');
    if (i<mot.length){
        if(mot[i] == 'python.'){
            $(spanAnim).css('color','rgb(3, 56, 3)');
            $(spanAnim).css('border-right','2px solid rgb(3, 56, 3)');
        }
        if(mot[i] == 'C#.'){
            $(spanAnim).css('color','purple');
            $(spanAnim).css('border-right','2px solid purple');
        }
        if(mot[i] == 'cybersécurité.'){
            $(spanAnim).css('color','red');
            $(spanAnim).css('border-right','2px solid red');
        }
        if(mot[i] == 'linux.'){
            $(spanAnim).css('color','goldenrod');
            $(spanAnim).css('border-right',' 2px solid goldenrod');
        }
        if(mot[i] == 'windows server.'){
            $(spanAnim).css('color','rgb(2, 48, 109)');
            $(spanAnim).css('border-right',' 2px solid rgb(2, 48, 109)');
        }
        if(!deleteLetter && j<=mot[i].length){
            //Rajoute une lettre 
            temp.push(mot[i][j]);
            j++;
        }

        if(j == mot[i].length){
            //Lorsque j = nombre de lettre dans le mot, active le delete
            deleteLetter=true;
        }
        if(deleteLetter&& j <= mot[i].length){
            /*Lorsque delete=true et j = nombre de lettre dans le mot,
            supprime le dernier élement du tableau et modifie sa longueur*/
            temp.pop(mot[i][j]);
            j--;
        }
        if(deleteLetter && j==0){
            /*Redéfini la valeur courante à nul et lorsque i a atteint le dernier
            mot, il recommence depuis le début */
            temp=[];
            deleteLetter=false;
            i++;
            if(i == mot.length){
                i=0;
            }
        
        }
    }
    // Execute la fonction typewriter() toute les 300ms
    setTimeout(typewriter, 250);

    
}

$(document).ready(function(){
    typewriter()
});

