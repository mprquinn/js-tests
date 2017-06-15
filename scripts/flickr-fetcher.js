'use strict';

const FlickrFetcher = {
    photoObjToURL: function(photoObj) {
      return `https://farm${photoObj.farm}.staticflickr.com/${photoObj.server}/${photoObj.id}_${photoObj.secret}_b.jpg`;
    },

    transformPhotoObj: function (obj) {
      return {
        title: obj.title,
        url:   FlickrFetcher.photoObjToURL(obj)
      };
    },
};

module.exports = FlickrFetcher;