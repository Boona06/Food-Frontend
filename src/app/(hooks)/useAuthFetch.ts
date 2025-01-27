// import { useAuth } from "@clerk/nextjs";
// import { useEffect, useState } from "react";

// export const useAuthFetch = (endpoint: string) => {
//   const [data, setdata] = useState<any[]>([]);

//   const { getToken } = useAuth();

//   useEffect(() => {
//     const fetchData = async () => {
//       const token = await getToken();
//       const response = await fetch(`http://localhost:5000/${endpoint}`, {
//         headers: token,
//       });
//       const data = await response.json();
//       setdata(data);
//     };
//     fetchData();
//   }, []);

//   return { data, isLoading: !data };
// };
