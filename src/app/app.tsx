// import { DevtoolsLazy } from "@livestore/devtools-react";
import { Text, View } from "react-native";
// import { schema } from "../schema";

const App = () => {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

// console.log(schema);

export default function Page() {
  return <App />;

  // return (
  //   <View className="flex flex-1">
  //     <LiveStoreProvider
  //       schema={schema}
  //       loadStorage={() =>
  //         WebWorkerStorage.load({ fileName: "app.db", type: "opfs" })
  //       }
  //       fallback={<div>Loading...</div>}
  //       boot={(db) => {
  //         console.log("booting");
  //         return db.execute(
  //           sql`INSERT OR IGNORE INTO app (id, newTodoText, filter) VALUES ('static', '', 'all')`
  //         );
  //       }}
  //     >
  //       <App />
  //       {/* <DevtoolsLazy schema={schema} /> */}
  //     </LiveStoreProvider>
  //   </View>
  // );
}
