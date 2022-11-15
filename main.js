const inventors = [
    {first: 'Juan', last: 'bernal', year: 1500, passed: 1234},
    {first: 'David', last: 'otalora', year: 1990, passed: 1324},
    {first: 'Rodrigo', last: 'niño', year: 1994, passed: 4321},
    {first: 'Andres', last: 'romero', year: 1999, passed: 2134},
    {first: 'Juan', last: 'bernal', year: 1890, passed: 1234},
];

const people = ['bernal, juan', 'otalora, david', 'ortiz, armando', 'martinez, sandra', 'nayibe, restrepo',
'ramirez, sebastian', 'paredes, camilo', 'vargas,paula', 'calderon, daniel',
'morera, camila'];

const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600)); 

console.table (fifteen);

const fullNames = inventors.map(inventor => `${inventor.first}  ${inventor.last}`);
console.table(fullNames);

const ordered = inventors.sort(function(a , b){
    if(a.year > b.year) {
        return 1;
    }
    else {
        return -1;
    }
});
console.table(ordered)
