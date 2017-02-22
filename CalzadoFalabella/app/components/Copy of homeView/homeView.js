'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),
    // additional requires
    viewModel = require('./homeView-view-model');

var frameModule = require("ui/frame");
var imageModule = require("ui/image");

// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        // additional pageInit
    }



    //var page = args.object;

    // Hide the iOS UINavigationBar so it doesn't get in the way of the animation
    if (frameModule.topmost().ios) {
        frameModule.topmost().ios.navBarVisibility = "never";
    }

    // Create a new image
    var item = new imageModule.Image();

    // Set the image's source to a file named “icon” in the
    // project's App_Resources folder. For more information on
    // how these image paths work refer to the images section
    // on the NativeScript getting started guide
    // http://docs.nativescript.org/getting-started#images
    item.src = "~/images/logoGrande.png";

    // The actual image file is large so that it looks good when scaled.
    // This shrinks the starting height of the image to a reasonable size.

    // Attach an event handler that runs after the image loads.
    // (We don't want the animation to kick off until the image is ready.)
    item.on("loaded", function (args) {
        // Kick off the animations. In a more realistic scenario, you may want to
        // perform some backend processing while the splashscreen is up before
        // your first call to animate(). But for simplicity's sake this example
        // just calls animate() right away.
        args.object
            // Shrink the logo over 1.5 seconds
            .animate({
                scale: { x: 0, y: 0 },
                duration: 2000
            })
            .then(function () {
                // Drastically increase the size of the logo
                return args.object.animate({
                    scale: { x: 1, y: 1 },
                    duration: 1000,
                    // rotate: 360
                });
            })
            .then(function () {
                // Drastically increase the size of the logo
                return args.object.animate({
                    scale: { x: 0.6, y: 0.6 },
                    duration: 2000
                });
            })
            .then(function () {
                // Drastically increase the size of the logo
                return args.object.animate({
                    scale: { x: 0.6, y: 0.6 },
                    duration: 200
                });
            })
            .then(function () {
                // Fade out the logo
                return args.object.animate({
                    opacity: 0,
                    duration: 1000
                });
            })
            .then(function () {
                // Navigate to the starting page. In the case of Groceries.
                // this is the login page
                frameModule.topmost().navigate({
                    moduleName: "components/categorias/categorias",
                    animated: true,
                    clearHistory: true,
                    transition: {
                        name: "slide"
                    },
                });
            });
    });

    // Append the dynamically created image to the <GridLayout>
    var gridSplashScreen = page.getViewById("gridSplashScreen");
    gridSplashScreen.addChild(item);

    
}
exports.pageLoaded = pageLoaded;

