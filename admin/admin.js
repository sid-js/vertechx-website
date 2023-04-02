import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  ReferenceField,
} from "react-admin";
import { List, TextField, Datagrid } from "react-admin";

export const AdminCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput
        label="User"
        source="userId"
        reference="user"
        emptyText="User"
        fullWidth
      />
    </SimpleForm>
  </Create>
);

export const AdminList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField  source="userId" />
    </Datagrid>
  </List>
);
