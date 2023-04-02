import React from "react";
import { Admin, Resource, ListGuesser, Create, SimpleForm, TextInput } from "react-admin";
import { dataProvider } from "ra-data-simple-prisma";
import { DepartmentCreate } from "./department";
import { EventCreate, EventList } from "./events";




const ReactAdminDashboard = () => {
  return (
    <Admin dataProvider={dataProvider("/api")}>
        <Resource name="department" list={ListGuesser} create={DepartmentCreate} recordRepresentation={(record) => `${record.name}`}   />
        <Resource name="event" list={EventList} create={EventCreate}  />
    </Admin>
  );
};

export default ReactAdminDashboard;
