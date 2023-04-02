import { Create, SimpleForm, TextInput } from "react-admin";

export const DepartmentCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Name" source="name"  fullWidth />
        </SimpleForm>
    </Create>
);