import $ from "jquery";
import waypounts from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offsetPct = offset;
    this.hideInitially();
    this.createwaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createwaypoints() {
    var that = this;

    this.itemsToReveal.each(function () {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function () {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPct,
      });
    });
  }
}
export default RevealOnScroll;
