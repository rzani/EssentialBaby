if (Meteor.isClient) {

  // CATEGORYS
  Template.navbar.helpers({
    categories: [
      { text: "Roupas", slug: "roupas", icon: "mdi-action-face-unlock" },
      { text: "Quarto", slug: "quarto", icon: "mdi-action-face-unlock" },
      { text: "Passeio", slug: "passeio", icon: "mdi-action-face-unlock" },
      { text: "Higiene", slug: "higiene", icon: "mdi-action-face-unlock" },
      { text: "Acessórios", slug: "acessorios", icon: "mdi-action-face-unlock" },
    ]
  });



}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
