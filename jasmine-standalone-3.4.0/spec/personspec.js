describe("Person", () => {
    it("should show person's details", () => {
        let person = new Person ("Leo", 25, "male", ["drawing", "coding", "reading", "playing FIFA"]);
        let greeting = person.hello();
        expect(greeting).toBe(`Hi! my name is Leo, I am a 25 year old male who's interests are drawing,coding,reading,playing FIFA  `)
    });
    it("should show person's details", () => {
      let person = new Person ("Gracia", 25, "female", ["travelling", "dancing", "reading", "cooking"]);
      let greeting = person.hello();
      expect(greeting).toBe(`Hi! my name is Gracia, I am a 25 year old female who's interests are travelling,dancing,reading,cooking  `)
  });
});
