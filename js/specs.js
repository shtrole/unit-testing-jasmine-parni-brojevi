describe("Testiranje da li funkcija vraća niz parnih broja", function() { 

    it("treba da niz ima samo sa parne brojeve", function() {       
        const rezultat =  vracaParne([1, 2, 4, 5, 11, 33, 44,68]);
        let nadjenNeparni = false;
        for (let i = 0; i<rezultat.length; i++){
            if (rezultat[i] % 2 !== 0)
            nadjenNeparni = true;
            break;
        }
        expect(nadjenNeparni).toBe(false); 
      });
 
  });

      