import { Admin, Resource } from "react-admin";

import { dataProvider } from "./common/dataProvider";
import { GenreList, GenreCreate, GenreEdit } from "./components/Genre";
import config from "./config";

const pkDictionary = {
  genres: "GenreId",
  artists: "ArtistId",
  customers: "CustomerId",
  employees: "EmployeeId",
  invoices: "InvoiceId",
  media_types: "MediaTypeId",
  playlists: "PlayListId",
  playlist_track: "PlayListId",
  tracks: "TrackId",
};

function App() {
  return (
    <Admin dataProvider={dataProvider({ pkDictionary, apiUrl: config.apiUrl })}>
      <Resource
        name="genres"
        list={GenreList}
        create={GenreCreate}
        edit={GenreEdit}
      />
    </Admin>
  );
}

export default App;
