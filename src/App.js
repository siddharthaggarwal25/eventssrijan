import "./App.css";
import MyComponent from "./components/MyComponent";
import ProductTwo from "./components/a";

function App() {
  return (
    <div className="App">
      <MyComponent className="backDiv" />
      <div className="frontDiv">
        <div class="flex rounded-md shadow-sm pt-5 px-5 justify-center pb-6">
          <button class="px-8  py-2 text-md font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white   "  >
            All
          </button>
          <button class="px-6 py-2 text-md font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Clubs
          </button>
          <button class="px-6 py-2 text-md font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Department
          </button>
        </div>
        <ProductTwo/>
      </div>
    </div>
  );
}

export default App;
