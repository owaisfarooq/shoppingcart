/*
<!-- Jquery -->
<script src="js/jquery.min.js"></script>
<script src="js/jquery-migrate-3.0.0.js"></script>

<script src="js/jquery-ui.min.js"></script>

<!-- api Calls Js -->
<script src="js/communicationsWithServer/callApi.js"></script>
<!-- Popper JS -->
<script src="js/popper.min.js"></script>
<!-- Bootstrap JS -->
<script src="js/bootstrap.min.js"></script>
<!-- alert JS -->
<script src="js/alert.js"></script>
<!-- header template Js -->
<script src="js/headerTemplate.js"></script>
<!-- Color JS -->
<!--<script src="js/colors.js"></script>-->
<!-- Slicknav JS -->
<script src="js/slicknav.min.js"></script>
<!-- Owl Carousel JS -->
<script src="js/owl-carousel.js"></script>
<!-- Magnific Popup JS -->




<script src="js/magnific-popup.js"></script>
<!-- Waypoints JS -->
<script src="js/waypoints.min.js"></script>
<!-- Countdown JS -->
<script src="js/finalcountdown.min.js"></script>
<!-- Nice Select JS -->
<script src="js/nicesellect.js"></script>
<!-- Flex Slider JS -->
<script src="js/flex-slider.js"></script>
<!-- ScrollUp JS -->


<script src="js/scrollup.js"></script>
<!-- Onepage Nav JS -->
<script src="js/onepage-nav.min.js"></script>
<!-- Easing JS -->
<script src="js/easing.js"></script>
<!-- Active JS -->
<script src="js/active.js"></script>
<!-- cart JS -->
<script src="js/communicationsWithServer/cart.js"></script>
<!-- Onload JS -->
<script src="js/communicationsWithServer/onload.js"></script>
<!-- Search JS -->
<script src="js/communicationsWithServer/search.js"></script>
<!-- changePage JS -->
<script src="js/changePage.js"></script>
<!-- authentication JS -->
<script src="js/communicationsWithServer/auth.js"></script>
<!-- category div visibilty Js -->
<!-- <script src="js/cat-nav-visability.js"></script> -->
*/
// const callApiScript = document.c ateElement("script");
// const callApiScript = document.createElement("script");
// callApiScript.src = "js/communicationsWithServer/callApi.js";
// document.body.appendChild(callApiScript)

// function loadCustomScript() {
//   // loadFile ("js/jquery.min.js")
//   // loadFile ("js/jquery-migrate-3.0.0.js")
//   // loadFile ("js/jquery-ui.min.js")
//   // loadFile ("js/communicationsWithServer/callApi.js")
//   loadFile ("js/popper.min.js")
//   loadFile ("js/bootstrap.min.js")
//   loadFile ("js/alert.js")
//   loadFile ("js/headerTemplate.js")
//   loadFile ("js/communicationsWithServer/auth.js")
//   // loadFile ("js/colors.js")
//   // loadFile ("js/nicesellect.js")
//   loadFile ("js/slicknav.min.js")
//   loadFile ("js/owl-carousel.js")
//   loadFile ("js/magnific-popup.js")
//   loadFile ("js/waypoints.min.js")
//   loadFile ("js/finalcountdown.min.js")
//   loadFile ("js/flex-slider.js")
//   loadFile ("js/scrollup.js")
//   loadFile ("js/onepage-nav.min.js")
//   loadFile ("js/easing.js")
//   loadFile ("js/active.js")
//   loadFile ("js/communicationsWithServer/cart.js")
//   // loadFile ("js/communicationsWithServer/onload.js")
//   loadFile ("js/communicationsWithServer/search.js")
//   loadFile ("js/changePage.js")

// }
// async function loadFile (path) {
//   const script = document.createElement("script");
//   script.src = path;
// }

// loadCustomScript();




function loadFile(src) {
  return new Promise(function (resolve, reject) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function loadScripts() {
  try {
    // await loadFile ("js/jquery.min.js")
    // await loadFile ("js/jquery-migrate-3.0.0.js")
    // await loadFile ("js/jquery-ui.min.js")
    await loadFile ("js/helpers/callApi.js")
    await loadFile ("js/helpers/functions.js")
    await loadFile ("js/popper.min.js")
    await loadFile ("js/bootstrap.min.js")
    await loadFile ("js/alert.js")
    await loadFile ("js/communicationsWithServer/auth.js")
    await loadFile ("js/headerTemplate.js")
    await loadFile ("js/footerTemplate.js")
    await loadFileScript()
    //await loadFile ("js/colors.js")
    // await loadFile ("js/nicesellect.js")
    await loadFile ("js/slicknav.min.js")
    await loadFile ("js/owl-carousel.js")
    await loadFile ("js/magnific-popup.js")
    await loadFile ("js/waypoints.min.js")
    await loadFile ("js/finalcountdown.min.js")
    await loadFile ("js/flex-slider.js")
    await loadFile ("js/scrollup.js")
    await loadFile ("js/onepage-nav.min.js")
    await loadFile ("js/easing.js")
    // await loadFile ("js/active.js")
    // await loadFile ("js/shopGrid.js")
    await loadFile ("js/communicationsWithServer/cart.js")
    // await loadFile ("js/communicationsWithServer/onload.js")
    await loadFile ("js/communicationsWithServer/search.js")
    await loadFile ("js/changePage.js")
    document.getElementById("preloader").remove();
  } catch (error) {
    console.error("Error loading scripts:", error);
  }
}
loadScripts() 