import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Show,
  SimpleShowLayout,
  ReferenceManyField,
  ReferenceField,
} from "react-admin";

export function AlbumList() {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="Title" />

        <ReferenceField
          label="Artist Name"
          source="ArtistId"
          reference="artists"
          link="show"
        >
          <TextField source="Name" />
        </ReferenceField>

        <EditButton />
      </Datagrid>
    </List>
  );
}

export function AlbumShow() {
  return (
    <Show title="Album view">
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="Title" />
        <TextField source="ArtistId" />
        <ReferenceField
          label="Artist Name"
          source="ArtistId"
          reference="artists"
          link="show"
        />

        <ReferenceManyField label="Tracks" target="AlbumId" reference="tracks">
          <Datagrid>
            <TextField source="Name" />
            <TextField source="Composer" />
            <TextField source="GenreId" />
            <TextField source="Milliseconds" />
            <TextField source="Bytes" />
            <TextField source="UnitPrice" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
}
