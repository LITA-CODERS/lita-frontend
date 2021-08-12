exports.id = 154;
exports.ids = [154];
exports.modules = {

/***/ 1793:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Box = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)` 
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: #F9E2D2;
  border-radius: 8px;
  max-width: vmax;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: space-around;
  padding: 15px;


`;
/* harmony default export */ __webpack_exports__["Z"] = (Box);

/***/ }),

/***/ 7516:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Footer; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/whatsapp.png
/* harmony default export */ var whatsapp = ({"src":"/_next/static/image/public/whatsapp.cdd32efdef428a1da71446385149ad2f.png","height":124,"width":117,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAtElEQVR42mMAgTafeM42n7iCVp+4JCAuAuLSVp94JgYYAApEAQWqgbQWAxAA2S5AdjxMkg2IU1p9432BElOBbGEgZgfiImQTsoGYs803Xh9ITwHiZCCOR1ZQC8SdLT5xHkA6BIjLG71ieBlgYG50geDsqHze/qBUjd7AFE0GZMDEwKgMpFSAWASK+biYWRVleATFgGwQZrDmZ2U352RisRFg5fAQYuO0Z2RgcASK+zAwMLgBAP0/Ni+VKZswAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/goomer.png
/* harmony default export */ var goomer = ({"src":"/_next/static/image/public/goomer.afe5a4d57a15bb22c9c31b97e8f83480.png","height":124,"width":91,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAkUlEQVR42mMAgTafuAmtPnH/obgTJljY5hP/FYhnAAXPQCXTQRJHgYzbrb7xEUA6CYifAvEeBiDR3uoT/xxIZwBxPBDfAypqYihzDmEFchYB8TUgvgjCLd6xKgww0BuYotUflKoGFxBh51ZVERCTBDJ5gFgQiCWBWByIGWyYGBhtRTl47CQ4+UxYGZkcmBgYTQD4dji+qgBTDwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/instagram.png
/* harmony default export */ var instagram = ({"src":"/_next/static/image/public/instagram.723496760ec4f1bce45bc7149c3b41b7.png","height":50,"width":50,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAwElEQVR4nC2OPQ5BURSE5/iLSHTsQWcNKg0JjcoGKFgCNkCisQCJRCe8SsUSXquzAI3HI1Ec3xXFZM7MnTP32PsaN0yaSEpcSmFDZ5iL8CIEzpgj7FjuVeYEBB6BWghEPLZMGhDoYr7YvsBLMA+BLa1DyTeFYrmZPu7K5Wzv7j0zW/8DIqDNxwpNCpT37BHdB8sQOPBFm/oBRsdkcvmO7RUtUQicEGMeY4wK7OgbXGfp19BATI3rOe7JLOYSVAazL+dsUgaPArnaAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/logofooter.png
/* harmony default export */ var logofooter = ({"src":"/_next/static/image/public/logofooter.c398643e0edcfdf21c539a50a075d6e1.png","height":146,"width":271,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAd0lEQVR42mP48fAi4////xmAtAgQfwRiHxD/2/3zzCCaAUiA8a/Hl3V+Pro0CUjrgvgwzPDy8hHGV1eOCn++e9bo852zWl/unjV7d+MkH1BcACjOyPDwzD7GR2f2Kd07uVvp/qk9UndP7JJ5eGavGBBL3j+9hxEA5Z9YldSnzfEAAAAASUVORK5CYII="});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Footer/FooterStyle.js

const FooterStyle = (external_styled_components_default()).div`

    .facaPedido {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 70px 250px 30px 250px;
        width: maxvw;
        cursor: pointer;
    }

    .barraFooter {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto;
        height: 250px;
        width: maxvw;
        background-color: #441026;
        margin: 150px 0px 30px 0px;
        justify-content: start;
    }

    .textoFooter {
        display: flex;
        flex-direction: column;
        width: maxvw;
        color: white;
        margin: 30px 45px 25px 240px;
        text-align: center;
        font-family: "Work Sans";
        font-size: 30px;
        justify-content: center;
        align-items: center;
    }

    .logoInsta {
        display: flex;
        flex-direction: column;
        width: maxvw;
        color: white;
        margin: 12px 50px 25px 35px;
        text-align: center;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .logoFooter {
        display: flex;
        flex-direction: column;
        margin-top: 55px;
        width: maxvw;
        justify-content: start;
        align-content: flex-start;
        cursor: pointer;
    }
}`;
/* harmony default export */ var Footer_FooterStyle = (FooterStyle);
// EXTERNAL MODULE: ./src/components/Box/index.js
var Box = __webpack_require__(1793);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Footer/index.js











const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Footer_FooterStyle, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            id: "contato",
            className: "title",
            children: " Pe\xE7a sua Refei\xE7\xE3o "
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "facaPedido",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: {
          pathname: 'https://wa.me/5516988317850'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: whatsapp,
          alt: "Whatsapp",
          unsized: "true"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: {
          pathname: 'https://goomer.com.br/'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: goomer,
          alt: "Goomer",
          unsized: "true"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "barraFooter",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "logoFooter",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: {
              pathname: '/'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: logofooter,
              alt: "Logo Lit\xE1 Footer",
              unsized: "true"
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "textoFooter",
        children: ["Siga a Lit\xE1 no Instagram", /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "logoInsta",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: {
              pathname: 'https://www.instagram.com/lita.gastronomia/'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: instagram,
              alt: "Instagram",
              width: 50,
              height: 50
            })
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ var components_Footer = (Footer);

/***/ }),

/***/ 8909:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Navbar_Navbar; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/Navbar/MenuItems.js
const MenuItems = [{
  title: 'Sobre',
  url: '/#sobre',
  cName: 'nav-links'
}, {
  title: 'Cardápio',
  url: '/cardapio',
  cName: 'nav-links'
}, {
  title: 'A Cozinheira',
  url: '/#achef',
  cName: 'nav-links'
}, {
  title: 'Contato',
  url: '#contato',
  cName: 'nav-links'
}, {
  title: 'Home',
  url: '#',
  cName: 'nav-links-mobile'
}];
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/logo.png
/* harmony default export */ var logo = ({"src":"/_next/static/image/public/logo.afe3fd2e9d3fa8a54490271f34060599.png","height":99,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAYklEQVR42mNABi7CGjeBuAvE9pTUZUaRtOdWFnIWUl/nJKgehiJR5x7BAqK9pHQNgbqsgdgqSMlE7OOMTYyVzqHMDK0+cZqtPvEa7X4JCi3esSqNntGqLT5xKkBxrVafOGUAM7UXjSLVdo8AAAAASUVORK5CYII="});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Navbar/NavbarStyle.js

const NavbarStyle = (external_styled_components_default()).div`

  margin-top: 5px;
  margin-left: 0px;
  margin-bottom: 10px;
  background-color: #F9E2D2CC;
  height: 90px;
  border-radius: 0px;
  box-shadow: 10px 0px 25px 0px #A9816580;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  .NavbarItems {  
      // margin-top: 20px;
      // margin-bottom: 10px;
      background-color: #F9E2D2CC;
      height: 90px;
      border-radius: 25px;
      drop-shadow: 10px 0px 25px 0px #A9816580;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      font-family: "Work Sans";
      font-weight: bold;
      align-content: space-between;
    }
  
    .navbar-logo {
      justify-self: start;
      margin-left: 10px;
      margin-top: 10px;
      cursor: pointer;
      padding: 15px;
      height: 97,81px;
      width: 200px;
    }
  
    .nav-menu {
      display: grid;
      grid-template-columns: repeat(5, auto);
      grid-gap: 20px;
      list-style: none;
      text-align: center;
      text-decoration: none;
      width: maxvw;
      justify-content: end;
    }
  
    .nav-links {
      color: #441328;
      text-decoration: none;
      padding: 0.3rem 0.3rem;
    }
  
    .nav-links:hover {
      color: #864D5F;
      text-decoration: none;
      padding: 0.3rem 0.3rem;
    }    

  @media screen and (max-width: 1248px) {
      .NavbarItems {
          position: absolute;
          
      }

      .nav-menu{
          display: none;
          flex-direction: column;
          width: 100%;
          height: 500px;
          position: absolute;
          top: 80px;
          left: -100%;
          opacity: 100%;
          transition: all 0.5s ease;

      }
  }
  
`;
/* harmony default export */ var Navbar_NavbarStyle = (NavbarStyle);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Navbar/Navbar.js








const Navbar = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Navbar_NavbarStyle, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: "NavbarItems",
      children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "nav-menu",
        children: /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: MenuItems[0].cName,
            href: MenuItems[0].url,
            children: MenuItems[0].title
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "nav-menu",
        children: /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: MenuItems[1].cName,
            href: MenuItems[1].url,
            children: MenuItems[1].title
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: {
          pathname: '/'
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "navbar-logo",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: logo,
            alt: "Foto Destaque",
            unsized: "true"
          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "fab fa-react"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "nav-menu",
        children: /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: MenuItems[2].cName,
            href: MenuItems[2].url,
            children: MenuItems[2].title
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "nav-menu",
        children: /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: MenuItems[3].cName,
            href: MenuItems[3].url,
            children: MenuItems[3].title
          })
        })
      })]
    })
  });
};

/* harmony default export */ var Navbar_Navbar = (Navbar);

/***/ }),

/***/ 5956:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/public/fotocapa.731fa4e9aaa5ef7029ae68b9e231f23d.png","height":537,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AQAAAP6ag4UBMCkd//707gD5+vQA+/b/AM7e6gF6pKMAAQUAFf+hhWUALyQT//b2+AHd5+AAEwALAOn2/QBclK8AAQ4PE/5CLCgBU0w+/x0QAQD88vQA4vIBAKG4vgHG2t0A2Jwsb6PPBF8AAAAASUVORK5CYII="});

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;