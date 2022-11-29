import { Admin, Resource, EditGuesser, ListGuesser } from "react-admin";

import { dataProvider } from "./common/dataProvider";
import { GenreList, GenreCreate, GenreEdit } from "./components/Genre";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="genres/rows"
        list={GenreList}
        create={GenreCreate}
        edit={GenreEdit}
      />
    </Admin>
  );
}

export default App;
