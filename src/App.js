import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listWhos, listWheres, listWhats } from "./graphql/queries";

const initialState = {
  whos: [],
  whats: [],
  wheres: [],
};

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

function App() {
  const [whos, setWhos] = useState(initialState.whos);
  const [whats, setWhats] = useState(initialState.whats);
  const [wheres, setWheres] = useState(initialState.wheres);

  useEffect(() => {
    async function fetchData() {
      try {
        const whoData = await API.graphql(graphqlOperation(listWhos));
        setWhos(whoData.data.listWhos.items);

        const whatData = await API.graphql(graphqlOperation(listWhats));
        setWhats(whatData.data.listWhats.items);

        const whereData = await API.graphql(graphqlOperation(listWheres));
        setWheres(whereData.data.listWheres.items);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>AndersonJames Client Database</h1>
      <ul>
        {whos.map((who) => (
          <li key={who.id}>{who.name}</li>
        ))}
      </ul>
      <ul>
        {whats.map((what) => (
          <li key={what.id}>{what.name}</li>
        ))}
      </ul>
      <ul>
        {wheres.map((where) => (
          <li key={where.id}>{where.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
