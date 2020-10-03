import MobileMenu from "./modules/mobilemenu";
import RevealOnScroll from "./modules/revealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import Modaal from "./modules/Modal";

import $ from "jquery";

var mobileMenu = new MobileMenu();

var featureItem = new RevealOnScroll($(".feature-item"), "85%");
var testimonial = new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modaal();
