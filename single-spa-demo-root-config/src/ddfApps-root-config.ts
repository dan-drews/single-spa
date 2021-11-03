import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@ddfApps/ChangeOrders",
  app: () => System.import("@ddfApps/ChangeOrders"),
  activeWhen: ["/COs"]
});

registerApplication({
  name: "@ddfApps/PurchaseOrders",
  app: () => System.import("@ddfApps/PurchaseOrders"),
  activeWhen: ["/POs"]
});

start({
  urlRerouteOnly: true,
});
