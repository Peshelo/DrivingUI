<template>
  <NuxtLayout name="instructor">
  <div>
    <div class="flex backdrop-brightness-50 justify-between bg-green-900 px-10 py-3">
      <p class="text-white font-semibold text-lg">Questions</p>
      <InstructorModal/>
    </div>
    <div class="flex justify-between mx-5 mt-10">
      <div class="mb-4">
        <label for="questionFilter" class="block font-medium mb-1"
          >Filter by question ID:</label
        >
        <input
          v-model="questionFilter"
          id="questionFilter"
          type="text"
          class="border border-gray-300 rounded-md px-4 py-1 w-full"
          placeholder="Search by question"
        />
      </div>
      <div>
        <!-- Add Button -->
        <div
          class="border-2 border-green-900 mt-10 px-2 py-1 rounded-lg cursor-pointer hover:bg-green-900"
          @click="this.openAddModal"
        >
          <p class="font-normal text-sm text-green-900 hover:text-white">
            Add new
          </p>
        </div>

        <!-- Modal -->
        <div
          v-if="addModal"
          class="z-10 pt-24 absolute inset-0 flex items-center justify-center"
        >
          <div class="bg-white rounded-lg shadow-md p-5 overflow-y-auto">
            <!-- Modal Content -->
            <div class="flex justify-between">
              <h2 class="text-2xl font-bold mb-4">{{ addModalHeading }}</h2>
              <button
                class="bg-red-500 text-white text-xl font-xl px-3 py-1 mt-4 rounded-md"
                @click="closeAddModal()"
              >
                X
              </button>
            </div>
            <p v-if="loading">Adding new question</p>
            <form
              v-else
              @submit.prevent="addQuestion()"
              class="grid grid-cols-2 gap-12 bg-white shadow-md rounded px-8 py-6 mb-4"
            >
              <!-- category -->
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="category"
                  >Category:</label
                >
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="category"
                  type="text"
                  v-model="Exam.category"
                />
                <p
                  v-if="this.errors.category"
                  class="text-sm text-red-600 text-left mb-2"
                >
                  *{{ this.errors.category }}
                </p>
              </div>
              <!-- Question -->
              <div class="mb-4">
                <label for="question">Question:</label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="question"
                  type="text"
                  v-model="Exam.question"
                />
                <p
                  v-if="this.errors.question"
                  class="text-sm text-red-600 text-left mb-2"
                >
                  *{{ this.errors.question }}
                </p>
              </div>
              <!-- Choice 1 -->
              <div class="mb-4">
                <label for="choice1">First Choice:</label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="choice1"
                  type="text"
                  v-model="Exam.choice1"
                />
                <p
                  v-if="this.errors.choice1"
                  class="text-sm text-red-600 text-left mb-2"
                >
                  *{{ this.errors.choice1 }}
                </p>
              </div>
              <!-- Choice 2 -->
              <div class="mb-4">
                <label for="choice2">Second Choice:</label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="choice2"
                  type="text"
                  v-model="Exam.choice2"
                />
                <p
                  v-if="this.errors.choice2"
                  class="text-sm text-red-600 text-left mb-2"
                >
                  *{{ this.errors.choice2 }}
                </p>
              </div>
              <!-- Choice 3 -->
              <div class="mb-4">
                <label for="choice3">Third Choice:</label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="choice3"
                  type="text"
                  v-model="Exam.choice3"
             
                />
                <p
                  v-if="this.errors.choice3"
                  class="text-sm text-red-600 text-left mb-2"
                >
                  *{{ this.errors.choice3 }}
                </p>
              </div>
              <!-- Correct Answer -->
              <div class="mb-4">
                <label for="correctAnswer">Correct Answer:</label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="correctAnswer"
                  type="text"
                  v-model="Exam.answer"
                />
                <p
                  v-if="this.errors.correctAnswer"
                  class="text-sm text-red-600 text-left mb-2"
                >
                  *{{ this.errors.correctAnswer }}
                </p>
              </div>
              <div class="mb-4">

              <!-- Uploading -->
              <div class="mt-2">
      <!-- Upload Button -->
      <label
        for="image-upload"
        class="cursor-pointer px-4 py-2 border-2 border-green-900 text-green-900 hover:text-white rounded-md shadow-sm hover:bg-green-900"
      >
      Upload
      </label>
      
      <input
        type="file"
        id="image-upload"
        ref="fileInput"
        class="hidden"
        accept="image/*"
        @change="handleFileChange"
      />
  
      <!-- Preview Image -->
      <!-- <div v-if="imageUrl" class="mt-4">
        <img :src="imageUrl" alt="Uploaded Image" class="max-h-64 rounded-md shadow-md" />
      </div> -->
    </div>

              <!-- End Uploading -->
              </div>
              <!-- Submit Button -->
              <div class="ml-2">
                <button
                  class="bg-green-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-5">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">category</th>
            <th scope="col" class="px-6 py-3">Question</th>
            <th scope="col" class="px-6 py-3">Answer</th>
            <th scope="col" class="px-6 py-3"></th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item,index) in filteredItems"
            :key="index"
            class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ index + 1}}
            </th>
            <td class="px-6 py-4">{{ item.category }}</td>
            <td class="px-6 py-4">{{ item.question }}</td>
            <td class="px-6 py-4">{{ item.correct_answer }}</td>
            <td class="px-2 py-4">
              <a href="#" class="font-medium text-green-500 dark:text-blue-500 hover:underline cursor-pointer">
                <svg class="font-medium text-red-500" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z" fill="none" stroke="#333" stroke-width="1" stroke-linejoin="round"/><path d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z" fill="none" stroke="#333" stroke-width="1" stroke-linejoin="round"/></svg>
              </a >
            </td>
            <td class="px-2 py-4">
              <a href="#" class="font-medium text-green-500 dark:text-blue-500 hover:underline cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" @click="getQuestionByID(item.national_id)" class="bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/> </svg>
              </a >
            </td>
            <td class="px-2 py-4">
              <a href="#" class="font-medium text-yellow-500 dark:text-blue-500 hover:underline cursor-pointer" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
              </a >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </NuxtLayout>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      addModal: false,
      addModalHeading: "Add new question",
      editModal: false,
      editModalHeading: "Edit a question",
      deleteModal: false,
      deleteModalHeading: "Delete a question",
      idNumberFilter: "",
      questionFilter: "",
      imageFiles:"",
      errors: {},
      Exam: {
        question: "",
        choice: [],
        answer: "",
        category: "",
        choice1: '',
        choice2:'',
        choice3:''
      },
      loading:false,
      item: [],
    };
  },
  computed: {
    filteredItems() {
      let filteredItems = this.item;

      if (this.questionFilter) {
        filteredItems = filteredItems.filter((items) =>
          items.email.toLowerCase().includes(this.questionFilter.toLowerCase())
        );
      }

      return filteredItems;
    },
  },
  methods: {
    handleFileChange (event) {
      this.imageFiles = [...event.target.files];
      const file = event.target.files[0];
      console.log(URL.createObjectURL(file));
      // this.imageUrl = URL.createObjectURL(file);
      console.log(this.imageFiles)
    },
    openAddModal() {
      this.addModal = true;
    },
    closeAddModal() {
      
      this.addModal = false;
    },
    async fetchQuestions(){
    this.loading = true;
    const URL = "http://app:8000/questions";
    const token = localStorage.token;
    await axios.get(URL,{
      headers: { "Content-Type": "application/json",
                Authorization : 'Bearer ' + localStorage.token,
              // 'Access-Control-Allow-Origin':'*'
             },
    }).then((res) =>
     {
      this.item = res.data;
      console.log(this.item)
      console.log("Fetching Data Completed...");
    }) .catch(error => {
      console.log(error.code)
      this.error=error.code;
      this.errored = true

    }).finally(() => {this.loading = false
      closeAddModal()});
    },
    async addQuestion() {
      this.errors = {};
      if (!this.Exam.question) {
        this.errors.question = "Question is required";
      }
      if (!this.Exam.category) {
        this.errors.category = "Category is required";
      }
      if (!this.Exam.answer) {
        this.errors.answer = "Answer is required";
      }
   
      let data = new FormData();
      data.append('category', this.Exam.category);
      data.append('question', this.Exam.question);
      data.append('choices', this.Exam.choice1);
      data.append('choices', this.Exam.choice2);
      data.append('choices', this.Exam.choice3);
      data.append('correct_answer', this.Exam.answer);

      for (let i = 0; i < this.imageFiles.length; i++) {
        data.append('image', this.imageFiles[i]);
      }

      // data.append('image', fs.createReadStream('/path/to/file'));
      if (Object.keys(this.errors).length === 0) {
        this.loading = true;
        // make API call or submit form data here
        try {
          await axios.post("http://app:8000/questions",
              data,
              {
                headers: { "Content-Type": "multipart/form-data",
                Authorization : 'Bearer ' + localStorage.token,
              // 'Access-Control-Allow-Origin':'*'
             },
                // credentials: "include"
              }
            )
            .then((response) => {
              const data = response.data;
              alert("Question added successfully.");
              this.response = data;
              console.log(response);
            }).catch(error => {
            console.log(error)
            // this.errored = true
            
          }).finally(() => this.loading = false);

        } catch (err) {
          console.log("Error:", err);
          this.errors.failed = "Sorry, an error occured!";
          this.errors.ERR = err;
        }
        console.log("Form submitted successfully");
      }
    },
    async getQuestionByID(ID){
          this.loading = true;
    const URL = `http://app:8000/students/${ID}`;
    // const token = localStorage.token;
    await axios.get(URL,{
      headers: { "Content-Type": "application/json",
                Authorization : 'Bearer ' + localStorage.token,
              // 'Access-Control-Allow-Origin':'*'
             },
    }).then((res) =>
     {
      this.student = res.data
      console.log(this.student);
      console.log("Information tatora baba.");
      this.editModal = true;
    }) .catch(error => {
      console.log(error.code)
      this.error=error.code;
      this.errored = true

    }).finally(() => this.loading = false);
    },
    openEditModal() {
        this.editModal = true;
    },
    closeEditModal() {
      this.editModal = false;
    },
    openDeleteModal(id) {
      this.deleteModal = true;
      this.FID = id;
      },
      closeDeleteModal() {
        this.deleteModal = false;
      },
  },
  mounted(){
    this.fetchQuestions()
  }
};
</script>

<style>
</style>
 
