import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config";
import { useEffect, useState } from "react";

export function Pather(value) {
  console.log(value);
  const [obj, setObj] = useState();
  const [path, setPath] = useState();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(false);
  useEffect(() => {
    console.log(users);
  }, [users]);

  useEffect(() => {
    if (value.params) {
      setObj(value.params[0]);
      setPath(value.params[1]);
    }
  }, [value.params]);

  console.log(obj);

  useEffect(() => {
    console.log("goes to useeffect");
    switch (path) {
      case "createUser":
        break;
      case "updateUser":
        break;
      case "findUser":
        onSnapshot(collection(db, "/users"), (snapshot) => {
          setSearch(
            snapshot.docs
              .filter((doc) => doc.data().email === obj.email)
              .map((doc) => doc.data())
          );

          console.log(search);
          if (search) {
            if (search[0].password === obj.password) {
              console.log(search);
              console.log(obj);
              console.log("success");
              setUsers(search[0]);
              localStorage.setItem("usercosmi", JSON.stringify(users));
            }
          }
        });
        break;
      case "createProduct":
        break;
      case "updateProduct":
        break;
      case "findProduct":
        break;
      case "getProducts":
        break;
      default:
        break;
    }
  }, [obj, path]);

  return <></>;
}

//ЛОГИКА С ЗАПОМНИТЬ МЕНЯ
