// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AxiosGet = () => {
//   const [sheetData, setSheetData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https: //docs.google.com/spreadsheets/d/e/2PACX-1vSqjxYcj9hmFci-lxX2QK1dkSWvhsxiQZ9EofntA33Lb_TXqdbfGpo-SCNrySihFD7ao2YuaVv3XXAH/pub?output=csv"
//         );
//         // Extract the data from the response
//         const { data } = response;
//         setSheetData(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array to run the effect only once on mount
//   console.log(sheetData);
//   return (
//     <div>
//       {/* Render your sheet data here */}
//       {sheetData.map((row, index) => (
//         <div key={index}>
//           {/* Render each row of data */}
//           <p>{row.column1}</p>
//           <p>{row.column2}</p>
//           {/* Add more columns as needed */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AxiosGet;
