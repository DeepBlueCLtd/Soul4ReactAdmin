import {
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  Edit,
  useRecordContext,
} from "react-admin";

function GenreTitle() {
  const record = useRecordContext();
  return <span> Post {record ? `"${record.title}"` : ""}</span>;
}

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
