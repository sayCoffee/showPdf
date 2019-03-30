import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home";
import Model from "./views/model";
import Category from "./views/category";
import Years from "./views/cars/years";
import Annual from "./views/cars/annual";
import Manual from "./views/cars/manual";
import Circuit from "./views/circuit";
import Turn from "./views/turn";
import TurnNone from "./views/turnNone";
import Match from "./views/match";
import MatchNo from "./views/matchNo";
import Material from "./views/material";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/model",
      name: "model",
      component: Model
    },
    {
      path: "/category",
      name: "category",
      component: Category
    },
    {
      path: "/cars/years",
      name: "years",
      component: Years
    },
    {
      path: "/cars/annual",
      name: "annual",
      component: Annual
    },
    {
      path: "/cars/manual",
      name: "manual",
      component: Manual
    },
    {
      path: "/circuit",
      name: "circuit",
      component: Circuit
    },
    {
      path: "/turn",
      name: "turn",
      component: Turn
    },
    {
      path: "/turnNone",
      name: "turnNone",
      component: TurnNone
    },
    {
      path: "/match",
      name: "match",
      component: Match
    },
    {
      path: "/matchNo",
      name: "matchNo",
      component: MatchNo
    },
    {
      path: "/material",
      name: "material",
      component: Material
    },
  ]
});
