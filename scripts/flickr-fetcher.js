'use strict';

const FlickrFetcher = {
    photoObjToURL: function(photoObj) {
      return `https://farm${photoObj.farm}.staticflickr.com/${photoObj.server}/${photoObj.id}_${photoObj.secret}_b.jpg`;
    },

    transformPhotoObj: function (obj) {
      return {
        title: obj.title,
        url:   `https://farm${obj.farm}.staticflickr.com/${obj.server}/${obj.id}_${obj.secret}_b.jpg`
      };
    },
};

module.exports = FlickrFetcher;