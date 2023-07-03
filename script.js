// Image fullscreen
function openFullscreenImage(imageUrl) {
    var fullscreenContainer = document.createElement('div');
    fullscreenContainer.style.position = 'fixed';
    fullscreenContainer.style.top = '0';
    fullscreenContainer.style.left = '0';
    fullscreenContainer.style.width = '100%';
    fullscreenContainer.style.height = '100%';
    fullscreenContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    fullscreenContainer.style.display = 'flex';
    fullscreenContainer.style.alignItems = 'center';
    fullscreenContainer.style.justifyContent = 'center';
    fullscreenContainer.style.zIndex = '9999';

    var fullscreenImage = document.createElement('img');
    fullscreenImage.src = imageUrl;
    fullscreenImage.style.maxWidth = '100%';
    fullscreenImage.style.maxHeight = '100%';

    fullscreenContainer.appendChild(fullscreenImage);
    document.body.appendChild(fullscreenContainer);

    fullscreenContainer.addEventListener('click', function () {
        document.body.removeChild(fullscreenContainer);
    });
}

var designImages = document.querySelectorAll('.content img');
designImages.forEach(function (image) {
    image.addEventListener('click', function () {
        var imageUrl = image.getAttribute('src');
        openFullscreenImage(imageUrl);
    });
});
// Image fullscreeen end

// Contact
function contact() {
    var email = 'zuchibusiness@gmail.com';
    var subject = 'In need of a graphic design or video editing';
    var body = 'Hello Zuchi, im in need of a design for (....Your Reason....), and if you are available i would like to ask if you can edit my video for (....Your Reason....)';
  
    var mailto = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  
    window.open(mailto, '_blank');
  }
// Contact End