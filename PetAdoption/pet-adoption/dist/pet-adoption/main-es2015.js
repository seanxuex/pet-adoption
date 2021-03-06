(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<button mat-button id=\"searchButton\" class=\"bottom-button\" (click)=\"navigateToSearch()\">Search </button>\n|\n<button mat-button id=\"savedButton\" class=\"bottom-button\" (click)=\"navigateToSaved()\"> Saved </button>\n|\n<button mat-button id=\"settingsButton\" class=\"bottom-button\" (click)=\"navigateToSettings()\"> Settings</button>\n  \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/saved-page/saved-page.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/saved-page/saved-page.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  saved-page works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search-page/search-page.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search-page/search-page.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search-page works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/settings-page/settings-page.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/settings-page/settings-page.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");



//Angular Material Components































let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"]
        ],
        exports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"]
        ]
    })
], AngularMaterialModule);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search-page/search-page.component */ "./src/app/components/search-page/search-page.component.ts");
/* harmony import */ var _components_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/settings-page/settings-page.component */ "./src/app/components/settings-page/settings-page.component.ts");
/* harmony import */ var _components_saved_page_saved_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/saved-page/saved-page.component */ "./src/app/components/saved-page/saved-page.component.ts");






const routes = [
    {
        path: '',
        component: _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_3__["SearchPageComponent"],
        pathMatch: 'full'
    },
    {
        path: 'search',
        component: _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_3__["SearchPageComponent"],
        pathMatch: 'full'
    },
    {
        path: 'saved',
        component: _components_saved_page_saved_page_component__WEBPACK_IMPORTED_MODULE_5__["SavedPageComponent"],
        pathMatch: 'full'
    },
    {
        path: 'setting',
        component: _components_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_4__["SettingsPageComponent"],
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom-button {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZDpcXHByb2pcXFBldEFkb3B0aW9uXFxwZXQtYWRvcHRpb24vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdHRvbS1idXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59IiwiLmJvdHRvbS1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'pet-adoption';
    }
    navigateToSearch() {
        this.router.navigateByUrl('/search');
        this.uncheckAll();
        const searchButton = document.getElementById("searchButton");
        searchButton.style.backgroundColor = "lightgray";
    }
    navigateToSaved() {
        this.router.navigateByUrl('/saved');
        this.uncheckAll();
        const savedButton = document.getElementById("savedButton");
        savedButton.style.backgroundColor = "lightgray";
    }
    navigateToSettings() {
        this.router.navigateByUrl('/setting');
        this.uncheckAll();
        const settingsButton = document.getElementById("settingsButton");
        settingsButton.style.backgroundColor = "lightgray";
    }
    uncheckAll() {
        const searchButton = document.getElementById("searchButton");
        const savedButton = document.getElementById("savedButton");
        const settingsButton = document.getElementById("settingsButton");
        searchButton.style.backgroundColor = '';
        savedButton.style.backgroundColor = '';
        settingsButton.style.backgroundColor = '';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search-page/search-page.component */ "./src/app/components/search-page/search-page.component.ts");
/* harmony import */ var _components_saved_page_saved_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/saved-page/saved-page.component */ "./src/app/components/saved-page/saved-page.component.ts");
/* harmony import */ var _components_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/settings-page/settings-page.component */ "./src/app/components/settings-page/settings-page.component.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/effects */ "./src/app/store/effects.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/reducer */ "./src/app/store/reducer.ts");
/* harmony import */ var _store_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/state */ "./src/app/store/state.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_6__["SearchPageComponent"],
            _components_saved_page_saved_page_component__WEBPACK_IMPORTED_MODULE_7__["SavedPageComponent"],
            _components_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_8__["SettingsPageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature(_store_state__WEBPACK_IMPORTED_MODULE_13__["stateName"], _store_reducer__WEBPACK_IMPORTED_MODULE_12__["featureReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_store_effects__WEBPACK_IMPORTED_MODULE_10__["PetAdoptionEffects"]])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/saved-page/saved-page.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/saved-page/saved-page.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2F2ZWQtcGFnZS9zYXZlZC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/saved-page/saved-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/saved-page/saved-page.component.ts ***!
  \***************************************************************/
/*! exports provided: SavedPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedPageComponent", function() { return SavedPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SavedPageComponent = class SavedPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
SavedPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saved-page',
        template: __webpack_require__(/*! raw-loader!./saved-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/saved-page/saved-page.component.html"),
        styles: [__webpack_require__(/*! ./saved-page.component.scss */ "./src/app/components/saved-page/saved-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SavedPageComponent);



/***/ }),

/***/ "./src/app/components/search-page/search-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/search-page/search-page.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLXBhZ2Uvc2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/search-page/search-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-page/search-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchPageComponent = class SearchPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
SearchPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-page',
        template: __webpack_require__(/*! raw-loader!./search-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search-page/search-page.component.html"),
        styles: [__webpack_require__(/*! ./search-page.component.scss */ "./src/app/components/search-page/search-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SearchPageComponent);



/***/ }),

/***/ "./src/app/components/settings-page/settings-page.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/settings-page/settings-page.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MtcGFnZS9zZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/settings-page/settings-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/settings-page/settings-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: SettingsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageComponent", function() { return SettingsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsPageComponent = class SettingsPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-page',
        template: __webpack_require__(/*! raw-loader!./settings-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/settings-page/settings-page.component.html"),
        styles: [__webpack_require__(/*! ./settings-page.component.scss */ "./src/app/components/settings-page/settings-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingsPageComponent);



/***/ }),

/***/ "./src/app/services/pet.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/pet.service.ts ***!
  \*****************************************/
/*! exports provided: PetAdoptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetAdoptionService", function() { return PetAdoptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PetAdoptionService = class PetAdoptionService {
    constructor(http) {
        this.http = http;
        this.API_URL_PETS = 'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/pets.json';
        this.API_URL_SETTINGS = 'https://s3-us-west-2.amazonaws.com/cozi-interview-dev/settings.json';
    }
    getPetList() {
        return this.http.get(this.API_URL_PETS);
    }
    getUserSettings() {
        return this.http.get(this.API_URL_SETTINGS);
    }
};
PetAdoptionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PetAdoptionService);



/***/ }),

/***/ "./src/app/store/actions.ts":
/*!**********************************!*\
  !*** ./src/app/store/actions.ts ***!
  \**********************************/
/*! exports provided: ActionTypes, GetUserSettingRequest, GetUserSettingSuccess, GetUserSettingFailed, GetPetListRequest, GetPetListSuccess, GetPetListFailed, SaveUserSettingRequest, SaveUserSettingSuccess, SavePetProfileRequest, SavePetProfileSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserSettingRequest", function() { return GetUserSettingRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserSettingSuccess", function() { return GetUserSettingSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserSettingFailed", function() { return GetUserSettingFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPetListRequest", function() { return GetPetListRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPetListSuccess", function() { return GetPetListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPetListFailed", function() { return GetPetListFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveUserSettingRequest", function() { return SaveUserSettingRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveUserSettingSuccess", function() { return SaveUserSettingSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavePetProfileRequest", function() { return SavePetProfileRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavePetProfileSuccess", function() { return SavePetProfileSuccess; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_USER_SETTING_REQUEST"] = "[Pet Adoption] Get User Setting Request";
    ActionTypes["GET_USER_SETTING_SUCCESS"] = "[Pet Adoption] Get User Setting Success";
    ActionTypes["GET_USER_SETTING_FAILED"] = "[Pet Adoption] Get User Setting Failed";
    ActionTypes["GET_PET_LIST_REQUEST"] = "[Pet Adoption] Get Pet List Request";
    ActionTypes["GET_PET_LIST_SUCCESS"] = "[Pet Adoption] Get Pet List Success";
    ActionTypes["GET_PET_LIST_FAILED"] = "[Pet Adoption] Get Pet List Failed";
    ActionTypes["SAVE_USER_SETTING_REQUEST"] = "[Pet Adoption] Save User Setting Request";
    ActionTypes["SAVE_USER_SETTING_SUCCESS"] = "[Pet Adoption] Save User Setting Success";
    ActionTypes["SAVE_PET_PROFILE_REQUEST"] = "[Pet Adoption] Save Pet Profile Request";
    ActionTypes["SAVE_PET_PROFILE_SUCCESS"] = "[Pet Adoption] Save Pet Profile Success";
})(ActionTypes || (ActionTypes = {}));
class GetUserSettingRequest {
    constructor() {
        this.type = ActionTypes.GET_USER_SETTING_REQUEST;
    }
}
class GetUserSettingSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_USER_SETTING_SUCCESS;
    }
}
class GetUserSettingFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_USER_SETTING_FAILED;
    }
}
class GetPetListRequest {
    constructor() {
        this.type = ActionTypes.GET_PET_LIST_REQUEST;
    }
}
class GetPetListSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_PET_LIST_SUCCESS;
    }
}
class GetPetListFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_PET_LIST_FAILED;
    }
}
class SaveUserSettingRequest {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.SAVE_USER_SETTING_REQUEST;
    }
}
class SaveUserSettingSuccess {
    constructor() {
        this.type = ActionTypes.SAVE_USER_SETTING_SUCCESS;
    }
}
class SavePetProfileRequest {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.SAVE_PET_PROFILE_REQUEST;
    }
}
class SavePetProfileSuccess {
    constructor() {
        this.type = ActionTypes.SAVE_PET_PROFILE_SUCCESS;
    }
}


/***/ }),

/***/ "./src/app/store/effects.ts":
/*!**********************************!*\
  !*** ./src/app/store/effects.ts ***!
  \**********************************/
/*! exports provided: PetAdoptionEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetAdoptionEffects", function() { return PetAdoptionEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_pet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pet.service */ "./src/app/services/pet.service.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! . */ "./src/app/store/index.ts");







let PetAdoptionEffects = class PetAdoptionEffects {
    constructor(actions, service) {
        this.actions = actions;
        this.service = service;
        this.GetPetList = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(___WEBPACK_IMPORTED_MODULE_6__["PetAdoptionActions"].ActionTypes.GET_PET_LIST_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => this.service.getPetList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => new ___WEBPACK_IMPORTED_MODULE_6__["PetAdoptionActions"].GetPetListSuccess({ petList: result })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new ___WEBPACK_IMPORTED_MODULE_6__["PetAdoptionActions"].GetPetListFailed({ error }))))));
        this.GetUserSetting = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(___WEBPACK_IMPORTED_MODULE_6__["PetAdoptionActions"].ActionTypes.GET_USER_SETTING_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => this.service.getUserSettings().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => new ___WEBPACK_IMPORTED_MODULE_6__["PetAdoptionActions"].GetUserSettingSuccess({ newUserSettings: result })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new ___WEBPACK_IMPORTED_MODULE_6__["PetAdoptionActions"].GetUserSettingFailed({ error }))))));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
], PetAdoptionEffects.prototype, "GetPetList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
], PetAdoptionEffects.prototype, "GetUserSetting", void 0);
PetAdoptionEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
        _services_pet_service__WEBPACK_IMPORTED_MODULE_2__["PetAdoptionService"]])
], PetAdoptionEffects);



/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: PetAdoptionActions, PetAdoptionSelectors, PetAdoptionState, PetAdoptionReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PetAdoptionActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./src/app/store/selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PetAdoptionSelectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/store/state.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PetAdoptionState", function() { return _state__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./src/app/store/reducer.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PetAdoptionReducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_3__; });







/***/ }),

/***/ "./src/app/store/reducer.ts":
/*!**********************************!*\
  !*** ./src/app/store/reducer.ts ***!
  \**********************************/
/*! exports provided: featureReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureReducer", function() { return featureReducer; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/app/store/state.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions.ts");


function featureReducer(state = _state__WEBPACK_IMPORTED_MODULE_0__["initialState"], action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SAVE_USER_SETTING_REQUEST: {
            return Object.assign({}, state, { userSettings: action.payload.newUserSettings });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SAVE_PET_PROFILE_REQUEST: {
            return Object.assign({}, state, { savedPetList: [
                    ...state.savedPetList,
                    action.payload.petProfileToSave
                ] });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_PET_LIST_SUCCESS: {
            return Object.assign({}, state, { petList: action.payload.petList });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_USER_SETTING_SUCCESS: {
            return Object.assign({}, state, { userSettings: action.payload.newUserSettings });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/store/selectors.ts":
/*!************************************!*\
  !*** ./src/app/store/selectors.ts ***!
  \************************************/
/*! exports provided: getCurrentPet, getUserSettings, getPetList, getSavedPetList, selectState, selectCurrentPet, selectUserSettings, selectPetList, selectSavedPetList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPet", function() { return getCurrentPet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserSettings", function() { return getUserSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPetList", function() { return getPetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedPetList", function() { return getSavedPetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentPet", function() { return selectCurrentPet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserSettings", function() { return selectUserSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPetList", function() { return selectPetList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSavedPetList", function() { return selectSavedPetList; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/store/state.ts");


const getCurrentPet = (state) => state ? state.currentPet : null;
const getUserSettings = (state) => state ? state.userSettings : null;
const getPetList = (state) => state ? state.petList : null;
const getSavedPetList = (state) => state ? state.savedPetList : null;
const selectState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_state__WEBPACK_IMPORTED_MODULE_1__["stateName"]);
const selectCurrentPet = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, getCurrentPet);
const selectUserSettings = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, getUserSettings);
const selectPetList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, getPetList);
const selectSavedPetList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, getSavedPetList);


/***/ }),

/***/ "./src/app/store/state.ts":
/*!********************************!*\
  !*** ./src/app/store/state.ts ***!
  \********************************/
/*! exports provided: initialState, stateName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateName", function() { return stateName; });
const initialState = {
    currentPet: null,
    userSettings: null,
    petList: null,
    savedPetList: null
};
const stateName = 'petAdoption';


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! d:\proj\PetAdoption\pet-adoption\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map