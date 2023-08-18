// services/questions.js

// Sample fixed array of questions
const questions = [
  {
    _id: "64ba88e05022ab76db31a4e3",
    category: "Road Signs",
    question: "What does this sign indicate?",
    choices: ["Merge", "No Passing Zone", "Stop"],
    correct_answer: "Stop",
    organization_id: "64b694a6b1bd0c3120217e72",
    picture_url: "https://my-bucket-22c031a8-d9af-48fe-a2dd-b91b374c3aef.s3.amazonaws.com/org-64b694a6b1bd0c3120217e72-image-a461fabc-39dd-4dd8-8f1f-47d09a44ff5b",
    question_number: 1,
    state: null
  },
  {
    _id: "7890ab0123456789cd456ef1",
    category: "Animals",
    question: "What is the largest mammal?",
    choices: ["Elephant", "Blue Whale", "Giraffe"],
    correct_answer: "Blue Whale",
    organization_id: "efg1234567hij890klm1n2op",
    picture_url: "https://my-bucket-22c031a8-d9af-48fe-a2dd-b91b374c3aef.s3.amazonaws.com/org-64b694a6b1bd0c3120217e72-image-4e6ce1c2-ae69-4daf-a7d3-58ec955f7996",
    question_number: 2,
    state: null
  },
  {
    _id: "23a456bc78901def2gh345ij",
    category: "Fruits",
    question: "What fruit does the famous pie contain?",
    choices: ["Apple", "Banana", "Cherry"],
    correct_answer: "Cherry",
    organization_id: "klm345",
    picture_url: "https://my-bucket-22c031a8-d9af-48fe-a2dd-b91b374c3aef.s3.amazonaws.com/org-64b694a6b1bd0c3120217e72-image-a461fabc-39dd-4dd8-8f1f-47d09a44ff5b",
    question_number: 3,
    state: null
  },
  {
    _id: "cde12345f67890ghijklm23n",
    category: "Driving Test",
    question: "What is the first thing to check before starting the car?",
    choices: ["Fuel level", "Mirrors", "Seatbelt"],
    correct_answer: "Mirrors",
    organization_id: "pqr456789stu0vwxyz1a2bcd",
    picture_url: "https://my-bucket-22c031a8-d9af-48fe-a2dd-b91b374c3aef.s3.amazonaws.com/org-64b694a6b1bd0c3120217e72-image-4e6ce1c2-ae69-4daf-a7d3-58ec955f7996",
    question_number: 4,
    state: null
  },
  {
    _id: "98765432ba09876cdef1ghij",
    category: "Driving Test",
    question: "When should you use your hazard lights?",
    choices: ["Parking", "Heavy Rain", "Changing Lanes"],
    correct_answer: "Heavy Rain",
    organization_id: "lmn3456789opq012rstuvwxy",
    picture_url: null,
    question_number: 5,
    state: null
  },
  {
    _id: "4567890cde1234fghijklm5n6",
    category: "Driving Test",
    question: "What does a solid yellow line on the road indicate?",
    choices: ["No U-turn", "Speed Limit", "Pedestrian Crossing"],
    correct_answer: "No U-turn",
    organization_id: "opq789rstu012vwxy345zab",
    picture_url: "https://my-bucket-22c031a8-d9af-48fe-a2dd-b91b374c3aef.s3.amazonaws.com/org-64b694a6b1bd0c3120217e72-image-a461fabc-39dd-4dd8-8f1f-47d09a44ff5b",
    question_number: 6,
    state: null
  },
  {
    _id: "lmn67890opq123rstuv12wxy",
    category: "Driving Test",
    question: "What does a red circle with a white horizontal line indicate?",
    choices: ["No Parking", "No Entry", "No Overtaking"],
    correct_answer: "No Overtaking",
    organization_id: "cde234fgh56789ijklm0n1op",
    picture_url: "https://my-bucket-22c031a8-d9af-48fe-a2dd-b91b374c3aef.s3.amazonaws.com/org-64b694a6b1bd0c3120217e72-image-4e6ce1c2-ae69-4daf-a7d3-58ec955f7996",
    question_number: 7,
    state: null
  },
  {
    _id: "3456cde7890fgh12ijklmno1",
    category: "Driving Test",
    question: "What does ABS stand for in terms of car safety?",
    choices: ["Automatic Brake System", "Anti-Lock Brake System", "Auto Boost Steering"],
    correct_answer: "Anti-Lock Brake System",
    organization_id: "pqr234stu567vwxy890zab1c",
    picture_url: "https://my-bucket-22c031a8-d9af-48fe-a2dd-b91b374c3aef.s3.amazonaws.com/org-64b694a6b1bd0c3120217e72-image-4e6ce1c2-ae69-4daf-a7d3-58ec955f7996",
    question_number: 8,
    state: null
  },
  {
    _id: "2rstu3456789vwxy01zabcde",
    category: "Driving Test",
    question: "What should you do if your car starts skidding?",
    choices: ["Steer in the opposite direction", "Accelerate quickly", "Brake abruptly"],
    correct_answer: "Steer in the opposite direction",
    organization_id: "lmn123opq456rstuv78wxy9z",
    picture_url: "https://my-bucket-22c031a8-d9af-48fe-a2dd-b91b374c3aef.s3.amazonaws.com/org-64b694a6b1bd0c3120217e72-image-4e6ce1c2-ae69-4daf-a7d3-58ec955f7996",
    question_number: 9,
    state: null
  },
  {
    _id: "456stuv7890wxy123zabcde",
    category: "Driving Test",
    question: "What does a green traffic light indicate?",
    choices: ["Slow down", "Stop", "Proceed with caution"],
    correct_answer: "Proceed with caution",
    organization_id: "fgh012ijklm345nop678qrs",
    picture_url: "https://my-bucket-22c031a8-d9af-48fe-a2dd-b91b374c3aef.s3.amazonaws.com/org-64b694a6b1bd0c3120217e72-image-4e6ce1c2-ae69-4daf-a7d3-58ec955f7996",
    question_number: 10,
    state: null
  },
  {
    _id: "2ijklm345nop678qrs7890tuv",
    category: "Driving Test",
    question: "What is the best way to communicate with other drivers on the road?",
    choices: ["Hand gestures", "Use the horn", "Use turn signals"],
    correct_answer: "Use turn signals",
    organization_id: "wxy123zab456cde789fgh",
    picture_url: "https://my-bucket-22c031a8-d9af-48fe-a2dd-b91b374c3aef.s3.amazonaws.com/org-64b694a6b1bd0c3120217e72-image-4e6ce1c2-ae69-4daf-a7d3-58ec955f79960",
    question_number: 11,
    state: null
  },
  {
    _id: "123def456ghi789jklm012nop",
    category: "Driving Test",
    question: "What is the purpose of a catalytic converter in a car?",
    choices: ["Improve fuel efficiency", "Filter exhaust gases", "Cool the engine"],
    correct_answer: "Filter exhaust gases",
    organization_id: "qrs345tuv678wxy901zabcde",
    picture_url: "https://my-bucket-22c031a8-d9af-48fe-a2dd-b91b374c3aef.s3.amazonaws.com/org-64b694a6b1bd0c3120217e72-image-4e6ce1c2-ae69-4daf-a7d3-58ec955f79961",
    question_number: 12,
    state: null
  },
    // Add more questions here...
  ];
  
  // Function to retrieve random questions
  function getRandomQuestions() {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, 25); // Return 25 random questions
  }
  
  // Export the API service
  export default defineEventHandler((event) => {
    return {
      questions: getRandomQuestions()
    }
  })

  