import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Show,
  SimpleShowLayout,
  TextInput,
  Edit,
  SimpleForm,
} from "react-admin";

const invoiceItemFilters = [
  <TextInput label="Id" source="InvoiceLineId" alwaysOn />,
  <TextInput label="Quantity" source="Quantity" />,
];

export function InvoiceItemList() {
  return (
    <List filters={invoiceItemFilters}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <ReferenceField source="TrackId" reference="tracks" />
        <TextField source="InvoiceId" />
        <TextField source="UnitPrice" />
        <TextField source="Quantity" />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export function InvoiceItemShow() {
  return (
    <Show title="Invoice Item view">
      <SimpleShowLayout>
        <TextField source="id" />
        <ReferenceField source="TrackId" reference="tracks" />
        <TextField source="InvoiceId" />
        <TextField source="UnitPrice" />
        <TextField source="Quantity" />
      </SimpleShowLayout>
    </Show>
  );
}

export function InvoiceItemEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="InvoiceId" />
        <TextInput source="UnitPrice" />
        <TextInput source="Quantity" />
      </SimpleForm>
    </Edit>
  );
}
