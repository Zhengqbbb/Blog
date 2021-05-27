/**
 * [删除ClassName]
 * @param {*} element
 * @param {*} className
 */
function removeClassName(element, className) {
  if (!hasClassName(element, className)) {
    return element;
  }
  element.className = " " + element.className.trim() + " ";
  element.className = element.className
    .replace(" " + className + " ", " ")
    .trim();
  return element;
}
/**
 * [添加className]
 * @param {*} element
 * @param {*} className
 */
function addClassName(element, className) {
  if (hasClassName(element, className)) {
    return element;
  }
  element.className = element.className.trim() + " " + className.trim();
  return element;
}

/**
 * [判断是否包含对应的className]
 * @param {*} element
 * @param {*} className
 */
function hasClassName(element, className) {
  if (
    (" " + element.className.trim() + " ").indexOf(
      " " + className.trim() + " "
    ) >= 0
  ) {
    return true;
  }
  return false;
}

/**
 * [scrollToWindowTop 返回顶部]
 * @return {[type]} [description]
 */
function scrollToWindowTop() {
  return window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

var closeClassName = "btn-close";
var showClassName = "show";
var headerMenu = document.querySelector("#J_header_menu");
var headerMenulist = document.querySelector("#J_header_menu_list");

if (headerMenu && headerMenulist) {
  //h5菜单栏展示
  headerMenu.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (hasClassName(headerMenu, closeClassName)) {
      removeClassName(headerMenulist, showClassName);
      removeClassName(headerMenu, closeClassName);
    } else {
      addClassName(headerMenulist, showClassName);
      addClassName(headerMenu, closeClassName);
    }
  });
}

/**
 * @description: jquery写法，TOC目录描点跳转
 */
var initPageToc = function () {
  var heightDistance = 90;
  $('.post-toc-link').each(function() {
    $(this).click(function() {
      $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top - heightDistance + "px"}, 500);
      return false;
    });
  });
};

/**
 * @description: 原生写法，TOC目录描点跳转
 */
// var initPageToc = function () {
//   var heightDistance = 90;
//   var tocItems = document.getElementsByClassName("post-toc-link");
//   for (var i = 0; i < tocItems.length; i++) {
//     (function (index) {
//       var item = tocItems[index];
//       item.addEventListener("click", function (event) {
//         var targetHref = item.getAttribute('href');
//         var target = document.querySelector(targetHref);
//         var targetHight = target.offsetTop + target.clientTop;
//         var top = targetHight - heightDistance;
//         window.scrollTo({
//           top,
//           behavior: "smooth",
//         });
//         event.preventDefault();
//       });
//     })(i);
//   }
// };
