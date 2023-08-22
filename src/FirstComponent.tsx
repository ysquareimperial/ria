import { useEffect, useState } from "react";
import axios from "axios";

export default function FirstComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`, {})
      .then((response) => {
        setData(response.data);
        console.log(response);
      });
  }, []);
  return (
    <>
      {/* {JSON.stringify(data)} */}
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <h4>{item.title}</h4>
            <h4>{item.body}</h4>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}
