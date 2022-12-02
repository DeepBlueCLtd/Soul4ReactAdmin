import { Admin, Resource } from "react-admin";

import { dataProvider } from "./common/dataProvider";
import config from "./config";

import {
  GenreList,
  GenreCreate,
  GenreEdit,
  GenreShow,
} from "./components/Genre";
import {
  InvoiceItemList,
  InvoiceItemShow,
  InvoiceItemEdit,
} from "./components/InvoiceItems";
import { TrackList, TrackShow, TrackEdit } from "./components/Track";

const pkDictionary = {
  genres: "GenreId",
  artists: "ArtistId",
  customers: "CustomerId",
  employees: "EmployeeId",
  invoices: "InvoiceId",
  invoice_items: "InvoiceLineId",
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
        show={GenreShow}
      />

      <Resource
        name="invoice_items"
        list={InvoiceItemList}
        show={InvoiceItemShow}
        edit={InvoiceItemEdit}
      />

      <Resource
        name="tracks"
        list={TrackList}
        show={TrackShow}
        edit={TrackEdit}
        recordRepresentation="Name"
      />
    </Admin>
  );
}

export default App;
