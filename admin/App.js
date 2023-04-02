import React from "react";
import { Admin, Resource, ListGuesser, Create, SimpleForm, TextInput } from "react-admin";
import { dataProvider } from "ra-data-simple-prisma";
import { DepartmentCreate } from "./department";
import { EventCreate, EventList, EventShow } from "./events";
import { AdminList, AdminCreate } from "./admin";




const ReactAdminDashboard = () => {
  return (
    <Admin dataProvider={dataProvider("/api")}>
        <Resource name="department" list={ListGuesser} create={DepartmentCreate} recordRepresentation={(record) => `${record.name}`}   />
        <Resource name="event" list={EventList} create={EventCreate} show={EventShow} />
        <Resource name="admin" list={AdminList} create={AdminCreate} recordRepresentation={(record) => `${record.name}`}  />
    </Admin>
  );
};

export default ReactAdminDashboard;
