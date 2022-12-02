import { List, Datagrid, TextField, ReferenceField } from "react-admin";

export function InvoiceItemList() {
  return (
    <List>
      <Datagrid rowClick="show">
        <ReferenceField source="TrackId" reference="tracks" />
        <TextField source="InvoiceLineId" />
        <TextField source="InvoiceId" />
        <TextField source="UnitPrice" />
        <TextField source="Quantity" />
      </Datagrid>
    </List>
  );
}
