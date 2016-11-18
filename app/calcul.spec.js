

describe('Calcul', () =>{
    const underTest = new Calcul();
    it('should return 10 when you pass 5 and 5',()=>{
        const resultat =underTest.additionner(5,5);
        expect(resultat).toBe(10);
    })
})