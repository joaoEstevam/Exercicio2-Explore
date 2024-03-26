const students = [
    {
        name:"João",
        note1: 7,
        note2: 6
    },
    {
        name:"Ana",
        note1: 6,
        note2: 3
    },
    {
        name:"Pedro",
        note1: 9,
        note2: 5.5
    },
    {
        name:"Maria",
        note1: 9.5,
        note2: 10
    }
]

function media(note1,note2){
    avarege= (note1 + note2)/2
    return avarege;
}

for(let index=0; index < students.length;index++){
    media(students[index].note1, students[index].note2)

    if(avarege > 7){
    alert("Parabens, " + students[index].name +" você foi aprovado\n Sua media foi: "+ avarege)
    }else{
        alert("Não foi dessa vez, na proxima você consegue\n Sua media foi: "+ avarege)
    }     
}
