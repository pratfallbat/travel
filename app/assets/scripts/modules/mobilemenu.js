import $ from "jquery";
class MobileMenu {
  constructor() {
    //   this is spaghetti
    //   its selecting element from DOM
    //   event handlingh
    //   defining functionality
    // $(".site-header__menu-icon").click(function () {
    //   console.log("the top right icon is clicked");
    // });
    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");

    this.events();
  }
  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    //   in  the context of click this is changed for toggleMenu
    // console.log("_+______________________");
    // console.log(this);
  }
  toggleTheMenu() {
    // this.remove(); will remove it from the page
    // console.log("_+______________________");
    // console.log(this);
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
}
export default MobileMenu;
