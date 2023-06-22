import { Route, Routes } from "@angular/router";
import { C1Component } from "./components/c1/c1.component";
import { c1Route } from "./components/c1/c1.route";
import { C2Component } from "./components/c2/c2.component";
import { c2Route } from "./components/c2/c2.route";
import { C3Component } from "./components/c3/c3.component";
import { c3Route } from "./components/c3/c3.route";
import { NotFoundComponent } from "./components/not-found/not-found.component";


const indexRoute: Route = {
  path: "",
  component:C1Component
}
const notFound: Route = {
  path: "**",
  component:NotFoundComponent
}
export const routes: Routes = [
  indexRoute,
  c1Route,
  c2Route,
  c3Route,
  notFound
]


//export const routes: Routes = [
//  {
//    path: "",
//    component:C1Component
//  },
//  {
//    path: "c1",
//    component:C1Component
//  },
//  {
//    path: "c2",
//    component:C2Component
//  },
//  {
//    path: "c3",
//    component:C3Component
//  }
//]

