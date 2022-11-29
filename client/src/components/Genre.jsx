import {
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  Edit,
} from "react-admin";

export function GenreList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="GenreId" />
        <TextField source="Name" />
      </Datagrid>
    </List>
  );
}

export function GenreCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  );
}

export function GenreEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="Name" />
      </SimpleForm>
    </Edit>
  );
}
