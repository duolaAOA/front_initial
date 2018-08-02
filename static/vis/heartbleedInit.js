var globe = DAT.Globe(document.getElementById('global-container'), function(label) {
  return new THREE.Color([
    0xd9d9d9, 0xb6b4b5, 0x9966cc, 0x15adff, 0x3e66a3,
    0x216288, 0xff7e7e, 0xff1f13, 0xc0120b, 0x5a1301, 0xffcc02,
    0xedb113, 0x9fce66, 0x0c9a39,
    0xfe9872, 0x7f3f98, 0xf26522, 0x2bb673, 0xd7df23,
    0xe6b23a, 0x7ed3f7][label]);
}, imgStatic);

var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('get', dataSrc, true);
xhr.onreadystatechange = function() {
  var status;
  var data;
  if (xhr.readyState == 4) {
    status = xhr.status;
    if (status == 200) {
      data = JSON.parse(xhr.responseText);

      globe.init();
      globe.setData(data);
      // globe.createPoints();
      globe.animate();

    } else {
      // failed to load data
    }
  }
};
xhr.send();