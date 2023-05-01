import {
  AutocompleteInput,
  Create,
  Datagrid,
  DateField,
  Edit,
  List,
  NumberField,
  ReferenceField,
  ReferenceInput,
  ReferenceOneField,
  RichTextField,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  UrlField,
} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import { RadioButtonGroupInput } from 'react-admin';
import { DateTimeInput } from 'react-admin';
import { NumberInput } from 'react-admin';

export const EventCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label='Name' source='name' fullWidth />
      <TextInput label='URL Slug' source='slug' fullWidth />
      <TextInput label='Event Summary' multiline source='summary' fullWidth />
      <RichTextInput
        aria-rowcount={10}
        label='Content'
        source='content'
        fullWidth
      />
      <TextInput label='Poster URL' source='poster' fullWidth />
      <RadioButtonGroupInput
        label='Type'
        source='type'
        choices={[
          { id: 'workshop', name: 'Workshop' },
          { id: 'event', name: 'Event' },
        ]}
      />
      <DateTimeInput label='Date' source='date' />
      <TextInput label='Location' source='location' fullWidth />
      <TextInput label='Registration Fee' source='registrationFee' fullWidth />
      <TextInput label='Prize Money' source='prizeMoney' fullWidth />
      <NumberInput
        label='Maximum Registrations'
        source='maximumRegistration'
        step={1}
        fullWidth
      />
      <TextInput label='Form URL' source='formLink' fullWidth />
      <ReferenceInput
        label='Department'
        source='departmentId'
        reference='department'
        emptyText='Department'
        fullWidth
      >
        <AutocompleteInput optionText='name' label='Department' fullWidth />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const EventList = (props) => (
  <List {...props}>
    <Datagrid rowClick='show'>
      <TextField source='name' />
      <TextField source='slug' />
      <DateField source='date' />
      <TextField source='type' />
      <TextField source='registrationFee' />
      <ReferenceField source='departmentId' reference='department'>
        <TextField source='name' />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const EventShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='slug' />
      <DateField source='date' showTime />
      <TextField source='type' />
      <TextField source='summary' />
      <RichTextField source='content' />
      <TextField source='poster' />
      <TextField source='location' />
      <TextField source='registrationFee' />
      <TextField source='prizeMoney' />
      <NumberField source='maximumRegistration' />
      <TextField source='formLink' />
      <DateField source='createdAt' showTime />
      <ReferenceField source='departmentId' reference='department'>
        <TextField source='name' />
        <TextField source='id' />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

export const EventEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label='Name' source='name' fullWidth />
      <TextInput label='URL Slug' source='slug' fullWidth />
      <TextInput label='Event Summary' multiline source='summary' fullWidth />
      <RichTextInput
        aria-rowcount={10}
        label='Content'
        source='content'
        fullWidth
      />
      <TextInput label='Poster URL' source='poster' fullWidth />
      <RadioButtonGroupInput
        label='Type'
        source='type'
        choices={[
          { id: 'workshop', name: 'Workshop' },
          { id: 'event', name: 'Event' },
        ]}
      />
      <DateTimeInput label='Date' source='date' />
      <TextInput label='Location' source='location' fullWidth />
      <TextInput label='Registration Fee' source='registrationFee' fullWidth />
      <TextInput label='Prize Money' source='prizeMoney' fullWidth />
      <NumberInput
        label='Maximum Registrations'
        source='maximumRegistration'
        step={1}
        fullWidth
      />
      <TextInput label='Form URL' source='formLink' fullWidth />
      <ReferenceInput
        label='Department'
        source='departmentId'
        reference='department'
        emptyText='Department'
        fullWidth
      >
        <AutocompleteInput optionText='name' label='Department' fullWidth />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
