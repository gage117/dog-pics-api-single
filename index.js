function fetchDogImages(breed) {
  fetch('https://dog.ceo/api/breed/' + breed + '/images/random')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    // .then((responseJson) => {
    //   let status = responseJson.status;
    //   if (status === "success") {
    //     generateImgsString(responseJson);
    //   } else {
    //     throw new Error(alert('Something went wrong. Try again later.'));
    //   }
    // })
    .then(checkedRes => generateImgsString(checkedRes))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function generateImgHtml(obj) {
    return `
        <li>
            <img src='${obj.message}' alt='A cute dog'>
        </li>
    `;
}

const generateImgsString = function (imagesObj) {
    //const images = imagesObj.message.map((item) => generateImgHtml(item));
    const image = generateImgHtml(imagesObj);
    //let finishedString = images.join('');
    $('.right-side').html(image);
  };

function handleFormSubmit() {
  $('form').submit(event => {
    event.preventDefault();
    let inputBreed = $('.input-text').val();
    fetchDogImages(inputBreed);
  });
}

function checkInputBreed(breed) {
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  handleFormSubmit();
});