import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Show,
  SimpleShowLayout,
  TextInput,
  Edit,
  SimpleForm,
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

export function TrackEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="Name" />
        <TextInput source="AlbumId" disabled />
        <TextInput source="Composer" />
        <TextInput source="Milliseconds" />
        <TextInput source="Bytes" />
        <TextInput source="UnitPrice" />
      </SimpleForm>
    </Edit>
  );
}
