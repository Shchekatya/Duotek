exports.ids = [2];
exports.modules = {

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_id.vue?vue&type=template&id=17313b4c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.user.name))+"</h1> <hr> <h3>"+_vm._ssrEscape(_vm._s(_vm.user.email))+"</h3>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_id.vue?vue&type=template&id=17313b4c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  async asyncData({
    $axios,
    params
  }) {
    const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id);
    return {
      user
    };
  }

});
// CONCATENATED MODULE: ./pages/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "082e6453"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map