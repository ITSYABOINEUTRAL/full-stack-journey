const generateBtn = document.querySelector('#generate');
const spinner = document.querySelector('.spinner');
const generateLabel = document.querySelector('#generate-label');


function setLoading(isLoading) {
  spinner.classList.toggle('hidden', !isLoading);
  generateLabel.textContent = isLoading ? 'Loading...' : 'Generate User';
  generateBtn.disabled = isLoading;
}

function fetchUser() {
  setLoading(true);
  fetch('https://randomuser.me/api')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      displayUser(data.results[0]);
    })
    .catch((error) => {
      console.error(error);
      document.querySelector('#user').innerHTML =
        '<p class="text-red-300">Failed to load user. Please try again.</p>';
    })
    .finally(() => {
      setLoading(false);
    });
}

function displayUser(user) {
  const userDisplay = document.querySelector('#user');

  if (user.gender === 'female') {
    document.body.style.backgroundColor = 'rebeccapurple';
  } else {
    document.body.style.backgroundColor = 'steelblue';
  }

  userDisplay.innerHTML = `
    <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8">
      <img
        class="w-32 h-32 sm:w-48 sm:h-48 rounded-full flex-shrink-0"
        src="${user.picture.large}"
        alt="Profile picture of ${user.name.first} ${user.name.last}"
      />
      <div class="space-y-3 w-full min-w-0 text-center sm:text-left break-words">
        <p class="text-xl">
          <span class="font-bold">Title: </span>${user.name.title}
        </p>
        <p class="text-xl">
          <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
        </p>
        <p class="text-xl break-all">
          <span class="font-bold">Email: </span> ${user.email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Phone: </span>${user.phone}
        </p>
        <p class="text-xl">
          <span class="font-bold">Location: </span> ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.postcode}, ${user.location.state}, ${user.location.country}
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
      </div>
    </div>`;
}

generateBtn.addEventListener('click', fetchUser);
