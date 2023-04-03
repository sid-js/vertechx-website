import { Create, Datagrid, List, SimpleForm, TextField, TextInput } from "react-admin";

export const DepartmentCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Name" source="name"  fullWidth />
        </SimpleForm>
    </Create>
);

export const DepartmentList = (props) => (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
      </Datagrid>
    </List>
  );