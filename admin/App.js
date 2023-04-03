import React from "react";
import { Admin, Resource, ListGuesser, Create, SimpleForm, TextInput } from "react-admin";
import { dataProvider } from "ra-data-simple-prisma";
import { DepartmentCreate, DepartmentList } from "./department";
import { EventCreate, EventEdit, EventList, EventShow } from "./events";
import { AdminList, AdminCreate } from "./admin";




const ReactAdminDashboard = () => {
  return (
    <Admin dataProvider={dataProvider("/api")}>
        <Resource name="department" list={DepartmentList} create={DepartmentCreate}  />
        <Resource name="event" list={EventList} create={EventCreate} show={EventShow} edit={EventEdit} />
        <Resource name="admin" list={AdminList} create={AdminCreate} recordRepresentation="name"   />
    </Admin>
  );
};

export default ReactAdminDashboard;
