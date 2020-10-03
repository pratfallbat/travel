import $ from "jquery";

class Modal {
  constructor() {
    this.modal = new $(".modal");
    this.openModalButton = $(".open-modal");

    this.closeModalButton = $(".modal__close");

    this.events();

    $(document).on("click", ".modal__close", function () {
      $(".modal").removeClass("modal--is-visible");
    });

    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      $(".modal").removeClass("modal--is-visible");
    }
  }
  events() {
    var thats = this;

    this.openModalButton.click(this.openModel.bind(this));
    // clicking the x close button

    // this.closeModalButton.click(this.closeModal.bind(this));
    // pushes the escape key
  }

  openModel() {
    var that = this;

    $(document).on("click", ".open-modal", function () {
      $(".modal").addClass("modal--is-visible");
      return false;
    });
  }
  closeModal() {
    $(document).on("click", ".modal__close", function () {
      $(".modal").removeClass("modal--is-visible");
    });
  }
}
export default Modal;
