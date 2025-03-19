import { useEffect } from "react";
import { Text } from "react-native";

function MyComponent() {
  useEffect(() => {
    console.log("Component mounted!");

    // Example: Fetch data when the component mounts
    const fetchData = async (url: string) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData("https://jsonplaceholder.typicode.com/todos");

  }, []); // Empty array means it runs only once when mounted

  return(
     <Text>Hello World</Text>
)
};

