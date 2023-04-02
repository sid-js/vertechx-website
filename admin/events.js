import {
  Create,
  Datagrid,
  DateField,
  List,
  ReferenceField,
  ReferenceInput,
  ReferenceOneField,
  SimpleForm,
  TextField,
  TextInput,
  UrlField
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { RadioButtonGroupInput } from "react-admin";
import { DateTimeInput } from "react-admin";
import { NumberInput } from "react-admin";

export const EventCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Name" source="name" fullWidth />
      <TextInput label="URL Slug" source="slug" fullWidth />
      <TextInput label="Event Summary" source="summary" fullWidth />
      <RichTextInput
        aria-rowcount={10}
        label="Content"
        source="content"
        fullWidth
      />
      <TextInput label="Poster URL" source="poster" fullWidth />
      <RadioButtonGroupInput
        label="Type"
        source="type"
        choices={[
          { id: "workshop", name: "Workshop" },
          { id: "event", name: "Event" },
        ]}
      />
      <DateTimeInput label="Date" source="date" />
      <TextInput label="Location" source="location" fullWidth />
      <TextInput label="Registration Fee" source="registrationFee" fullWidth />
      <NumberInput
        label="Maximum Registrations"
        source="maximumRegistration"
        step={1}
        fullWidth
      />
      <Input label="Form URL" source="formLink" fullWidth />
      <ReferenceInput
        label="Department"
        source="department"
        reference="department"
        emptyText="Department"
        fullWidth
      />
    </SimpleForm>
  </Create>
);

export const EventList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="slug" />
      <DateField source="date" />
      <TextField source="type" />
      <TextField source="registrationFee" />
      <ReferenceField source="departmentId" reference="department">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const EventShow = (props) => (
  <Show>
    <SimpleShowLayout>
        <TextField source="name" />
        <TextField source="slug" />
        <DateField source="date" />
        <TextField source="type" />
        <TextField source="registrationFee" />
        <UrlField source="formLink" />
        <ReferenceField source="departmentId" reference="department">
            <TextField source="name" />
        </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
