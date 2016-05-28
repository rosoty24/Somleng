Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route("/", {
    name:"home"
});
Router.route("/page", {
    name:"page"
});