import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  ReferenceField,
  SelectInput,
  AutocompleteInput,
} from "react-admin";
import { List, TextField, Datagrid } from "react-admin";

export const AdminCreate = (props) => (
  <Create {...props}>
    <SimpleForm fullWidth>
      <ReferenceInput
        label="User"
        source="id"
        reference="user"
        emptyText="User"
        fullWidth
      >
        <AutocompleteInput optionText="name" label="User" fullWidth/>
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const AdminList = (props) => (
  <List {...props}>
    <Datagrid>
      <ReferenceField label="Name" source="id" reference="user">
        <TextField source="name" sortable={false} />
      </ReferenceField>
      <ReferenceField label="Email" source="id" reference="user">
        <TextField source="email" sortable={false} />
      </ReferenceField>
      <TextField source="id" sortable={false} />
    </Datagrid>
  </List>
);
