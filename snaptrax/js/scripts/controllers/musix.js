angular.module('SnaptraxApp')
    .controller('musix', ['$scope', function($scope) {
  
      var newurl;

      var newSong = function (newurl) {
    //      $('#iframeBS').attr('src', url)
    //
    //       $('#iFramePdf').load(function(){
    //       sendPrint('iframBS')
    //       })


        document.getElementById('iframeBS').setAttribute('src', newurl);

                    //document.getElementById('iframeBS').contentWindow.location.reload();

        }



        var submitUrl = function() {
                console.log("dffsfsfsf")
                //var URLText = document.getElementById('UrlText').val();
                var URLText = $('#UrlText').val();
                $.ajax({url: "http://snaptrax.herokuapp.com/users?imgURL=" + encodeURIComponent(URLText), 
                        type:"GET",
                        xhrFields: {
                            withCredentials: true
                         }

                       }).success(
                    function(data) {

                        var newurl = decodeURIComponent(data);
                        console.log(newurl);
                        newSong(newurl);
                    });
            }


        $scope.submitButton = function() {
            submitUrl();
            var val = document.getElementById('UrlText').value,
            src = '' + val,
            img = document.createElement('img');

            img.src = src;
            // document.body.appendChild(img);

            document.getElementById('newImage');
            var oldSrc = 'http://www.grupomagma.net/images/2015/image/image-05.jpg';
            var newSrc = img.src;
            $('img[src="' + oldSrc + '"]').attr('src', newSrc);
            document.getElementById('newImage').setAttribute("style", "display:inline; width: 25%;margin-top: -20%;");


            // var urlimage = document.getElementById('theImg').getAttribute('src');
            // urlimage.attributes.

            // update the attribute to the url of the new img
            //2 dom not updating html
          }




    }]);