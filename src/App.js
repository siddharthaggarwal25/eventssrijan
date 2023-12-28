import "./App.css";
import MyComponent from "./components/MyComponent";
import ProductTwo from "./components/a";

function App() {
  return (
    <div className="App">
      <MyComponent className="backDiv" />
      <div className="frontDiv">
        <div class="flex rounded-md shadow-sm pt-5 px-5 justify-center pb-6">
          <button class="btn px-8  py-2 text-md font-medium text-yellow-700 bg-white  rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-yellow-700 focus:text-yellow-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" >
            All
          </button>
          <button class="btn px-6 py-2 text-md font-medium text-gray-900 bg-white hover:bg-gray-100 hover:text-yellow-700 focus:z-10 focus:ring-2 focus:ring-yellow-700 focus:text-yellow-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Clubs
          </button>
          <button class="btn px-6 py-2 text-md font-medium text-gray-900 bg-white  rounded-e-lg hover:bg-gray-100 hover:text-yellow-700 focus:z-10 focus:ring-2 focus:ring-yellow-700 focus:text-yellow-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Department
          </button>
        </div>
        <ProductTwo />
      </div>
    </div>
  );
}

export default App;
