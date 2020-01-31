/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import "./components/PostsContainer/PostsPage"

// import dummydata
import "./dummy-data"
import dummyData from "./dummy-data";

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  console.log(dummyData)
  return (
    <div className="App">
      {/* Add components here  and pass props where appropriate */}
    </div>
  );
};

export default App;


// const dummyData = [
//   {
//       username: "philzcoffee",
//       thumbnailUrl: 'https://instagram.fsjo9-1.fna.fbcdn.net/vp/d4728e507fe1eb2895fb7ca394bb6431/5E4122B1/t51.2885-15/s150x150/71118783_2434459423505735_6295784028176668008_n.jpg?_nc_ht=instagram.fsjo9-1.fna.fbcdn.net',
//       imageUrl: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80',
//       likes: 400,
//       timestamp: "July 17th 2017, 12:42:40 pm",
//       comments: [
//           {
//               username: "philzcoffee",
//               text: "We've got more than just delicious coffees to offer at our shops!"
//           },
//           {
//               username: "biancasaurus",
//               text: "Looks delicious!"
//           },
//           {
//               username: "martinseludo",
//               text: "Can't wait to try it!"
//           }
//       ]
//   }
// ]
