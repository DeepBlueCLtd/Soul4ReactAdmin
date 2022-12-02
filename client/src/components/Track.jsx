import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Show,
  SimpleShowLayout,
  TextInput,
} from "react-admin";

const trackFilters = [
  <TextInput label="Id" source="TrackId" alwaysOn />,
  <TextInput label="Name" source="Name" />,
  <TextInput label="Composer" source="Composer" />,
];

export function TrackList() {
  return (
    <List filters={trackFilters}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="Name" />
        <TextField source="AlbumId" />
        <TextField source="Composer" />
        <TextField source="Milliseconds" />
        <TextField source="Bytes" />
        <TextField source="UnitPrice" />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export function TrackShow() {
  return (
    <Show title="Track view">
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="Name" />
        <TextField source="AlbumId" />
        <TextField source="Composer" />
        <TextField source="Milliseconds" />
        <TextField source="Bytes" />
        <TextField source="UnitPrice" />
      </SimpleShowLayout>
    </Show>
  );
}
