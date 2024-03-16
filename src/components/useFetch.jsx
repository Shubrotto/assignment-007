import { useEffect, useState } from "react";

const useFetch = (url) => {
  // const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const res = response.json().then((data) => {
        setTitle(data[0].title);
        setBody(data[0].body);
        console.log(data[0].id);
        setLoading(false);
      });
      return res;
    };
    getData();
  }, [url]);
  return { title, body, loading };
};

export default useFetch;
