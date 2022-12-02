import { List, Datagrid, TextField } from "react-admin";

export function TrackList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="TrackId" />
        <TextField source="Name" />
        <TextField source="AlbumId" />
        <TextField source="Composer" />
        <TextField source="Milliseconds" />
        <TextField source="Bytes" />
        <TextField source="UnitPrice" />
      </Datagrid>
    </List>
  );
}
