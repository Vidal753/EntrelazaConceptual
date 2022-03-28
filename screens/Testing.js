const choices = {
  id: [],
  choice: [],
};

const arrayChoices = ['si', 'no', 'no', 'si', 'talvez'];

for (let i = 0; i < arrayChoices.length; i++) {
  choices.choice[i] = arrayChoices[i];
}

console.log(choices);
