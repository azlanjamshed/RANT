import { createContext, useState } from "react";

export const postcontext = createContext(null);
const PostContext = (props) => {
  const [data, setData] = useState([]);
  console.log(data);

  return (
    <postcontext.Provider value={{ data, setData }}>
      {props.children}
    </postcontext.Provider>
  );
};

export default PostContext;
